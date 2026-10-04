#!/usr/bin/env node
//
// Repeatable verification that SA_bridge.backend forwards correctly to the
// runtime's native backend objects, covering both the worker/data plane
// (XRA_NATIVE: getters + consumeLatestPose) and the control plane
// (XRA_BACKEND_CAMERA: status/configure/stop).
//
//   node tools/verify-boundary.cjs
//
// Exits non-zero on failure.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const REPO = path.resolve(__dirname, '..');
let failures = 0;
const calls = [];

function check(name, cond, extra) {
  if (cond) console.log('  ok   ' + name);
  else { failures++; console.log('FAIL   ' + name + (extra !== undefined ? '   -> ' + JSON.stringify(extra) : '')); }
}
function eq(a, b) { return JSON.stringify(a) === JSON.stringify(b); }
function has(needle) { return JSON.stringify(calls).includes(needle); }

const mockPose = {
  active: true, latest: { sequence: 9 }, face: [{ x: 0.1 }],
  leftHand: [[1, 2, 3]], rightHand: [], leftHandWorld: [[1, 2, 3]], rightHandWorld: [],
  status: { sequence: 5, consumed: 3, ready: true },
  consumeLatestPose: (w, h) => { calls.push(['consume', w, h]); return { ok: 'pose' }; },
  maybeReplaceFrame: () => { calls.push(['replace']); return false; },
  setPoseListener: (fn) => { calls.push(['listen', typeof fn]); return () => {}; },
  frontendReady: (w, h) => calls.push(['ready', w, h]),
  waitUntilConfigured: () => Promise.resolve('m'),
};
const mockCam = {
  status: () => ({ mocapMode: 'holistic', backend: { capture: { running: true } } }),
  configure: (opts) => { calls.push(['configure', opts]); return Promise.resolve(true); },
  stop: () => { calls.push(['stop']); return Promise.resolve(true); },
};

globalThis.XRA_NATIVE = mockPose;              // worker/data plane
delete globalThis.XRA_BACKEND_CAMERA;          // control plane absent for now

vm.runInThisContext(fs.readFileSync(path.join(REPO, 'js/SA_bridge.js'), 'utf8'), { filename: 'SA_bridge.js' });
vm.runInThisContext(fs.readFileSync(path.join(REPO, 'js/SA_bridge_backend.js'), 'utf8'), { filename: 'SA_bridge_backend.js' });

const SA_bridge = globalThis.SA_bridge;
const b = SA_bridge.backend;

(async () => {
  console.log('SA_bridge.backend boundary verification\n');

  console.log('[data plane: XRA_NATIVE]');
  check('adapter installed', SA_bridge.installed === true);
  check('backend fully implemented', (SA_bridge.missing().backend || undefined) === undefined, SA_bridge.missing().backend);
  check('available()', b.available() === true);
  check('active getter', b.active === true);
  check('leftHand getter', eq(b.leftHand, mockPose.leftHand), b.leftHand);
  check('face getter', eq(b.face, mockPose.face));
  check('latest getter', eq(b.latest, mockPose.latest));
  check('status() (pose)', eq(b.status(), mockPose.status), b.status());
  check('consumeLatestPose forwards', eq(b.consumeLatestPose(4, 3), { ok: 'pose' }));
  b.setPoseListener(function () {});
  b.frontendReady(5, 6);
  check('setPoseListener forwarded', has('["listen","function"]'));
  check('frontendReady forwarded', has('["ready",5,6]'));

  console.log('\n[control plane: XRA_BACKEND_CAMERA]');
  globalThis.XRA_BACKEND_CAMERA = mockCam;
  check('status() (camera)', eq(b.status(), mockCam.status()));
  check('configure forwards', (await b.configure({ fps: 30 })) === true);
  check('stop forwards', (await b.stop()) === true);
  check('configure call recorded', has('["configure",{"fps":30}]'));

  console.log('\n' + (failures ? 'FAILED: ' + failures : 'ALL PASS'));
  process.exit(failures ? 1 : 0);
})();
