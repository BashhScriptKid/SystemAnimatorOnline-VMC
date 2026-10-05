"""Contract tests for the browser <-> native backend boundary.

Part A (always runs) exercises ``xra_backends/contract.py`` directly: it is
dependency-free, so schema, stamping, and enum invariants are checked even when
the native inference stack (mediapipe/cv2) is not installed.

Part B (runs when the native stack imports) pins the *actual* emitted shapes:
a golden ``to_wire`` frame, the real ``CaptureSource.status`` /
``EngineDispatcher.status`` field sets, and backend idempotency guarantees
behind the reconnect/duplicate-selection regressions.

Run: ``python3 -m pytest tests/test_contract.py -q``
"""

import json
import unittest
from types import SimpleNamespace

from xra_backends import contract


def _heavy_available():
    try:
        from xra_backends import capture, engine  # noqa: F401
        return True
    except Exception:
        return False


HEAVY = _heavy_available()
HEAVY_REASON = "native backend deps (mediapipe/cv2) are not installed"


# ---------------------------------------------------------------------------
# Part A — dependency-free contract invariants
# ---------------------------------------------------------------------------

class ContractSchemaTests(unittest.TestCase):
    def test_body_landmark_names_are_complete(self):
        self.assertEqual(len(contract.BODY_LANDMARK_NAMES), contract.BODY_LANDMARK_COUNT)
        self.assertEqual(len(set(contract.BODY_LANDMARK_NAMES)), contract.BODY_LANDMARK_COUNT)
        self.assertEqual(contract.BODY_LANDMARK_NAMES[15], "left_wrist")
        self.assertEqual(contract.BODY_LANDMARK_NAMES[16], "right_wrist")

    def test_geometry_ok_reasons_are_a_subset_of_all_reasons(self):
        self.assertTrue(contract.GEOMETRY_OK_REASONS <= contract.GEOMETRY_REASONS)
        self.assertIn("ok", contract.GEOMETRY_OK_REASONS)
        self.assertIn("upper_body_only", contract.GEOMETRY_OK_REASONS)
        self.assertIn("face_only", contract.GEOMETRY_OK_REASONS)

    def test_pose_contract_is_sequenced_and_versioned(self):
        self.assertIn("pose", contract.SEQUENCED_SURFACES)
        self.assertIn("contract_version", contract.required_fields("pose"))
        self.assertIn("seq", contract.required_fields("pose"))

    def test_stamp_adds_version_and_optional_seq(self):
        message = {"type": "pose"}
        out = contract.stamp_pose(message, 7)
        self.assertIs(out, message)
        self.assertEqual(out["contract_version"], contract.CONTRACT_VERSION)
        self.assertEqual(out["seq"], 7)

        status = contract.stamp({"type": "status"})
        self.assertIn("contract_version", status)
        self.assertNotIn("seq", status)

    def test_stamp_tolerates_non_dict(self):
        self.assertIsNone(contract.stamp(None))

    def test_missing_reports_fields_and_conforms_agrees(self):
        self.assertEqual(contract.missing("pose", {}), list(contract.POSE_FIELDS))
        self.assertFalse(contract.conforms("pose", {}))
        complete = {field: None for field in contract.POSE_FIELDS}
        self.assertEqual(contract.missing("pose", complete), [])
        self.assertTrue(contract.conforms("pose", complete))

    def test_unknown_surface_raises(self):
        with self.assertRaises(KeyError):
            contract.required_fields("not-a-surface")

    def test_describe_is_json_serializable_and_complete(self):
        described = contract.describe()
        json.dumps(described)
        self.assertEqual(described["contract_version"], contract.CONTRACT_VERSION)
        for surface in ("pose", "capture_status", "engine_status", "hello", "status_message"):
            self.assertIn(surface, described["surfaces"])
        self.assertEqual(described["landmarks"]["body"], contract.BODY_LANDMARK_COUNT)


# ---------------------------------------------------------------------------
# Part B — real emitted shapes (requires the native stack)
# ---------------------------------------------------------------------------

def _point(x, y, z=0.0, score=0.99):
    return {
        "x": float(x), "y": float(y), "z": float(z),
        "score": score, "visibility": score,
        "position": {"x": float(x), "y": float(y), "z": float(z)},
    }


def _golden_payload(width=640, height=480):
    body = [_point(width / 2, height / 2) for _ in range(33)]
    body[11] = _point(200, 200)   # left shoulder
    body[12] = _point(440, 200)   # right shoulder
    body[23] = _point(230, 380)   # left hip
    body[24] = _point(410, 380)   # right hip
    hands = [[_point(300 + i, 150 + i, score=0.9) for i in range(21)],
             [_point(340 + i, 150 + i, score=0.9) for i in range(21)]]
    face = {
        "landmarks": [_point(300 + i, 120 + i, score=1.0) for i in range(10)],
        "blendshapes": {"native": {"eyeBlinkLeft": 0.25, "jawOpen": 0.5}},
        "faceInViewConfidence": 1.0,
    }
    return {
        "keypoints": body,
        "face": face,
        "leftHand": hands[0],
        "rightHand": hands[1],
    }


