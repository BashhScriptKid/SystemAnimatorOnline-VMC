"""Canonical browser <-> native backend data contract.

Single source of truth for the shape of every payload crossing the
WebSocket/HTTP boundary. The browser is expected to treat these payloads as
data: it must not re-derive, re-clamp, re-order, or re-classify fields that are
defined here. When the frontend needs a value, the backend owns it and this
module names it.

Surfaces
--------
pose            ``CaptureSource``/``InferenceWorker`` pose frames, built by
                :func:`xra_backends.engine.to_wire` and stamped here.
capture_status  :meth:`xra_backends.capture.CaptureSource.status`.
engine_status   :meth:`xra_backends.engine.EngineDispatcher.status`.
status_message  the ``type: status`` / ``capture_status`` WS replies and the
                ``/__xra_backend/status`` HTTP payload (superset of engine +
                capture + transport).
hello           the ``type: hello`` WS handshake reply.

Versioning
----------
``CONTRACT_VERSION`` is an integer that the backend stamps onto every emitted
message (pose via :func:`stamp_pose`, status/hello via :func:`stamp`). Bump it
on any breaking change (removing/renaming a field, or changing a field's
meaning/units). Additive fields do not require a bump but should be added to the
relevant tuple below.

The tuples list the fields a consumer may rely on. Extra fields are allowed
(forward compatibility); missing fields are a contract violation and are
reported by :func:`missing`.
"""

from __future__ import annotations

from typing import Mapping, Optional

CONTRACT_VERSION = 1

# ---------------------------------------------------------------------------
# Landmark layout (mirrors BlazePose-33, as consumed by the XR Animator rig)
# ---------------------------------------------------------------------------

BODY_LANDMARK_COUNT = 33
HAND_LANDMARK_COUNT = 21
FACE_LANDMARK_COUNT = 468

BODY_LANDMARK_NAMES = (
    "nose", "left_eye_inner", "left_eye", "left_eye_outer",
    "right_eye_inner", "right_eye", "right_eye_outer", "left_ear", "right_ear",
    "mouth_left", "mouth_right", "left_shoulder", "right_shoulder",
    "left_elbow", "right_elbow", "left_wrist", "right_wrist", "left_pinky",
    "right_pinky", "left_index", "right_index", "left_thumb", "right_thumb",
    "left_hip", "right_hip", "left_knee", "right_knee", "left_ankle",
    "right_ankle", "left_heel", "right_heel", "left_foot_index",
    "right_foot_index",
)

# ---------------------------------------------------------------------------
# Stringly-typed fields -> enums (declared once so neither side invents values)
# ---------------------------------------------------------------------------

WS_ROLES = frozenset({"control", "pose", "viewer", "legacy"})
MOCAP_MODES = frozenset({"holistic", "face"})

POSE_MESSAGE_TYPE = "pose"

# Geometry reasons that mark a frame as usable. Every other value means the
# frame is empty/suppressed. Consumers should branch on membership in
# GEOMETRY_OK_REASONS, never on the literal strings.
GEOMETRY_OK_REASONS = frozenset({"ok", "upper_body_only", "face_only"})

# All reasons the wire builder can emit ("expected_33_got_<n>" is dynamic).
GEOMETRY_REASONS = GEOMETRY_OK_REASONS | frozenset({
    "face_only", "no_human_subject", "low_shoulder_confidence",
    "shoulder_span", "torso_span", "no_detection",
})

# Keypoint coordinate spaces (the two fields that tell the rig how to read
# ``keypoints``/``keypoints3D``).
KEYPOINTS_2D_SPACE = "normalized"
KEYPOINTS_3D_SPACE = "body_relative"

# ---------------------------------------------------------------------------
# Per-surface required fields
# ---------------------------------------------------------------------------

# A single landmark entry, in either 2D or 3D form.
POINT_FIELDS = ("x", "y", "z", "score", "visibility", "position")

# ``wire["geometry"]``.
GEOMETRY_FIELDS = (
    "valid", "reason", "input_3d_space", "converted_from_camera",
    "core_score_min", "core_score_median", "core_valid_count",
    "shoulder_span", "hip_span", "torso_span", "max_abs_3d",
)

# ``wire["face"]``.
FACE_FIELDS = ("landmarks", "blendshapes", "faceInViewConfidence")

