"""Hand tracking with wrist-seeded reacquisition and predictive hold.

Wraps the MediaPipe-architecture palm detector + hand landmark model and adds
the temporal layer that makes weak-webcam hand tracking usable:

- adaptive palm-detection cadence (detect every frame only while untracked),
- landmark-seeded reacquisition (seed the next ROI from the previous frame's
  21 landmarks, so a closed fist keeps the crop locked on the hand; fall back
  to the pose wrist only when no landmarks are known),
- left/right association by handedness + proximity (no swap on crossing),
- per-landmark One Euro smoothing (low jitter when still, low lag when fast),
  with a separate, far less damped filter on z so finger curl is not smoothed
  away,
- predictive hold + blend-in so a lost hand decays gracefully and a returning
  one eases in instead of popping.

Emits the same left/right hand payload as before, so nothing downstream changes.
"""

from __future__ import annotations

import math
import os
import time
from typing import Optional

import numpy as np

NUM_LANDMARKS = 21


def _env_float(name, default):
    try:
        return float(os.environ.get(name, default))
    except Exception:
        return default


def _env_int(name, default):
    try:
        return int(os.environ.get(name, default))
    except Exception:
        return default


# Shared with the native MediaPipe post-processing path (see hand_smoothing.py).
try:
    from xra_backends.hand_smoothing import OneEuroFilter
except ImportError:  # pragma: no cover - standalone/path-loaded module
    from ..hand_smoothing import OneEuroFilter


def _new_side():
    return {
        "present": False,
        "miss": 0,
        "t": None,
        "palm": None,       # (cx, cy, width)
        "dir": (0.0, -1.0), # wrist -> MCP unit vector
        "pts": None,        # (21, 3) last smoothed image-pixel landmarks
        "world": None,      # (21, 3) world landmarks
        "vel": None,        # (21, 3) per-second velocity (EMA)
        "filters": None,    # [ [fx, fy, fz] x 21 ]
        "blend_from": None,
        "blend_t0": 0.0,
    }