@unittest.skipUnless(HEAVY, HEAVY_REASON)
class WireGoldenFrameTests(unittest.TestCase):
    def setUp(self):
        from xra_backends import engine
        self.engine = engine
        # Neutralise the arm hysteresis so the golden frame is deterministic.
        engine.ENGINE._arm_active_state = {15: False, 16: False}
        engine.ENGINE._arm_down_frames = {15: 0, 16: 0}

    def _wire(self, payload, width=640, height=480):
        return self.engine.to_wire(payload, capture_hint=(width, height))

    def test_golden_frame_shape(self):
        wire = self._wire(_golden_payload())

        self.assertEqual(len(wire["keypoints"]), contract.BODY_LANDMARK_COUNT)
        self.assertEqual(len(wire["keypoints3D"]), contract.BODY_LANDMARK_COUNT)
        self.assertEqual(wire["keypoints2d_space"], contract.KEYPOINTS_2D_SPACE)
        self.assertEqual(wire["keypoints3d_space"], contract.KEYPOINTS_3D_SPACE)
        self.assertFalse(wire["empty"])

        for group in ("keypoints", "keypoints3D"):
            for point in wire[group]:
                self.assertEqual(contract.missing("point", point), [], group)
                self.assertIsInstance(point["position"], dict)

        self.assertEqual(contract.missing("geometry", wire["geometry"]), [])
        self.assertIn(wire["geometry"]["reason"], contract.GEOMETRY_OK_REASONS)
        self.assertTrue(wire["geometry"]["valid"])

        self.assertEqual(contract.missing("face", wire["face"]), [])
        self.assertEqual(len(wire["face"]["landmarks"]), 10)
        self.assertEqual(wire["face"]["blendshapes"]["native"]["jawOpen"], 0.5)

        self.assertEqual(len(wire["leftHand"]), contract.HAND_LANDMARK_COUNT)
        self.assertEqual(len(wire["rightHand"]), contract.HAND_LANDMARK_COUNT)

    def test_golden_frame_envelope_conforms_to_pose_contract(self):
        wire = self._wire(_golden_payload())
        wire.update({
            "type": "pose",
            "frame_id": 1,
            "timestamp_ms": 0,
            "capture_width": 640,
            "capture_height": 480,
            "ms": 5.0,
            "provider": "Native/test",
        })
        contract.stamp_pose(wire, 1)
        self.assertEqual(contract.missing("pose", wire), [])
        self.assertEqual(wire["seq"], 1)

    def test_invalid_payload_is_explicitly_empty(self):
        # The class of bug behind "black pane" was the frontend inferring
        # emptiness from a side flag. The wire must state it outright.
        wire = self._wire({"keypoints": [_point(1, 1) for _ in range(10)]})
        self.assertTrue(wire["empty"])
        self.assertFalse(wire["geometry"]["valid"])
        self.assertTrue(wire["geometry"]["reason"].startswith("expected_33_got_"))
        self.assertEqual(wire["keypoints"], [])
        self.assertEqual(wire["keypoints3D"], [])


@unittest.skipUnless(HEAVY, HEAVY_REASON)
class StatusConformanceTests(unittest.TestCase):
    def test_capture_status_matches_contract(self):
        from xra_backends import capture
        self.assertEqual(contract.missing("capture_status", capture.CAPTURE.status()), [])

    def test_engine_status_matches_contract(self):
        from xra_backends import engine
        self.assertEqual(contract.missing("engine_status", engine.ENGINE.status()), [])


@unittest.skipUnless(HEAVY, HEAVY_REASON)
class BackendIdempotencyTests(unittest.TestCase):
    """The backend guarantee behind reconnect/duplicate-selection regressions:
    re-issuing the current selection must be a no-op, never a reload."""

    def _stub_dispatcher(self):
        from xra_backends import engine, registry
        dispatcher = engine.EngineDispatcher()
        dispatcher._active_native = SimpleNamespace(ready=True, name="stub")
        dispatcher._active_id = registry.MEDIAPIPE_TASKS_ID
        dispatcher._model_complexity = 1
        return dispatcher, registry

    def test_load_same_model_is_unchanged(self):
        dispatcher, registry = self._stub_dispatcher()
        result = dispatcher.load(registry.MEDIAPIPE_TASKS_ID, model_complexity=1)
        self.assertTrue(result.get("unchanged"))
        self.assertTrue(dispatcher._active_native is not None)

    def test_configure_same_mode_is_unchanged(self):
        dispatcher, _ = self._stub_dispatcher()
        result = dispatcher.configure_mode(dispatcher.status()["mode"])
        self.assertTrue(result.get("unchanged"))

    def test_configure_same_hardware_is_unchanged(self):
        dispatcher, _ = self._stub_dispatcher()
        result = dispatcher.configure_hardware(dispatcher.status()["hardware_mode"])
        self.assertTrue(result.get("unchanged"))


if __name__ == "__main__":
    unittest.main()
