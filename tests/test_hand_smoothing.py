"""Unit tests for the shared hand-landmark smoother."""

import unittest

from xra_backends.hand_smoothing import HandLandmarkSmoother, OneEuroFilter


def _hand(x, y, z=0.0, score=0.9):
    return [{"x": float(x + i), "y": float(y + i), "z": float(z), "score": score}
            for i in range(21)]


class OneEuroFilterTests(unittest.TestCase):
    def test_constant_signal_is_passed_through(self):
        filt = OneEuroFilter(1.0, 0.007)
        self.assertEqual(filt(100.0, 0.0), 100.0)
        for frame in range(1, 10):
            self.assertAlmostEqual(filt(100.0, frame / 30.0), 100.0, places=9)

    def test_noise_is_attenuated(self):
        filt = OneEuroFilter(1.0, 0.007)
        raw = [100.0 + (5.0 if i % 2 else -5.0) for i in range(60)]
        out = [filt(value, i / 30.0) for i, value in enumerate(raw)]
        self.assertLess(max(out[10:]) - min(out[10:]), max(raw) - min(raw))


class HandLandmarkSmootherTests(unittest.TestCase):
    def setUp(self):
        self.smoother = HandLandmarkSmoother()

    def test_preserves_metadata_and_smooths(self):
        smoothed = self.smoother.smooth("leftHand", _hand(100.0, 200.0), 0.0)
        self.assertEqual(len(smoothed), 21)
        self.assertEqual(smoothed[0]["score"], 0.9)
        self.assertEqual(smoothed[3]["x"], 103.0)

    def test_constant_hand_stays_still(self):
        first = self.smoother.smooth("leftHand", _hand(100.0, 200.0), 0.0)
        for frame in range(1, 30):
            out = self.smoother.smooth("leftHand", _hand(100.0, 200.0), frame / 30.0)
        self.assertAlmostEqual(out[0]["x"], first[0]["x"], places=6)
        self.assertAlmostEqual(out[0]["y"], first[0]["y"], places=6)

    def test_jitter_is_reduced(self):
        for frame in range(40):
            jitter = 6.0 if frame % 2 else -6.0
            out = self.smoother.smooth("leftHand", _hand(100.0 + jitter, 200.0), frame / 30.0)
        # Output range should be far tighter than the +/-6 input swing.
        self.assertLess(abs(out[0]["x"] - 100.0), 6.0)

    def test_empty_hand_resets_filters(self):
        self.smoother.smooth("leftHand", _hand(100.0, 200.0), 0.0)
        self.smoother.smooth("leftHand", _hand(500.0, 500.0), 0.1)
        self.smoother.smooth("leftHand", [], 0.2)
        restarted = self.smoother.smooth("leftHand", _hand(50.0, 60.0), 0.3)
        self.assertEqual(restarted[0]["x"], 50.0)

    def test_z_tracks_a_step_faster_than_xy(self):
        xy = OneEuroFilter(1.0, 0.007)
        z = OneEuroFilter(6.0, 0.05)
        xy(0.0, 0.0)
        z(0.0, 0.0)
        for frame in range(1, 6):
            xy_out = xy(100.0, frame / 30.0)
            z_out = z(100.0, frame / 30.0)
        self.assertGreater(z_out, xy_out)


if __name__ == "__main__":
    unittest.main()
