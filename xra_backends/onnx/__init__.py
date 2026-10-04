"""Optional ONNX Runtime backend (MediaPipe-equivalent landmark contract).

Composes MediaPipe-architecture models converted to ONNX, running them through
ONNX Runtime (execution-provider selectable). Vendored/adapted third-party code:

- Face Mesh + BlazeFace: yakhyo (MIT) - mediapipe-face-mesh-onnx
- Palm + Hand Landmark: yakhyo (MIT) - mediapipe-hand-landmark-onnx
- Person detector + Pose: OpenCV Zoo (Apache-2.0), adapted from cv.dnn to ORT

Produces the same wholebody payload as ``native_mediapipe`` so the browser
adapter and rig are unchanged.
"""

from .engine import OnnxHolisticEngine

__all__ = ["OnnxHolisticEngine"]
