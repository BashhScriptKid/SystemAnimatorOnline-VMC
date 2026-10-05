"""Tests for the camera auto-stop on consumer disconnect.

Skips when the native inference stack (mediapipe/cv2) is unavailable, since
``xra_backends.server`` imports it transitively.
"""

import os
import time
import unittest
from unittest import mock


def _server_module():
    try:
        from xra_backends import server  # noqa: F401
        return server
    except Exception:
        return None


server = _server_module()
HEAVY = server is not None
HEAVY_REASON = "native backend deps (mediapipe/cv2) are not installed"


@unittest.skipUnless(HEAVY, HEAVY_REASON)
class CameraAutostopTests(unittest.TestCase):
    def setUp(self):
        os.environ["XRA_CAMERA_AUTOSTOP_MS"] = "60"
        server.cancel_camera_autostop()

    def tearDown(self):
        server.cancel_camera_autostop()
        os.environ.pop("XRA_CAMERA_AUTOSTOP_MS", None)

    def test_stops_when_last_consumer_leaves(self):
        with mock.patch.object(server.capture.CAPTURE, "stop") as stop:
            server.schedule_camera_autostop()
            time.sleep(0.25)
        stop.assert_called_once()

    def test_reconnect_cancels_pending_stop(self):
        with mock.patch.object(server.capture.CAPTURE, "stop") as stop:
            server.schedule_camera_autostop()
            server.cancel_camera_autostop()
            time.sleep(0.25)
        stop.assert_not_called()

    def test_other_consumer_keeps_camera_alive(self):
        with mock.patch.object(server.capture.CAPTURE, "stop") as stop, mock.patch.object(
            type(server.capture.CAPTURE),
            "obs_preview_client_count",
            new_callable=mock.PropertyMock,
        ) as clients:
            clients.return_value = 1
            server.schedule_camera_autostop()
            time.sleep(0.25)
        stop.assert_not_called()

    def test_noop_when_disabled(self):
        os.environ["XRA_CAMERA_AUTOSTOP_MS"] = "0"
        with mock.patch.object(server.capture.CAPTURE, "stop") as stop:
            server.schedule_camera_autostop()
            time.sleep(0.15)
        stop.assert_not_called()


if __name__ == "__main__":
    unittest.main()
