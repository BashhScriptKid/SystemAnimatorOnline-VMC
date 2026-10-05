// Verifies js/xra_backend_ids.js is the single source of backend-id
// normalization, that it stays in sync with xra_backends/registry.py, and that
// both the main window and the pose worker load it before the code that needs
// it. Run: `node tests/test_backend_ids.js`.

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = (...parts) => fs.readFileSync(path.join(root, ...parts), 'utf8');

const sandbox = {};
sandbox.self = sandbox;
vm.createContext(sandbox);
vm.runInContext(read('js', 'xra_backend_ids.js'), sandbox, {
  filename: 'js/xra_backend_ids.js',
});

const ids = sandbox.XRA_BACKEND_IDS;
assert.ok(ids, 'xra_backend_ids.js must define XRA_BACKEND_IDS');

// --- module contract -------------------------------------------------------
assert.equal(ids.SENTINEL_MEDIAPIPE, 'mediapipe');
assert.equal(ids.DEFAULT_BACKEND, 'mediapipe-tasks-landmarker');
assert.equal(ids.ONNX_BACKEND, 'onnx-mediapipe-holistic');

const BROWSER_VALUES = [
  undefined, null, '', '   ', 'mediapipe', 'MEDIAPIPE', 'mediapipe-wasm',
  'mediapipe_wasm', 'browser', 'wasm', 'mp', ' Browser ',
];
for (const value of BROWSER_VALUES) {
  assert.equal(ids.normalize(value), ids.SENTINEL_MEDIAPIPE, `normalize(${JSON.stringify(value)})`);
  assert.equal(ids.isExternal(value), false, `isExternal(${JSON.stringify(value)})`);
}

const NATIVE_ALIASES = ['onnx', 'external', 'native', 'dwpose'];
for (const value of NATIVE_ALIASES) {
  assert.equal(ids.normalize(value), ids.DEFAULT_BACKEND, `normalize(${value})`);
  assert.equal(ids.isExternal(value), true, `isExternal(${value})`);
}

assert.equal(ids.normalize('onnx-mediapipe-holistic'), ids.ONNX_BACKEND);
assert.equal(ids.normalize('mediapipe-tasks-landmarker'), ids.DEFAULT_BACKEND);
assert.equal(ids.normalize('some-future-backend'), 'some-future-backend');
assert.equal(ids.normalize('Some-Future-Backend'), 'some-future-backend');
assert.equal(ids.isExternal('some-future-backend'), true);

// --- drift guard: must match xra_backends/registry.py ----------------------
const registry = read('xra_backends', 'registry.py');
assert.match(registry, /MEDIAPIPE_TASKS_ID\s*=\s*"mediapipe-tasks-landmarker"/);
assert.match(registry, /ONNX_HOLISTIC_ID\s*=\s*"onnx-mediapipe-holistic"/);

// --- load-order wiring -----------------------------------------------------
const mocap = read('js', 'mocap_lib_module.js');
const idsImport = mocap.indexOf("importScripts('./xra_backend_ids.js')");
const bridgeImport = mocap.indexOf("importScripts('./xra_backend_bridge.js')");
assert.ok(idsImport !== -1, 'mocap worker must import xra_backend_ids.js');
assert.ok(bridgeImport !== -1, 'mocap worker must import xra_backend_bridge.js');
assert.ok(idsImport < bridgeImport, 'xra_backend_ids.js must load before the pose bridge');

const bootstrap = read('images', 'XR Animator', 'animate_customized.js');
assert.ok(
  bootstrap.indexOf('js/xra_backend_ids.js') !== -1,
  'main window bootstrap must include js/xra_backend_ids.js',
);

// --- no forked normalization left behind -----------------------------------
const bridge = read('js', 'xra_backend_bridge.js');
assert.ok(!/normalizeModel/.test(bridge), 'worker bridge must not define its own normalizer');
assert.ok(/IDS\.normalize/.test(bridge), 'worker bridge must use the shared normalizer');

const controller = read('images', 'XR Animator', 'xra_custom', '11_backend.js');
assert.ok(
  !/'mediapipe-wasm', 'mediapipe_wasm'/.test(controller),
  'controller must not carry its own browser-alias list',
);
assert.ok(/BACKEND_IDS\.isExternal/.test(controller), 'controller must use the shared isExternal');

// Other xra_custom modules must resolve ids/defaults through the shared module
// rather than hardcoding the sentinel or default backend id.
const core = read('images', 'XR Animator', 'xra_custom', '00_core.js');
assert.ok(/XRA_BACKEND_IDS/.test(core), '00_core.js must reference XRA_BACKEND_IDS');
assert.ok(!/tracker_backend:\s*'mediapipe-tasks-landmarker'/.test(core), '00_core.js default must come from the module');

const panel = read('images', 'XR Animator', 'xra_custom', '50_right_panel.js');
assert.ok(/XRA_BACKEND_IDS/.test(panel), '50_right_panel.js must reference XRA_BACKEND_IDS');
assert.ok(!/snapshot\.selected === 'mediapipe'/.test(panel), '50_right_panel.js sentinel must come from the module');

console.log('test_backend_ids: ok');
