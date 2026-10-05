// Runtime boundary test for xra_custom/11_backend.js.
//
// Loads the controller + camera-control IIFEs in a VM with mocked globals, then
// asserts the camera API (a) doesn't throw and (b) reflects the authoritative
// capture_status snapshot. This catches cross-IIFE scope errors and state
// shadowing that `node --check` / linters cannot. Run:
//   node tests/test_backend_reflection.js

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const srcPath = process.env.XRA_BACKEND_FILE
  ? path.resolve(process.env.XRA_BACKEND_FILE)
  : path.join(root, 'images', 'XR Animator', 'xra_custom', '11_backend.js');
const src = fs.readFileSync(srcPath, 'utf8');
const backendIds = require(path.join(root, 'js', 'xra_backend_ids.js'));

class MockWebSocket {
  constructor(url) {
    this.url = url;
    this.readyState = 0; // CONNECTING
    this.sent = [];
    MockWebSocket.last = this;
  }
  static OPEN = 1;
  static CONNECTING = 0;
  static CLOSED = 3;
  send(data) { this.sent.push(data); }
  close() { this.readyState = MockWebSocket.CLOSED; }
  emit(message) { if (this.onmessage) this.onmessage({ data: JSON.stringify(message) }); }
  open() { this.readyState = MockWebSocket.OPEN; if (this.onopen) this.onopen(); }
}

class MockBroadcastChannel {
  constructor(name) { this.name = name; }
  postMessage() {}
  addEventListener() {}
  close() {}
}

const sandbox = {};
sandbox.window = sandbox;
sandbox.self = sandbox;
sandbox.console = console;
sandbox.setTimeout = () => 0;
sandbox.clearTimeout = () => {};
sandbox.setInterval = () => 0;
sandbox.clearInterval = () => {};
sandbox.performance = { now: () => 0 };
sandbox.WebSocket = MockWebSocket;
sandbox.BroadcastChannel = MockBroadcastChannel;
sandbox.location = { protocol: 'http:', host: '127.0.0.1:8000' };
sandbox.fetch = () => new Promise(() => {}); // keep the HTTP fallback pending
sandbox.navigator = {};
sandbox.document = { querySelectorAll: () => [], createElement: () => ({ getContext: () => null }) };
sandbox.XRA_BACKEND_IDS = backendIds;
sandbox.XRA = {
  config: {
    performance: { tracker_backend: backendIds.DEFAULT_BACKEND, tracking_pipeline: 'FULL_BODY' },
    camera: {}, devices: {},
  },
  profile: { custom: { performance: { tracker_backend: backendIds.DEFAULT_BACKEND } } },
  events: { emit() {}, on() {} },
  profileService: { save() {} },
  recorder: { status: () => ({ active: false }) },
};

vm.createContext(sandbox);
vm.runInContext(src, sandbox, { filename: '11_backend.js' });

// Controller + camera API must both install (a scope crash would leave the
// second IIFE's api unset).
assert.ok(sandbox.XRA.xraBackend, 'controller installed');
assert.ok(sandbox.XRA_BACKEND_CAMERA, 'camera api installed');

const statusBefore = sandbox.XRA_BACKEND_CAMERA.status();
assert.equal(typeof statusBefore, 'object', 'status() returns an object');
assert.equal(statusBefore.known, false, 'no snapshot yet -> known:false');
assert.ok(statusBefore.desired, 'intent is namespaced under desired');
assert.ok(statusBefore.backend, 'nested backend snapshot preserved');

// Drive an authoritative capture_status through the control socket, then assert
// the camera API reflects it (not the client's desired values).
const socket = MockWebSocket.last;
assert.ok(socket, 'control socket opened for the native backend');
socket.open();
socket.emit({
  type: 'capture_status',
  ok: true,
  ready: true,
  capture: {
    running: true, paused: false, available: true, camera_open: true,
    device: '/dev/video0', mocap_mode: 'face', geometry: [640, 480],
    measured_fps: 30, subscribers: 1, last_error: '',
  },
});

const st = sandbox.XRA_BACKEND_CAMERA.status();
assert.equal(st.known, true, 'snapshot now known');
assert.equal(st.running, true, 'running reflects server truth');
assert.equal(st.camera_open, true, 'camera_open reflects server truth');
assert.equal(st.device, '/dev/video0', 'device reflects server truth');
assert.equal(st.mocap_mode, 'face', 'mocap_mode reflects server truth');
assert.equal(JSON.stringify(st.geometry), '[640,480]', 'geometry reflects server truth');
assert.equal(st.backend.capture.running, true, 'nested backend.capture preserved');
// desired stays separate and unchanged by the server snapshot
assert.equal(st.desired.mocapMode, 'holistic', 'desired intent is not overwritten by truth');

console.log('test_backend_reflection: ok');
