// Canonical native-backend identifiers and normalization.
//
// Single source of truth for the browser side, mirroring the backend registry
// (xra_backends/registry.py). Loaded both in the main window (by
// xra_custom/11_backend.js, via the bootstrap script list) and in the pose
// worker (by mocap_lib_module.js, before xra_backend_bridge.js). Do not fork
// these ids or the alias sets into call sites: ask this module instead.
((scope) => {
  // Browser-WASM-disabled marker: when this is selected the Python backend owns
  // the camera and the browser must not open one.
  var SENTINEL_MEDIAPIPE = 'mediapipe';

  // The bundled native MediaPipe Tasks holistic backend (registry.MEDIAPIPE_TASKS_ID).
  var DEFAULT_BACKEND = 'mediapipe-tasks-landmarker';

  // Optional ONNX Runtime backend (registry.ONNX_HOLISTIC_ID).
  var ONNX_BACKEND = 'onnx-mediapipe-holistic';

  // Values that mean "use the browser's own wasm MediaPipe" -> sentinel.
  var LEGACY_BROWSER = ['mediapipe', 'mediapipe-wasm', 'mediapipe_wasm', 'browser', 'wasm', 'mp'];

  // Legacy profile aliases that meant "some native backend" before explicit
  // ids existed. They resolve to the default backend.
  var LEGACY_NATIVE = ['onnx', 'external', 'native', 'dwpose'];

  function _set(list) {
    var out = {};
    var i;
    for (i = 0; i < list.length; i++) out[list[i]] = true;
    return out;
  }

  var BROWSER = _set(LEGACY_BROWSER);
  var NATIVE = _set(LEGACY_NATIVE);

  // Resolve any profile/runtime value to a canonical backend id.
  // Empty/unknown browser aliases -> sentinel; legacy native aliases -> default;
  // anything else is passed through unchanged.
  function normalize(value) {
    var id = String(value == null ? '' : value).trim().toLowerCase();
    if (!id || BROWSER[id]) return SENTINEL_MEDIAPIPE;
    if (NATIVE[id]) return DEFAULT_BACKEND;
    return id;
  }

  // True when the value selects a native backend (Python owns the camera),
  // i.e. it does NOT resolve to the sentinel.
  function isExternal(value) {
    return normalize(value) !== SENTINEL_MEDIAPIPE;
  }

  var api = {
    SENTINEL_MEDIAPIPE: SENTINEL_MEDIAPIPE,
    DEFAULT_BACKEND: DEFAULT_BACKEND,
    ONNX_BACKEND: ONNX_BACKEND,
    LEGACY_BROWSER: LEGACY_BROWSER.slice(),
    LEGACY_NATIVE: LEGACY_NATIVE.slice(),
    normalize: normalize,
    isExternal: isExternal,
  };

  scope.XRA_BACKEND_IDS = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof self !== 'undefined' ? self : this);
