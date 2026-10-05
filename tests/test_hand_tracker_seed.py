"""Unit tests for the ONNX HandTracker's landmark-seeded ROI and z filtering.

``xra_backends.onnx.__init__`` eagerly imports the engine (cv2/onnxruntime), so
the module under test is loaded straight from its file to keep these tests
dependency-free.
"""

import importlib.util
import math
import os
import unittest
from pathlib import Path
from unittest.mock import patch

import numpy as np

_HAND_TRACKER_PATH = Path(__file__).resolve().parents[1] / "xra_backends" / "onnx" / "hand_tracker.py"
_spec = importlib.util.spec_from_file_location("xra_hand_tracker_under_test", _HAND_TRACKER_PATH)
hand_tracker = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(hand_tracker)

HandTracker = hand_tracker.HandTracker
OneEuroFilter = hand_tracker.OneEuroFilter

ROI_SCALE = 2.6


def _hand(points):
    pts = np.zeros((21, 3), dtype=np.float64)
    for index, (x, y) in points.items():
        pts[index] = (float(x), float(y), 0.0)
    return pts


# Open right hand, fingers pointing "up" (screen -y).
OPEN_HAND = _hand({
    0: (100.0, 200.0),   # wrist
    5: (80.0, 160.0),    # index MCP
    9: (100.0, 150.0),   # middle MCP
    13: (120.0, 160.0),  # ring MCP
    17: (135.0, 170.0),  # pinky MCP
    8: (70.0, 80.0),     # index tip
    12: (100.0, 60.0),   # middle tip
    16: (130.0, 80.0),   # ring tip
    20: (150.0, 100.0),  # pinky tip
})

# Same wrist/palm, fingers curled into the palm (fist): tips collapse toward wrist.
FIST_HAND = _hand({
    0: (100.0, 200.0),
    5: (80.0, 160.0),
    9: (100.0, 150.0),
    13: (120.0, 160.0),
    17: (135.0, 170.0),
    8: (95.0, 175.0),
    12: (100.0, 180.0),
    16: (110.0, 178.0),
    20: (120.0, 182.0),
})


def _palm_roi_geometry(row):
    """Replicate hands.palm_roi so the seed row can be checked without cv2."""
    _, cx, cy, width, wx, wy, mx, my = (float(v) for v in row[:8])
    dx, dy = mx - wx, my - wy
    n = math.hypot(dx, dy)
    ux, uy = (dx / n, dy / n) if n > 0 else (0.0, -1.0)
    center = (cx + 0.5 * width * ux, cy + 0.5 * width * uy)
    return center, ROI_SCALE * width


class LandmarkSeedTests(unittest.TestCase):
    def setUp(self):
        self.tracker = HandTracker(palm=None, hand=None, frame_wh=(640, 360))

    def test_no_landmarks_returns_none(self):
        self.assertIsNone(self.tracker._landmark_seed_row(hand_tracker._new_side()))

    def test_seed_roi_centers_on_the_hand(self):
        st = hand_tracker._new_side()
        st["pts"] = OPEN_HAND.copy()
        row = self.tracker._landmark_seed_row(st)
        self.assertIsNotNone(row)

        center, side = _palm_roi_geometry(row)
        expected_center = (
            (OPEN_HAND[0][0] + OPEN_HAND[5][0] + OPEN_HAND[9][0] + OPEN_HAND[17][0]) / 4.0,
            (OPEN_HAND[0][1] + OPEN_HAND[5][1] + OPEN_HAND[9][1] + OPEN_HAND[17][1]) / 4.0,
        )
        self.assertAlmostEqual(center[0], expected_center[0], places=3)
        self.assertAlmostEqual(center[1], expected_center[1], places=3)

        expected_width = math.hypot(OPEN_HAND[5][0] - OPEN_HAND[17][0],
                                    OPEN_HAND[5][1] - OPEN_HAND[17][1])
        self.assertAlmostEqual(side, ROI_SCALE * expected_width, places=3)

    def test_fist_still_produces_a_centered_roi(self):
        st = hand_tracker._new_side()
        st["pts"] = FIST_HAND.copy()
        row = self.tracker._landmark_seed_row(st)
        self.assertIsNotNone(row)
        center, side = _palm_roi_geometry(row)
        # Curled fingertips must not drag the ROI off the palm: width comes from
        # the knuckle span, which is stable on a fist.
        self.assertGreater(side, 0.0)
        self.assertAlmostEqual(center[0], 103.75, places=3)
        self.assertAlmostEqual(center[1], 170.0, places=3)

    def test_landmarks_take_precedence_over_pose_wrist(self):
        st = self.tracker._sides["left"]
        st["pts"] = OPEN_HAND.copy()
        row = self.tracker._landmark_seed_row(st)
        chosen = self.tracker._seed_palm_row("left", {"left": (500.0, 500.0)})
        self.assertIsNotNone(chosen)
        self.assertAlmostEqual(chosen[1], row[1], places=6)
        self.assertAlmostEqual(chosen[2], row[2], places=6)

    def test_pose_wrist_fallback_when_no_landmarks(self):
        self.tracker._sides["left"]["dir"] = (0.0, -1.0)
        row = self.tracker._seed_palm_row("left", {"left": (300.0, 300.0)})
        self.assertIsNotNone(row)
        width = self.tracker._default_width()
        self.assertAlmostEqual(row[3], width, places=6)
        self.assertAlmostEqual(row[1], 300.0, places=6)
        self.assertAlmostEqual(row[2], 300.0 - 0.5 * width, places=6)

    def test_landmark_seed_can_be_disabled(self):
        with patch.dict(os.environ, {"XRA_HAND_LANDMARK_SEED": "0"}):
            tracker = HandTracker(palm=None, hand=None, frame_wh=(640, 360))
        self.assertFalse(tracker.landmark_seed)
        tracker._sides["left"]["pts"] = OPEN_HAND.copy()
        row = tracker._seed_palm_row("left", {"left": (300.0, 300.0)})
        # Falls back to the wrist row even though landmarks are known.
        self.assertAlmostEqual(row[1], 300.0, places=6)

    def test_degenerate_landmarks_fall_back(self):
        st = hand_tracker._new_side()
        st["pts"] = np.zeros((21, 3))
        self.assertIsNone(self.tracker._landmark_seed_row(st))
        row = self.tracker._seed_palm_row("left", {"left": (300.0, 300.0)})
        self.assertIsNotNone(row)
        self.assertAlmostEqual(row[1], 300.0, places=6)


class ZFilterTests(unittest.TestCase):
    def setUp(self):
        self.tracker = HandTracker(palm=None, hand=None, frame_wh=(640, 360))

    def test_z_uses_its_own_filter(self):
        filters = self.tracker._filters("left")[0]
        self.assertEqual(filters[0].mincutoff, self.tracker.mincutoff)
        self.assertEqual(filters[1].mincutoff, self.tracker.mincutoff)
        self.assertEqual(filters[2].mincutoff, self.tracker.z_mincutoff)
        self.assertGreater(filters[2].mincutoff, filters[0].mincutoff)

    def test_z_tracks_a_step_faster_than_xy(self):
        xy = OneEuroFilter(self.tracker.mincutoff, self.tracker.beta)
        z = OneEuroFilter(self.tracker.z_mincutoff, self.tracker.z_beta)
        dt = 1.0 / 30.0
        xy(0.0, 0.0)
        z(0.0, 0.0)
        t = 0.0
        for _ in range(5):
            t += dt
            xy_out = xy(100.0, t)
            z_out = z(100.0, t)
        self.assertGreater(z_out, xy_out)


if __name__ == "__main__":
    unittest.main()
