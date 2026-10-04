"""ONNX Runtime holistic engine - MediaPipe-equivalent wholebody payload.

Pipeline (all ONNX Runtime, EP-selectable):
    person detect -> pose landmark (33 body kps)
    face detect   -> face mesh      (468 landmarks -> derived blendshapes)
    palm detect   -> hand landmark  (21 + 21)

Emits the same dict shape as ``native_mediapipe`` (``keypoints`` /
``keypoints3D`` / ``face`` / ``leftHand`` / ``rightHand``), so the browser
adapter and the rig pipeline are unchanged.
"""

from __future__ import annotations

import os
import threading
import time
from pathlib import Path
from typing import Optional

import numpy as np

# Vendored / adapted third-party stages (see onnx/__init__.py for credits).
from .blazeface import BlazeFace
from .face_mesh import FaceMesh
from .hands import HandLandmark, PalmDetection
from .person_det import MPPersonDet
from .pose import MPPose
from .hand_tracker import HandTracker

_MODEL_FILES = {
    "person": "person_detection_mediapipe_2023mar.onnx",
    "pose": "pose_estimation_mediapipe_2023mar.onnx",
    "blazeface": "face_detection_short_range.onnx",
    "facemesh": "face_mesh_Nx3x192x192.onnx",
    "palm": "palm_detection_full_Nx3x192x192.onnx",
    "hand": "hand_landmark_full_Nx3x224x224.onnx",
}

_BLAZEPOSE_NAMES = [
    "nose", "left_eye_inner", "left_eye", "left_eye_outer", "right_eye_inner",
    "right_eye", "right_eye_outer", "left_ear", "right_ear", "mouth_left",
    "mouth_right", "left_shoulder", "right_shoulder", "left_elbow", "right_elbow",
    "left_wrist", "right_wrist", "left_pinky", "right_pinky", "left_index",
    "right_index", "left_thumb", "right_thumb", "left_hip", "right_hip",
    "left_knee", "right_knee", "left_ankle", "right_ankle", "left_heel",
    "right_heel", "left_foot_index", "right_foot_index",
]

# Face-mesh rings for the landmark-derived blendshape fallback.
_L_EYE = (33, 160, 158, 133, 153, 144)
_R_EYE = (362, 385, 387, 263, 373, 380)
_MOUTH_L = (61, 291)
_MOUTH_TOP, _MOUTH_BOT = 13, 14


def _camel(name: str) -> str:
    head, *rest = name.split("_")
    return head + "".join(p[:1].upper() + p[1:] for p in rest) if rest else head


def _ear(pts, ring) -> float:
    try:
        p = [pts[i] for i in ring]
        v1 = np.hypot(p[1][0] - p[5][0], p[1][1] - p[5][1])
        v2 = np.hypot(p[2][0] - p[4][0], p[2][1] - p[4][1])
        h = np.hypot(p[0][0] - p[3][0], p[0][1] - p[3][1])
        if h <= 1e-6:
            return 0.0
        return float((v1 + v2) / (2.0 * h))
    except Exception:
        return 0.0