class HandTracker:
    def __init__(self, palm, hand, frame_wh):
        self._palm = palm
        self._hand = hand
        self._w, self._h = frame_wh
        self.detect_every = max(1, _env_int("XRA_HAND_DETECT_EVERY", 3))
        self.hold_ms = _env_float("XRA_HAND_HOLD_MS", 250.0)
        self.blend_ms = _env_float("XRA_HAND_BLEND_MS", 150.0)
        self.mincutoff = _env_float("XRA_HAND_MIN_CUTOFF", 1.0)
        self.beta = _env_float("XRA_HAND_BETA", 0.007)
        # Depth (z) carries the finger curl; filter it far less aggressively than
        # x/y or a curling finger reads late and mushy.
        self.z_mincutoff = _env_float("XRA_HAND_Z_MIN_CUTOFF", 6.0)
        self.z_beta = _env_float("XRA_HAND_Z_BETA", 0.05)
        # Seed the next ROI from the previous landmarks instead of the pose wrist.
        self.landmark_seed = _env_int("XRA_HAND_LANDMARK_SEED", 1) != 0
        self._frame = 0
        self._sides = {"left": _new_side(), "right": _new_side()}

    # -- helpers -------------------------------------------------------------
    def _default_width(self):
        return 0.14 * min(self._w, self._h)

    def _filters(self, side):
        st = self._sides[side]
        if st["filters"] is None:
            st["filters"] = [
                [OneEuroFilter(self.mincutoff, self.beta),
                 OneEuroFilter(self.mincutoff, self.beta),
                 OneEuroFilter(self.z_mincutoff, self.z_beta)]
                for _ in range(NUM_LANDMARKS)
            ]
        return st["filters"]

    def _decode_palms(self, palms):
        """True if a real detected palm is close to this side's last center."""
        out = {"left": None, "right": None}
        if len(palms) == 0:
            return out
        # Greedy: nearest detected palm to each side's previous center, else the
        # highest-scoring unclaimed palm per side.
        claimed = set()
        for side in ("left", "right"):
            st = self._sides[side]
            best, best_d = None, None
            for i in range(len(palms)):
                if i in claimed:
                    continue
                cx, cy = float(palms[i][1]), float(palms[i][2])
                if st["palm"] is None:
                    continue
                d = (cx - st["palm"][0]) ** 2 + (cy - st["palm"][1]) ** 2
                if best_d is None or d < best_d:
                    best, best_d = i, d
            if best is not None and best_d is not None and best_d <= (2.5 * self._default_width()) ** 2:
                out[side] = best
                claimed.add(best)
        return out

    def _landmark_seed_row(self, st):
        """Build a pseudo palm row from the side's previous 21 landmarks.

        The row uses the same layout as a real BlazePalm detection
        ``(score, cx, cy, width, wrist_x, wrist_y, mcp_x, mcp_y)``, so
        ``hands.palm_roi`` maps it into the SAME ROI geometry the landmark model
        was trained on (2.6x palm box, shifted half a box toward the fingers).
        Deriving it from the hand's own landmarks keeps the crop locked on the
        hand while the fingers curl, instead of coasting on a stale wrist/frozen
        direction.

        Returns ``None`` when no usable landmarks are known.
        """
        pts = st["pts"]
        if pts is None or len(pts) < 21:
            return None
        wrist_x, wrist_y = float(pts[0][0]), float(pts[0][1])
        mcp_x, mcp_y = float(pts[9][0]), float(pts[9][1])
        dx, dy = mcp_x - wrist_x, mcp_y - wrist_y
        norm = math.hypot(dx, dy)
        if norm < 1e-3:
            return None
        ux, uy = dx / norm, dy / norm

        # Palm width = index-MCP to pinky-MCP span (stays stable on a fist).
        width = math.hypot(float(pts[5][0]) - float(pts[17][0]),
                           float(pts[5][1]) - float(pts[17][1]))
        if width < 1e-3:
            width = 0.5 * math.hypot(float(pts[9][0]) - float(pts[0][0]),
                                     float(pts[9][1]) - float(pts[0][1]))
        if width < 1e-3:
            width = self._default_width()

        # Palm center estimate, then undo palm_roi's +0.5*width*unit shift so the
        # produced ROI centers on the hand rather than past the fingers.
        px = (float(pts[0][0]) + float(pts[5][0]) +
              float(pts[9][0]) + float(pts[17][0])) / 4.0
        py = (float(pts[0][1]) + float(pts[5][1]) +
              float(pts[9][1]) + float(pts[17][1])) / 4.0
        cx = px - 0.5 * width * ux
        cy = py - 0.5 * width * uy
        return [0.9, cx, cy, width, wrist_x, wrist_y, mcp_x, mcp_y]

    def _wrist_seed_row(self, side, pose_wrists):
        """Fallback pseudo palm row from the pose wrist when no landmarks known."""
        wrist = (pose_wrists or {}).get(side)
        if not wrist:
            return None
        st = self._sides[side]
        width = st["palm"][2] if st["palm"] else self._default_width()
        ux, uy = st["dir"]
        cx = wrist[0] + 0.5 * width * ux
        cy = wrist[1] + 0.5 * width * uy
        mcp = (wrist[0] + ux * 0.5 * width, wrist[1] + uy * 0.5 * width)
        return [0.9, cx, cy, width, wrist[0], wrist[1], mcp[0], mcp[1]]

    def _seed_palm_row(self, side, pose_wrists):
        """Landmark-seeded ROI if possible, else the pose-wrist fallback."""
        if self.landmark_seed:
            row = self._landmark_seed_row(self._sides[side])
            if row is not None:
                return row
        return self._wrist_seed_row(side, pose_wrists)

    # -- main ----------------------------------------------------------------
    def process(self, frame, pose_wrists: Optional[dict]):
        self._frame += 1
        now = time.perf_counter()
        any_present = self._sides["left"]["present"] or self._sides["right"]["present"]
        detect = (not any_present) or (self._frame % self.detect_every == 0)

        palms = self._palm.detect(frame, 0.5) if detect else np.empty((0, 8), dtype=np.float32)
        matched = self._decode_palms(palms)

        # Seed missing sides from the side's last landmarks (landmark-only ROI),
        # falling back to the pose wrist only when no landmarks are known.
        seeds = []
        for side in ("left", "right"):
            if matched.get(side) is not None:
                continue
            row = self._seed_palm_row(side, pose_wrists)
            if row is not None:
                seeds.append((side, row))

        all_palms = list(palms) + [s[1] for s in seeds] if seeds else palms
        seed_offset = len(palms)

        if len(all_palms):
            lms, world, presence, handed = self._hand.predict(frame, np.asarray(all_palms, dtype=np.float32))
        else:
            lms = np.empty((0, NUM_LANDMARKS, 3), dtype=np.float32)
            world = np.empty((0, NUM_LANDMARKS, 3), dtype=np.float32)
            presence = np.empty(0, dtype=np.float32)
            handed = np.empty(0, dtype=np.float32)

        # Associate results -> sides: handedness first, proximity to break ties.
        assign = {"left": None, "right": None}
        for i in range(len(lms)):
            want = "left" if float(handed[i]) >= 0.5 else "right"
            other = "right" if want == "left" else "left"
            if assign[want] is None:
                assign[want] = i
            elif assign[other] is None:
                assign[other] = i
            else:
                # both taken: keep the nearer to last center
                d_want = self._dist_to_prev(want, all_palms[i])
                d_other = self._dist_to_prev(other, all_palms[i])
                assign[want if d_want <= d_other else other] = i

        out = {}
        for side in ("left", "right"):
            i = assign[side]
            seeded = i is not None and i >= seed_offset
            min_presence = 0.6 if (seeded and not self._sides[side]["present"]) else 0.3
            if i is not None and float(presence[i]) >= min_presence:
                out[side] = self._update_present(side, lms[i], world[i], all_palms[i], now)
            else:
                out[side] = self._update_missing(side, now)
        return out["left"], out["right"]

    def _dist_to_prev(self, side, palm):
        st = self._sides[side]
        if st["palm"] is None:
            return 1e18
        return (float(palm[1]) - st["palm"][0]) ** 2 + (float(palm[2]) - st["palm"][1]) ** 2

    def _update_present(self, side, raw_pts, raw_world, palm, now):
        st = self._sides[side]
        filters = self._filters(side)
        sm = np.empty((NUM_LANDMARKS, 3), dtype=np.float64)
        for k in range(NUM_LANDMARKS):
            for c in range(3):
                sm[k, c] = filters[k][c](float(raw_pts[k][c]), now)

        was_missing = not st["present"]
        if was_missing:
            st["blend_from"] = st["pts"].copy() if st["pts"] is not None else None
            st["blend_t0"] = now
            st["vel"] = None

        if st["blend_from"] is not None:
            a = min(1.0, (now - st["blend_t0"]) * 1000.0 / max(1.0, self.blend_ms))
            sm = st["blend_from"] * (1.0 - a) + sm * a
            if a >= 1.0:
                st["blend_from"] = None

        if st["pts"] is not None and st["t"] is not None and now > st["t"]:
            dt = now - st["t"]
            inst = (sm - st["pts"]) / dt
            st["vel"] = inst if st["vel"] is None else (0.5 * st["vel"] + 0.5 * inst)

        st["pts"] = sm
        st["world"] = np.asarray(raw_world, dtype=np.float64).copy()
        st["present"] = True
        st["miss"] = 0
        st["t"] = now
        st["palm"] = (float(palm[1]), float(palm[2]), float(palm[3]))
        wy, wx = float(palm[4]), float(palm[5])
        my, mx = float(palm[6]), float(palm[7])
        dx, dy = mx - wx, my - wy
        n = math.hypot(dx, dy)
        if n > 1e-6:
            st["dir"] = (dx / n, dy / n)
        return self._emit(st)

    def _update_missing(self, side, now):
        st = self._sides[side]
        if not st["present"] or st["pts"] is None or st["t"] is None:
            st["present"] = False
            st["miss"] += 1
            return None
        st["miss"] += 1
        age_ms = (now - st["t"]) * 1000.0
        if age_ms > self.hold_ms:
            st["present"] = False
            st["pts"] = None
            st["world"] = None
            st["vel"] = None
            st["blend_from"] = None
            return None
        # Predictive hold: extrapolate along velocity, decaying toward the end.
        if st["vel"] is not None:
            dt = now - st["t"]
            decay = max(0.0, 1.0 - age_ms / max(1.0, self.hold_ms))
            st["pts"] = st["pts"] + st["vel"] * dt * decay
        return self._emit(st, decaying=True)

    def _emit(self, st, decaying=False):
        if st["pts"] is None:
            return None
        score = 0.4 if decaying else 0.9
        pts = [{"x": round(float(p[0]), 2), "y": round(float(p[1]), 2), "z": round(float(p[2]), 2), "score": score}
               for p in st["pts"]]
        world = None
        if st["world"] is not None:
            world = [[round(float(v), 4) for v in row] for row in st["world"]]
        return {"points": pts, "world": world}
