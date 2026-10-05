import unittest
from copy import deepcopy
from unittest.mock import patch

try:
    from xra_backends.capture import CaptureSource
    _NATIVE_AVAILABLE = True
except Exception:  # native inference deps (mediapipe/cv2) not installed
    CaptureSource = None
    _NATIVE_AVAILABLE = False

_NATIVE_REASON = "native backend deps (mediapipe/cv2) are not installed"


def _hand_at(root_x, root_y):
    return [
        [root_x + index % 3, root_y + index % 4, 0.0, 1.0]
        for index in range(21)
    ]


def _body_with_right_arm(elbow, wrist):
    body = [[0.0, 0.0, 0.0, 0.0] for _ in range(33)]
    body[14] = list(elbow)
    body[16] = list(wrist)
    return body


def _face_box():
    return {
        "landmarks": [
            [240.0 + index % 8 * 12.0, 105.0 + index // 8 * 14.0, 0.0, 1.0]
            for index in range(48)
        ]
    }


def _scene_body(elbow, wrist):
    def point(values):
        x, y, z, score = values
        return {
            "x": x,
            "y": y,
            "z": z,
            "score": score,
            "visibility": score,
            "position": {"x": x, "y": y, "z": z},
        }

    body = [point((0.0, 0.0, 0.0, 0.0)) for _ in range(33)]
    body[11] = point((448.0, 281.0, 0.0, 0.998))
    body[12] = point((192.0, 294.0, 0.0, 0.999))
    body[14] = point(elbow)
    body[16] = point(wrist)
    body[23] = point((430.0, 520.0, 0.0, 0.80))
    body[24] = point((210.0, 520.0, 0.0, 0.80))
    return body


@unittest.skipUnless(_NATIVE_AVAILABLE, _NATIVE_REASON)
class HandBirthGuardTests(unittest.TestCase):
    def setUp(self):
        self.capture = CaptureSource()
        self.capture._reset_landmark_stabilizer("hand_birth_guard_test")

    def _confirm(self, root_x, root_y, body, now, torso=329.0, face=None):
        return self.capture._confirm_new_hand_candidate(
            "rightHand",
            _hand_at(root_x, root_y),
            body,
            face,
            640,
            360,
            torso,
            now,
        )

    def test_stationary_uncorroborated_birth_never_self_confirms(self):
        body = _body_with_right_arm(
            (120.0, 472.0, 0.0, 0.22),
            (116.0, 612.0, 0.0, 0.05),
        )

        # Roots and cadence from the first four raw detections in the 19:11
        # recording; repeat them past the original 1.4-second false track.
        trace = (
            (0.000, 275.91, 169.61),
            (0.105, 275.37, 168.19),
            (0.186, 275.61, 166.67),
            (0.229, 277.34, 168.61),
        )
        for cycle in range(8):
            for elapsed, x, y in trace:
                now = 100.0 + cycle * 0.25 + elapsed
                self.assertFalse(self._confirm(x, y, body, now))

        self.assertFalse(self.capture._hand_was_live["rightHand"])

    def test_recorded_phantom_never_reaches_stable_payload(self):
        body = _scene_body(
            (120.0, 472.0, 0.0, 0.22),
            (116.0, 612.0, 0.0, 0.05),
        )
        trace = (
            (100.000, 275.91, 169.61),
            (100.105, 275.37, 168.19),
            (100.186, 275.61, 166.67),
            (100.229, 277.34, 168.61),
        )

        for now, x, y in trace:
            payload = {
                "keypoints": deepcopy(body),
                "keypoints3D": deepcopy(body),
                "face": _face_box(),
                "leftHand": [],
                "rightHand": _hand_at(x, y),
            }
            with patch("xra_backends.capture.time.monotonic", return_value=now):
                stable = self.capture._stabilize_payload(payload, 640, 360)

            self.assertEqual(stable["rightHand"], [])
            self.assertFalse(self.capture._hand_was_live["rightHand"])

    def test_stationary_uncorroborated_birth_is_rejected_away_from_face(self):
        body = _body_with_right_arm(
            (120.0, 472.0, 0.0, 0.05),
            (116.0, 612.0, 0.0, 0.05),
        )

        for frame in range(40):
            self.assertFalse(
                self._confirm(520.0 + frame % 2, 80.0, body, 200.0 + frame * 0.05)
            )

    def test_uncorroborated_hand_can_enter_with_real_motion(self):
        body = _body_with_right_arm(
            (120.0, 472.0, 0.0, 0.05),
            (116.0, 612.0, 0.0, 0.05),
        )

        roots = ((600.0, 310.0), (586.0, 292.0), (570.0, 270.0), (550.0, 245.0))
        results = [
            self._confirm(x, y, body, 300.0 + frame * 0.07)
            for frame, (x, y) in enumerate(roots)
        ]

        self.assertEqual(results, [False, False, False, True])

    def test_candidate_born_on_face_stays_blocked_even_if_face_moves(self):
        body = _body_with_right_arm(
            (120.0, 472.0, 0.0, 0.05),
            (116.0, 612.0, 0.0, 0.05),
        )
        face = _face_box()

        roots = ((277.0, 169.0), (290.0, 155.0), (306.0, 140.0), (325.0, 124.0))
        results = [
            self._confirm(x, y, body, 350.0 + frame * 0.07, face=face)
            for frame, (x, y) in enumerate(roots)
        ]

        self.assertEqual(results, [False, False, False, False])

    def test_hand_entering_face_from_outside_can_confirm(self):
        body = _body_with_right_arm(
            (120.0, 472.0, 0.0, 0.05),
            (116.0, 612.0, 0.0, 0.05),
        )
        roots = ((430.0, 240.0), (400.0, 220.0), (370.0, 200.0), (340.0, 180.0))
        results = [
            self._confirm(x, y, body, 375.0 + frame * 0.07, face=_face_box())
            for frame, (x, y) in enumerate(roots)
        ]

        self.assertEqual(results, [False, False, False, True])

    def test_hand_born_on_face_can_confirm_after_leaving_face(self):
        body = _body_with_right_arm(
            (120.0, 472.0, 0.0, 0.05),
            (116.0, 612.0, 0.0, 0.05),
        )
        roots = (
            (277.0, 169.0),
            (310.0, 190.0),
            (345.0, 210.0),
            (380.0, 230.0),
            (415.0, 250.0),
        )
        results = [
            self._confirm(x, y, body, 385.0 + frame * 0.07, face=_face_box())
            for frame, (x, y) in enumerate(roots)
        ]

        self.assertEqual(results, [False, False, False, False, True])

    def test_hand_can_leave_cached_face_box_while_face_mesh_is_occluded(self):
        body = _body_with_right_arm(
            (120.0, 472.0, 0.0, 0.05),
            (116.0, 612.0, 0.0, 0.05),
        )
        roots = (
            (277.0, 169.0),
            (310.0, 190.0),
            (345.0, 210.0),
            (380.0, 230.0),
            (415.0, 250.0),
        )
        results = [
            self._confirm(
                x,
                y,
                body,
                387.0 + frame * 0.07,
                face=_face_box() if frame == 0 else None,
            )
            for frame, (x, y) in enumerate(roots)
        ]

        self.assertEqual(results, [False, False, False, False, True])

    def test_single_position_spike_does_not_prove_real_motion(self):
        body = _body_with_right_arm(
            (120.0, 472.0, 0.0, 0.05),
            (116.0, 612.0, 0.0, 0.05),
        )
        roots = ((280.0, 250.0), (370.0, 250.0), (280.0, 250.0), (280.0, 250.0))
        results = [
            self._confirm(x, y, body, 390.0 + frame * 0.07)
            for frame, (x, y) in enumerate(roots)
        ]

        self.assertEqual(results, [False, False, False, False])

    def test_body_corroborated_birth_is_immediate(self):
        body = _body_with_right_arm(
            (350.0, 210.0, 0.0, 0.80),
            (404.0, 160.0, 0.0, 0.30),
        )

        self.assertTrue(self._confirm(400.0, 158.0, body, 400.0))

    def test_recent_track_bypasses_birth_gate_during_rotation_dropout(self):
        body = _body_with_right_arm(
            (120.0, 472.0, 0.0, 0.05),
            (116.0, 612.0, 0.0, 0.05),
        )
        self.capture._hand_was_live["rightHand"] = False
        self.capture._hand_last_good_at["rightHand"] = 499.05
        self.capture._hand_last_trusted_root["rightHand"] = (280.0, 160.0)

        self.assertTrue(self._confirm(280.0, 160.0, body, 500.0, face=_face_box()))

    def test_rotation_dropout_reacquires_end_to_end_without_pose_wrist(self):
        live_body = _scene_body(
            (380.0, 205.0, 0.0, 0.80),
            (402.0, 162.0, 0.0, 0.90),
        )
        weak_body = _scene_body(
            (120.0, 472.0, 0.0, 0.05),
            (116.0, 612.0, 0.0, 0.05),
        )

        with patch("xra_backends.capture.time.monotonic", return_value=700.0):
            live = self.capture._stabilize_payload({
                "keypoints": deepcopy(live_body),
                "keypoints3D": deepcopy(live_body),
                "face": _face_box(),
                "leftHand": [],
                "rightHand": _hand_at(400.0, 160.0),
            }, 640, 360)
        self.assertEqual(len(live["rightHand"]), 21)

        with patch("xra_backends.capture.time.monotonic", return_value=700.20):
            dropped = self.capture._stabilize_payload({
                "keypoints": deepcopy(weak_body),
                "keypoints3D": deepcopy(weak_body),
                "face": _face_box(),
                "leftHand": [],
                "rightHand": [],
            }, 640, 360)
        self.assertEqual(dropped["rightHand"], [])
        self.assertFalse(self.capture._hand_was_live["rightHand"])

        with patch("xra_backends.capture.time.monotonic", return_value=700.95):
            reacquired = self.capture._stabilize_payload({
                "keypoints": deepcopy(weak_body),
                "keypoints3D": deepcopy(weak_body),
                "face": _face_box(),
                "leftHand": [],
                "rightHand": _hand_at(405.0, 165.0),
            }, 640, 360)
        self.assertEqual(len(reacquired["rightHand"]), 21)

    def test_late_reacquisition_cannot_jump_to_an_unrelated_phantom(self):
        body = _body_with_right_arm(
            (120.0, 472.0, 0.0, 0.05),
            (116.0, 612.0, 0.0, 0.05),
        )
        self.capture._hand_was_live["rightHand"] = False
        self.capture._hand_last_good_at["rightHand"] = 599.05
        self.capture._hand_last_trusted_root["rightHand"] = (500.0, 300.0)

        self.assertFalse(self._confirm(280.0, 160.0, body, 600.0, face=_face_box()))


@unittest.skipUnless(_NATIVE_AVAILABLE, _NATIVE_REASON)
class LandmarkSummaryTests(unittest.TestCase):
    def setUp(self):
        self.capture = CaptureSource()

    def _point(self, score):
        return {"position": {"x": 0.0, "y": 0.0, "z": 0.0}, "score": score}

    def test_summary_reports_face_and_hand_confidence(self):
        payload = {
            "keypoints": [self._point(0.8) for _ in range(33)],
            "face": {"landmarks": [[0.0, 0.0, 0.0, 1.0]] * 468, "faceInViewConfidence": 0.95},
            "leftHand": [{"x": 1.0, "y": 1.0, "z": 0.0, "score": 0.9}] * 21,
            "rightHand": [{"x": 1.0, "y": 1.0, "z": 0.0, "score": 0.4}] * 21,
        }
        summary = self.capture._landmark_summary(payload, 640, 360)
        self.assertEqual(summary["body_points"], 33)
        self.assertAlmostEqual(summary["face_confidence"], 0.95)
        self.assertAlmostEqual(summary["left_hand_confidence"], 0.9)
        self.assertAlmostEqual(summary["right_hand_confidence"], 0.4)

    def test_summary_defaults_confidences_to_zero(self):
        summary = self.capture._landmark_summary({})
        self.assertEqual(summary["face_confidence"], 0.0)
        self.assertEqual(summary["left_hand_confidence"], 0.0)
        self.assertEqual(summary["right_hand_confidence"], 0.0)
        self.assertEqual(summary["body_points"], 0)


if __name__ == "__main__":
    unittest.main()
