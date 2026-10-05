"""Shared hand-landmark temporal smoothing.

The ONNX backend wraps its landmark model in ``onnx.hand_tracker.HandTracker``,
which applies a per-landmark One Euro filter (with a separate, much less damped
filter on ``z`` so finger curl survives). The native MediaPipe path returns raw
per-frame HolisticLandmarker landmarks with no such filter, so a still hand
jitters frame-to-frame.

This module holds the reusable pieces so both paths share one implementation:

- ``OneEuroFilter`` (Casiez et al., CHI 2012) — velocity-adaptive low-pass.
- ``HandLandmarkSmoother`` — one ``(x, y, z)`` filter triple per landmark, keyed
  by hand side, with z using its own cutoff so depth/curl stays responsive.

Pure Python + stdlib only (no numpy/cv2), so it imports anywhere the backend
does, including when the optional ONNX stack is unavailable.
"""

from __future__ import annotations

import math
import os


def _env_float(name, default):
    try:
        return float(os.environ.get(name, default))
    except Exception:
        return default


class OneEuroFilter:
    """Velocity-adaptive low-pass filter (Casiez et al., CHI 2012)."""

    __slots__ = ("mincutoff", "beta", "dcutoff", "_x", "_dx", "_t")

    def __init__(self, mincutoff=1.0, beta=0.007, dcutoff=1.0):
        self.mincutoff = mincutoff
        self.beta = beta
        self.dcutoff = dcutoff
        self._x = None
        self._dx = 0.0
        self._t = None

    @staticmethod
    def _alpha(cutoff, dt):
        tau = 1.0 / (2.0 * math.pi * cutoff)
        return 1.0 / (1.0 + tau / dt)

    def reset(self):
        self._x = None
        self._dx = 0.0
        self._t = None

    def __call__(self, x, t):
        if self._x is None or self._t is None:
            self._x = x
            self._t = t
            return x
        dt = t - self._t
        if dt <= 0:
            return self._x
        dx = (x - self._x) / dt
        a_d = self._alpha(self.dcutoff, dt)
        dx_hat = a_d * dx + (1.0 - a_d) * self._dx
        cutoff = self.mincutoff + self.beta * abs(dx_hat)
        a = self._alpha(cutoff, dt)
        x_hat = a * x + (1.0 - a) * self._x
        self._x = x_hat
        self._dx = dx_hat
        self._t = t
        return x_hat


def _coord(point, axis):
    value = point.get(axis)
    if value is None:
        position = point.get("position")
        if isinstance(position, dict):
            value = position.get(axis)
    try:
        return float(value)
    except (TypeError, ValueError):
        return 0.0


class HandLandmarkSmoother:
    """Per-side, per-landmark One Euro smoothing for 21-point hand payloads.

    Keeps ``(x, y, z)`` filters per landmark, keyed by hand side. The filter set
    is rebuilt when the point count changes (a newly acquired hand must not blend
    with the previous one) and cleared on an empty hand.
    """

    def __init__(self, mincutoff=1.0, beta=0.007, z_mincutoff=6.0, z_beta=0.05):
        self.mincutoff = float(mincutoff)
        self.beta = float(beta)
        self.z_mincutoff = float(z_mincutoff)
        self.z_beta = float(z_beta)
        self._filters: dict[str, list] = {}

    @classmethod
    def from_env(cls) -> "HandLandmarkSmoother":
        return cls(
            mincutoff=_env_float("XRA_HAND_MIN_CUTOFF", 1.0),
            beta=_env_float("XRA_HAND_BETA", 0.007),
            z_mincutoff=_env_float("XRA_HAND_Z_MIN_CUTOFF", 6.0),
            z_beta=_env_float("XRA_HAND_Z_BETA", 0.05),
        )

    def reset(self, key=None) -> None:
        if key is None:
            self._filters.clear()
        else:
            self._filters.pop(key, None)

    def _new_filters(self, count):
        return [
            [OneEuroFilter(self.mincutoff, self.beta),
             OneEuroFilter(self.mincutoff, self.beta),
             OneEuroFilter(self.z_mincutoff, self.z_beta)]
            for _ in range(count)
        ]

    def smooth(self, key, points, now):
        """Return a smoothed copy of ``points`` for hand ``key`` at time ``now``."""
        if not points:
            self.reset(key)
            return points
        filters = self._filters.get(key)
        if filters is None or len(filters) != len(points):
            filters = self._new_filters(len(points))
            self._filters[key] = filters

        smoothed = []
        for index, point in enumerate(points):
            if not isinstance(point, dict):
                smoothed.append(point)
                continue
            out = dict(point)
            x, y, z = filters[index][0], filters[index][1], filters[index][2]
            out["x"] = x(_coord(point, "x"), now)
            out["y"] = y(_coord(point, "y"), now)
            out["z"] = z(_coord(point, "z"), now)
            position = out.get("position")
            if isinstance(position, dict):
                position = dict(position)
                position.update(x=out["x"], y=out["y"], z=out["z"])
                out["position"] = position
            smoothed.append(out)
        return smoothed
