// Guards the P1b invariant in xra_custom/11_backend.js: camera state is a
// direct reflection of the authoritative server capture snapshot, and the
// client-authored values are clearly separated as "desired" intent. Run:
// `node tests/test_backend_state.js`.

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const src = fs.readFileSync(
  path.join(root, 'images', 'XR Animator', 'xra_custom', '11_backend.js'),
  'utf8',
);

// Intent state must be named for what it is.
assert.ok(!/\bcameraState\b/.test(src), 'cameraState must be renamed to desired (intent)');
assert.ok(/\bconst desired = \{/.test(src), 'expected a `desired` intent record');

// There must be an explicit reflection of the server snapshot.
assert.ok(/function captureActual\(\)/.test(src), 'expected the capture snapshot accessor');
assert.ok(/function actualCamera\(\)/.test(src), 'expected the authoritative reflection helper');
assert.ok(/\.\.\.actualCamera\(\)/.test(src), 'status() must reflect actualCamera() at top level');
assert.ok(/\bdesired,/.test(src), 'status() must expose intent under `desired`');

// The nested backend snapshot is part of the public shape consumers read
// (52_native_bridge.js / SA_bridge_backend.js use status().backend.capture).
assert.ok(/backend: backendSnapshot\(\)/.test(src), 'status() must keep the nested backend snapshot');

// No stale-retention: never keep a local value when the server reported one.
assert.ok(!/msg\.[a-zA-Z_]+ \|\| state\.[a-zA-Z_]+/.test(src), 'no `msg.x || state.x` retention');
assert.ok(!/msg\.[a-zA-Z_]+ \|\| desired\.[a-zA-Z_]+/.test(src), 'no `msg.x || desired.x` retention');

console.log('test_backend_state: ok');