def _blendshapes_from_face(pts) -> dict:
    """Small vendor-neutral blendshape set derived from 468 face-mesh points."""
    if not pts or len(pts) < 300:
        return {"eyeBlinkLeft": 0.0, "eyeBlinkRight": 0.0,
                "jawOpen": 0.0, "mouthSmile": 0.0, "mouthFrown": 0.0}
    ear_l, ear_r = _ear(pts, _L_EYE), _ear(pts, _R_EYE)
    blink_l = float(np.clip(1.0 - (ear_l / 0.30), 0.0, 1.0)) ** 0.7
    blink_r = float(np.clip(1.0 - (ear_r / 0.30), 0.0, 1.0)) ** 0.7
    try:
        upper = np.array(pts[_MOUTH_TOP]); lower = np.array(pts[_MOUTH_BOT])
        mouth_h = float(np.hypot(*(upper - lower)))
        corner_w = float(np.hypot(*(np.array(pts[_MOUTH_L[0]]) - np.array(pts[_MOUTH_L[1]]))))
        jaw = float(np.clip(mouth_h / (corner_w + 1e-6) * 2.5, 0.0, 1.0))
        mid_y = (upper[1] + lower[1]) * 0.5
        corner_y = (pts[_MOUTH_L[0]][1] + pts[_MOUTH_L[1]][1]) * 0.5
        lift = (mid_y - corner_y) / (corner_w + 1e-6)
        smile = float(np.clip(lift * 2.0, 0.0, 1.0))
        frown = float(np.clip(-lift * 2.0, 0.0, 1.0))
    except Exception:
        jaw = smile = frown = 0.0
    return {"eyeBlinkLeft": blink_l, "eyeBlinkRight": blink_r,
            "jawOpen": jaw, "mouthSmile": smile, "mouthFrown": frown}