# A pose frame, as emitted on the WS pose stream.
POSE_FIELDS = (
    "type", "contract_version", "seq",
    "frame_id", "timestamp_ms", "capture_width", "capture_height",
    "ms", "provider", "empty", "reason",
    "keypoints", "keypoints3D", "keypoints2d_space", "keypoints3d_space",
    "geometry", "face",
    "leftHand", "rightHand", "leftHandWorld", "rightHandWorld",
)

# ``CaptureSource.status()`` — fields the UI/camera client may depend on.
CAPTURE_STATUS_FIELDS = (
    "running", "paused", "available", "camera_open", "camera_busy",
    "publishing", "device", "selfie_mode", "mocap_mode", "backend",
    "geometry", "infer_geometry", "effective_fps", "measured_fps",
    "target_fps", "subscribers", "frames", "last_infer_ms", "last_error",
)

# ``EngineDispatcher.status()``.
ENGINE_STATUS_FIELDS = (
    "ready", "model", "provider", "provider_human", "model_complexity",
    "mode", "loading", "requested_model", "generation", "last_error",
    "accelerated", "gpu_available", "hardware_mode",
)

# ``type: hello`` handshake reply.
HELLO_FIELDS = ("type", "ok", "connection_id", "role", "subscribed", "contract_version")

# ``type: status`` / ``type: capture_status`` replies and HTTP status payload.
STATUS_MESSAGE_FIELDS = (
    "type", "contract_version",
    "ready", "model", "mode", "requested_model", "last_error",
    "capture", "transport", "frames", "errors",
)

SURFACES = {
    "point": POINT_FIELDS,
    "geometry": GEOMETRY_FIELDS,
    "face": FACE_FIELDS,
    "pose": POSE_FIELDS,
    "capture_status": CAPTURE_STATUS_FIELDS,
    "engine_status": ENGINE_STATUS_FIELDS,
    "hello": HELLO_FIELDS,
    "status_message": STATUS_MESSAGE_FIELDS,
}

# Surfaces that carry a monotonic ``seq`` (one per emitted frame).
SEQUENCED_SURFACES = frozenset({"pose"})


# ---------------------------------------------------------------------------
# Stamping + validation helpers
# ---------------------------------------------------------------------------

def stamp(message: dict, seq: Optional[int] = None, version: Optional[int] = None) -> dict:
    """Add ``contract_version`` (and optional ``seq``) to an outbound message.

    Mutates and returns ``message`` so call sites can stay one-liners. Safe to
    call on an already-stamped dict (the later call wins).
    """
    if not isinstance(message, dict):
        return message
    message["contract_version"] = CONTRACT_VERSION if version is None else int(version)
    if seq is not None:
        message["seq"] = int(seq)
    return message


def stamp_pose(message: dict, seq: int) -> dict:
    """Stamp a pose frame with its contract version and monotonic sequence."""
    return stamp(message, seq=seq)


def required_fields(surface: str) -> tuple:
    try:
        return SURFACES[surface]
    except KeyError:
        raise KeyError(f"unknown contract surface: {surface!r}") from None


def missing(surface: str, message: Mapping) -> list:
    """Return the required fields absent from ``message`` (empty == conformant)."""
    if not isinstance(message, Mapping):
        return list(required_fields(surface))
    return [field for field in required_fields(surface) if field not in message]


def conforms(surface: str, message: Mapping) -> bool:
    return not missing(surface, message)


def describe() -> dict:
    """JSON-able description of the contract (for docs, tests, codegen)."""
    return {
        "contract_version": CONTRACT_VERSION,
        "landmarks": {
            "body": BODY_LANDMARK_COUNT,
            "hand": HAND_LANDMARK_COUNT,
            "face": FACE_LANDMARK_COUNT,
        },
        "enums": {
            "ws_roles": sorted(WS_ROLES),
            "mocap_modes": sorted(MOCAP_MODES),
            "geometry_ok_reasons": sorted(GEOMETRY_OK_REASONS),
            "geometry_reasons": sorted(GEOMETRY_REASONS),
            "keypoints_2d_space": KEYPOINTS_2D_SPACE,
            "keypoints_3d_space": KEYPOINTS_3D_SPACE,
        },
        "surfaces": {name: list(fields) for name, fields in SURFACES.items()},
    }


def _self_check() -> None:
    if len(BODY_LANDMARK_NAMES) != BODY_LANDMARK_COUNT:
        raise ValueError("BODY_LANDMARK_NAMES must have BODY_LANDMARK_COUNT entries")
    for name in ("pose", "capture_status", "engine_status", "hello", "status_message"):
        if name not in SURFACES:
            raise ValueError(f"missing surface: {name}")


_self_check()
