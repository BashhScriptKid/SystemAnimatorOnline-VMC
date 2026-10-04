'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const i18nPath = path.join(root, 'images/XR Animator/xra_custom/05_i18n.js');
const uiCorePath = path.join(root, 'images/XR Animator/xra_custom/45_ui_core.js');
const helpPath = path.join(root, 'images/XR Animator/xra_custom/46_help.js');
const rightPanelPath = path.join(root, 'images/XR Animator/xra_custom/50_right_panel.js');

const config = { ui: { language: 'en' } };
global.window = {
  XRA: {
    config,
    events: { emit() {}, on() {} },
    profileService: { save() {} }
  }
};
Object.defineProperty(global, 'navigator', { value: { language: 'en-US' }, configurable: true });
global.Element = class Element {};
global.MutationObserver = class MutationObserver {
  constructor() {}
  observe() {}
};
global.requestAnimationFrame = () => 1;
global.document = {
  readyState: 'loading',
  documentElement: {},
  addEventListener() {},
  querySelectorAll() { return []; }
};

vm.runInThisContext(fs.readFileSync(i18nPath, 'utf8'), { filename: i18nPath });

const { i18n } = window.XRA;
const languages = i18n.LANGUAGES.map(([code]) => code).filter(code => code !== 'auto');
const newControls = [
  'Hand stabilization',
  'Keep arms in front',
  'Front clearance',
  'Face camera',
  'Avatar rotation Y (trim)',
  'Rotation Y (trim)'
];
const genericHelp = [
  'Runs this action.',
  'Adjusts this setting.',
  'Opens or closes this section.'
];
const newHelp = [
  'Anti-jitter stabilization filter for finger joints and palm.',
  'Constrains wrists and elbows to the camera-facing coronal plane and prevents head penetration using smooth 3D spatial constraints.',
  'Minimum depth in front of the torso plane, expressed as a percentage of shoulder width.',
  'Automatically faces the active camera. Rotation Y remains available as a fine trim.',
  'Automatically faces the remote avatar toward the active camera. Rotation Y remains a fine trim.',
  'Fine yaw adjustment added after Face camera alignment.'
];

for (const language of languages) {
  config.ui.language = language;
  for (const source of [...newControls, ...genericHelp, ...newHelp]) {
    const translated = i18n.t(source);
    assert.ok(translated.trim(), `${language}: empty translation for ${source}`);
    if (language !== 'en') {
      assert.ok(i18n.dictionaries[language][source], `${language}: missing direct catalog entry for ${source}`);
    }
  }
}

config.ui.language = 'en';
assert.equal(
  i18n.t('Con pose non-Full Body (es. busto o scrivania), la modalità Full viene limitata automaticamente a Upper body.'),
  'With non-Full Body poses (for example torso or desk), Full mode is automatically limited to Upper body.'
);
config.ui.language = 'it';
assert.equal(
  i18n.t('Testo di aiuto legacy non ancora canonico.'),
  'Testo di aiuto legacy non ancora canonico.'
);

const i18nSource = fs.readFileSync(i18nPath, 'utf8');
for (const attribute of ['title', 'aria-label', 'placeholder']) {
  assert.ok(i18nSource.includes(`'${attribute}'`), `attribute localization missing: ${attribute}`);
}

const uiCoreSource = fs.readFileSync(uiCorePath, 'utf8');
assert.ok(uiCoreSource.includes("sub || 'Adjusts this setting.'"), 'row help fallback is missing');
assert.ok(uiCoreSource.includes("'Opens or closes this section.'"), 'section help fallback is missing');

const helpSource = fs.readFileSync(helpPath, 'utf8');
assert.ok(helpSource.includes('bindMissing(document)'), 'automatic help coverage is missing');
assert.ok(helpSource.includes("host.querySelectorAll('button, input, select, textarea, summary')"), 'interactive help scan is incomplete');

const rightPanelSource = fs.readFileSync(rightPanelPath, 'utf8');
const handStabilizationBlock = rightPanelSource.match(/\/\/ 4\. Hand stabilization[\s\S]*?\/\/ 5\./)?.[0] || '';
assert.ok(handStabilizationBlock.includes("handStab.type = 'range'"), 'hand stabilization range is missing');
assert.ok(handStabilizationBlock.includes("handStab.min = '0'; handStab.max = '100'; handStab.step = '1'"), 'hand stabilization range is invalid');
assert.ok(handStabilizationBlock.includes('h.stabilize_hand_percent = val'), 'hand stabilization runtime update is missing');
assert.ok(handStabilizationBlock.includes('config.tracking.stabilize_hand_percent = val'), 'hand stabilization profile update is missing');
assert.ok(handStabilizationBlock.includes('await XRA.profileService.save()'), 'hand stabilization persistence is missing');
assert.ok(handStabilizationBlock.includes('defaults.tracking?.stabilize_hand_percent ?? 0'), 'hand stabilization reset is missing');

console.log(`i18n catalog OK: ${languages.length} languages, ${newControls.length} new controls, complete hover fallbacks`);