class OnnxHolisticEngine:
    """Composes the ONNX stages into one wholebody payload."""

    name = "onnx-holistic"

    def __init__(self, model_dir: Optional[str] = None, providers=None) -> None:
        self._lock = threading.Lock()
        self._model_dir = Path(model_dir or os.environ.get(
            "XRA_ONNX_MODEL_DIR",
            str(Path(__file__).resolve().parent.parent / "models" / "onnx-mediapipe-holistic"),
        ))
        self._providers = providers
        self._person = self._pose = self._blazeface = self._facemesh = None
        self._palm = self._hand = None
        self._tracker = None
        self._tracker_wh = None
        self.ready = False
        self.last_error = ""
        self.task_timings_ms: dict = {}

    # -- lifecycle -----------------------------------------------------------
    def _session_providers(self):
        if self._providers is not None:
            return self._providers
        import onnxruntime as ort
        available = ort.get_available_providers()
        preferred = [
            "TensorrtExecutionProvider", "CUDAExecutionProvider",
            "OpenVINOExecutionProvider", "DmlExecutionProvider",
            "CoreMLExecutionProvider", "CPUExecutionProvider",
        ]
        chosen = [p for p in preferred if p in available]
        return chosen or ["CPUExecutionProvider"]

    def load(self, accelerated: bool = False, **_ignored) -> dict:
        try:
            d = self._model_dir
            prov = self._session_providers()
            self._person = MPPersonDet(str(d / _MODEL_FILES["person"]))
            self._pose = MPPose(str(d / _MODEL_FILES["pose"]))
            self._blazeface = BlazeFace(str(d / _MODEL_FILES["blazeface"]), prov)
            self._facemesh = FaceMesh(str(d / _MODEL_FILES["facemesh"]), prov)
            self._palm = PalmDetection(str(d / _MODEL_FILES["palm"]), prov)
            self._hand = HandLandmark(str(d / _MODEL_FILES["hand"]), prov)
            self.ready = True
            self.last_error = ""
            return {"ok": True, "engine": self.name, "providers": prov}
        except Exception as exc:  # pragma: no cover - environment-dependent
            self.ready = False
            self.last_error = str(exc)
            return {"ok": False, "error": f"ONNX engine load failed: {exc}"}

    def unload(self) -> None:
        self._person = self._pose = self._blazeface = self._facemesh = None
        self._palm = self._hand = None
        self.ready = False

    # no-ops so the dispatcher can treat engines uniformly
    def configure_confidence(self, **kwargs) -> None:
        self._conf = kwargs

    def configure_mode(self, mode) -> None:
        pass

    def configure_rates(self, **kwargs) -> None:
        pass

    # -- inference -----------------------------------------------------------
    def _pose_kp(self, frame_bgr, h, w):
        kp = [{"position": {"x": 0.0, "y": 0.0, "z": 0.0}, "score": 0.0, "part": ""}
              for _ in range(33)]
        world = []
        wrists = {}
        for i, name in enumerate(_BLAZEPOSE_NAMES):
            kp[i]["part"] = _camel(name)
        try:
            persons = self._person.infer(frame_bgr)
            if len(persons) == 0:
                return kp, world, wrists
            res = self._pose.infer(frame_bgr, persons[0])
            if not res:
                return kp, world, wrists
            _bbox, lms, lms_world, _mask, _heat, _conf = res
            for i in range(33):
                x, y, z, vis, pres = (float(v) for v in lms[i][:5])
                kp[i]["position"] = {"x": round(x, 2), "y": round(y, 2), "z": round(z, 2)}
                kp[i]["score"] = round(vis, 3)
            world = [{"x": round(float(p[0]), 4), "y": round(float(p[1]), 4),
                      "z": round(float(p[2]), 4), "name": _BLAZEPOSE_NAMES[i]}
                     for i, p in enumerate(lms_world[:33])]
            # BlazePose wrists (15/16) seed the hand ROI when detection misses.
            for idx, side in ((15, "left"), (16, "right")):
                if float(lms[idx][3]) > 0.1:
                    wrists[side] = (float(lms[idx][0]), float(lms[idx][1]))
        except Exception:
            pass
        return kp, world, wrists

    def _face(self, frame_bgr):
        try:
            bboxes, keypoints, _scores = self._blazeface.detect(frame_bgr, 0.5)
            if len(bboxes) == 0:
                return [], _blendshapes_from_face([])
            landmarks, _fs = self._facemesh.predict(frame_bgr, bboxes[:1], keypoints=keypoints[:1])
            if len(landmarks) == 0:
                return [], _blendshapes_from_face([])
            pts = [(float(p[0]), float(p[1]), float(p[2])) for p in landmarks[0]]
            return pts, _blendshapes_from_face([(p[0], p[1]) for p in pts])
        except Exception:
            return [], _blendshapes_from_face([])

    def _hands(self, frame_bgr, pose_wrists, h, w):
        left, right, lw, rw = [], [], [], []
        try:
            if self._tracker is None or self._tracker_wh != (w, h):
                self._tracker = HandTracker(self._palm, self._hand, (w, h))
                self._tracker_wh = (w, h)
            lres, rres = self._tracker.process(frame_bgr, pose_wrists)
            if lres:
                left = lres.get("points") or []
                lw = lres.get("world") or []
            if rres:
                right = rres.get("points") or []
                rw = rres.get("world") or []
        except Exception:
            pass
        return left, right, lw, rw

    def infer(self, frame_bgr: np.ndarray) -> Optional[dict]:
        if not self.ready:
            return None
        t0 = time.perf_counter()
        with self._lock:
            h, w = frame_bgr.shape[:2]
            kp, world, wrists = self._pose_kp(frame_bgr, h, w)
            face_pts, blendshapes = self._face(frame_bgr)
            left, right, lw, rw = self._hands(frame_bgr, wrists, h, w)

        out = {
            "score": 1.0,
            "keypoints": kp,
            "keypoints3D": [
                {"x": p["position"]["x"], "y": p["position"]["y"], "z": p["position"]["z"],
                 "score": p["score"], "name": _BLAZEPOSE_NAMES[i]}
                for i, p in enumerate(kp)
            ],
            "face": {
                "landmarks": [{"x": round(x, 2), "y": round(y, 2), "z": round(z, 2), "score": 1.0}
                              for x, y, z in face_pts],
                "blendshapes": blendshapes,
                "faceInViewConfidence": 0.95 if face_pts else 0.0,
                "layout": "mediapipe_face_mesh",
            },
            "leftHand": left,
            "rightHand": right,
            "leftHandWorld": lw,
            "rightHandWorld": rw,
        }
        if world:
            out["keypoints3D"] = world
            out["keypoints3d_space"] = "body_relative"
        self.task_timings_ms = {"total": round((time.perf_counter() - t0) * 1000.0, 2)}
        return out
