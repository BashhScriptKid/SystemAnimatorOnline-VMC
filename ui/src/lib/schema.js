// Data-driven panel schema.
//
// Coverage is *generated from the live XRA.config* so every setting appears and
// stays in sync. OVERRIDES refine specific paths with nicer widgets (enums,
// slider ranges, custom labels). SECTION_INFO renames/groups the top-level keys.

export const SECTION_INFO = {
  camera: { title: 'Camera', icon: 'Camera' },
  devices: { title: 'Devices', icon: 'SlidersHorizontal' },
  pose_model: { title: 'Pose model', icon: 'PersonStanding' },
  performance: { title: 'Performance', icon: 'Zap' },
  tracking: { title: 'Motion capture', icon: 'Activity' },
  body: { title: 'Body', icon: 'PersonStanding' },
  collider: { title: 'Body collider', icon: 'Shield' },
  lip: { title: 'Audio & Lip-sync', icon: 'Mic' },
  background: { title: 'Background', icon: 'Image' },
  avatar: { title: 'Character position (avatar only)', icon: 'User' },
  second_avatar: { title: 'Remote avatar (Studio Link)', icon: 'Globe' },
  stage: { title: '3D Stage & Environment', icon: 'Landmark' },
  recorder: { title: 'Recording / capture', icon: 'Video' },
  visual_effects: { title: 'Visual effects', icon: 'Sparkles' },
  debug: { title: 'Diagnostics', icon: 'Bug' },
  ui: { title: 'UI & overlays', icon: 'Monitor' }
}

// Sections rendered in this order; anything else follows alphabetically.
export const SECTION_ORDER = ['performance', 'tracking', 'body', 'collider', 'lip', 'background', 'stage', 'avatar', 'second_avatar', 'recorder', 'visual_effects', 'debug', 'ui', 'camera', 'devices', 'pose_model']

export const SKIP_SECTIONS = new Set(['left_settings', '_custom_', '_excluded_'])
export const SKIP_PATHS = new Set(['camera.view_presets', 'camera.selected_view_preset', 'ui.preview_video', 'ui.preview_debug', 'performance.auto_last_result', 'recorder.output_dir'])

function humanize(s) {
  const words = String(s).replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').trim()
  return words.charAt(0).toUpperCase() + words.slice(1)
}

// path -> control overrides
export const OVERRIDES = {
  'ui.language': { type: 'select', options: () => (window.XRA?.i18n?.LANGUAGES || [['en', 'English']]) },
  'background.mode': { type: 'select', options: [['color', 'Color'], ['image', 'Image'], ['none', 'None (transparent · OBS)']] },
  'background.color': { type: 'color' },
  'background.path': { type: 'text' },

  'ui.preview_wireframe': { type: 'tristate', label: 'Mocap wireframe' },

  'performance.tracking_pipeline': { type: 'select', label: 'Tracking mode', options: [['FULL_BODY', 'Full Body'], ['FACE', 'Face only'], ['UPPER_BODY', 'Upper body']] },
  'performance.render_resolution': { type: 'select', options: [['720p', '720p (HD · GPU Saving)'], ['1080p', '1080p (Full HD · Recommended)'], ['1440p', '1440p (2K · High resolution)']] },
  'performance.render_fps': { type: 'slider', min: 15, max: 240, step: 1 },
  'performance.gpu_preference': { type: 'select', label: 'Graphics card (GPU)', options: [['default', 'Default'], ['high-performance', 'Dedicated GPU (High Performance)'], ['low-power', 'Integrated GPU (Low Power)']] },
  'performance.shadows': { type: 'select', options: [['auto', 'Auto'], ['on', 'Enabled'], ['off', 'Disabled (GPU saving)']] },
  'performance.antialias': { type: 'select', label: 'Anti-Aliasing (AA)', options: [['auto', 'Enabled (Hardware MSAA · Recommended)'], ['off', 'Disabled']] },
  'performance.spring_bone': { type: 'select', label: 'Hair/cloth physics (Spring Bone)', options: [['full', 'Full (every frame)'], ['half', 'Half (1 frame out of 2 · Saving)'], ['off', 'Off']] },
  'performance.infer_mode': { type: 'select', options: [['native', 'Native (Auto)'], ['640x360', '640×360 (Recommended · 30 FPS smooth)'], ['640x480', '640×480 (Standard 4:3 format)'], ['1280x720', '1280×720 (HD 720p · High precision)']] },
  'performance.pose_fps': { type: 'slider', min: 5, max: 30, step: 1 },
  'performance.hand_fps': { type: 'slider', min: 5, max: 30, step: 1 },
  'performance.min_tracking_confidence': { type: 'slider', min: 0.05, max: 1, step: 0.05 },
  'performance.min_pose_confidence': { type: 'slider', min: 0.05, max: 1, step: 0.05 },
  'performance.min_face_confidence': { type: 'slider', min: 0.05, max: 1, step: 0.05 },
  'performance.min_joint_confidence': { type: 'slider', min: 0.05, max: 1, step: 0.05 },

  'tracking.hand_recovery_mode': { type: 'select', options: [['normal', 'Normal'], ['aggressive', 'Aggressive'], ['off', 'Off']] },
  'tracking.hand_detection_sensitivity': { type: 'select', options: [['high', 'High'], ['normal', 'Normal'], ['low', 'Low']] },
  'tracking.stabilize_hand_percent': { type: 'slider', min: 0, max: 100, step: 1 },
  'tracking.stabilize_arm': { type: 'slider', min: 0, max: 100, step: 1 },
  'tracking.stabilize_arm_time': { type: 'slider', min: 0, max: 2, step: 0.05 },
  'tracking.native_smoothing': { type: 'slider', min: 0, max: 1, step: 0.01 },
  'tracking.body_bend_reduction': { type: 'slider', min: 0, max: 1, step: 0.01 },
  'tracking.upper_body_guard_strength': { type: 'slider', min: 0, max: 1, step: 0.01 },
  'tracking.guard_jump_deg': { type: 'slider', min: 5, max: 120, step: 1 },
  'tracking.guard_hold_ms': { type: 'slider', min: 0, max: 2000, step: 10 },
  'tracking.guard_reacquire_deg': { type: 'slider', min: 5, max: 120, step: 1 },
  'tracking.adaptive_smoothing_strength': { type: 'slider', min: 0, max: 1, step: 0.01 },
  'tracking.guard_confidence_min': { type: 'slider', min: 0, max: 1, step: 0.01 },
  'tracking.guard_release_ms': { type: 'slider', min: 0, max: 2000, step: 10 },
  'tracking.guard_mode': { type: 'select', options: [['off', 'Off'], ['auto', 'Auto']] },
  'tracking.desk_torso_lock': { type: 'slider', min: 0, max: 1, step: 0.01 },
  'tracking.desk_hips_lock': { type: 'slider', min: 0, max: 1, step: 0.01 },
  'tracking.desk_legs_lock': { type: 'slider', min: 0, max: 1, step: 0.01 },
  'tracking.desk_max_yaw_deg': { type: 'slider', min: 0, max: 90, step: 1 },
  'tracking.desk_max_pitch_deg': { type: 'slider', min: 0, max: 90, step: 1 },
  'tracking.desk_max_roll_deg': { type: 'slider', min: 0, max: 90, step: 1 },

  'body.anchor_strength': { type: 'slider', min: 0, max: 1, step: 0.01 },
  'body.transition_ms': { type: 'slider', min: 0, max: 2000, step: 10 },

  'avatar.offset_x': { type: 'slider', min: -5, max: 5, step: 0.01 },
  'avatar.offset_y': { type: 'slider', min: -5, max: 5, step: 0.01 },
  'avatar.offset_z': { type: 'slider', min: -5, max: 5, step: 0.01 },
  'avatar.rotation_y': { type: 'slider', min: -180, max: 180, step: 1 },
  'second_avatar.offset_x': { type: 'slider', min: -20, max: 20, step: 0.1 },
  'second_avatar.offset_y': { type: 'slider', min: -10, max: 10, step: 0.1 },
  'second_avatar.offset_z': { type: 'slider', min: -10, max: 10, step: 0.1 },
  'second_avatar.rotation_y': { type: 'slider', min: -180, max: 180, step: 1 },

  'stage.scale': { type: 'slider', min: 0.1, max: 5, step: 0.01 },
  'stage.rotation_x': { type: 'slider', min: -180, max: 180, step: 1 },
  'stage.rotation_y': { type: 'slider', min: -180, max: 180, step: 1 },
  'stage.rotation_z': { type: 'slider', min: -180, max: 180, step: 1 },
  'stage.offset_x': { type: 'slider', min: -10, max: 10, step: 0.05 },
  'stage.offset_y': { type: 'slider', min: -10, max: 10, step: 0.05 },
  'stage.offset_z': { type: 'slider', min: -10, max: 10, step: 0.05 },
  'stage.scene_zoom': { type: 'slider', min: 0.5, max: 3, step: 0.01 },
  'stage.lights_intensity': { type: 'slider', min: 0, max: 3, step: 0.05 },

  'collider.preset': { type: 'select', options: [['CUSTOM', 'Custom'], ['NONE', 'None']] },
  'collider.reaction': { type: 'select', options: [['z_push', 'Z push'], ['bounce', 'Bounce'], ['block', 'Block']] },
  'collider.head': { type: 'slider', min: 0, max: 200, step: 1 },
  'collider.chest': { type: 'slider', min: 0, max: 200, step: 1 },
  'collider.waist': { type: 'slider', min: 0, max: 200, step: 1 },
  'collider.hip': { type: 'slider', min: 0, max: 200, step: 1 },
  'collider.front_clearance': { type: 'slider', min: 0, max: 50, step: 1 },

  'lip.analysis_fps': { type: 'slider', min: 5, max: 60, step: 1 },
  'lip.fft_size': { type: 'select', label: 'FFT size', options: [['256', '256'], ['512', '512'], ['1024', '1024'], ['2048', '2048']] },
  'lip.mic_mix': { type: 'slider', min: 0, max: 1, step: 0.01 },
  'lip.threshold': { type: 'slider', min: 0, max: 0.2, step: 0.001 },
  'lip.response_gain': { type: 'slider', min: 0, max: 3, step: 0.05 },
  'lip.vowel_emphasis': { type: 'slider', min: 0, max: 3, step: 0.05 },

  'recorder.mode': { type: 'select', label: 'Recording source', options: [['video_audio', 'Video + Audio'], ['video', 'Video only'], ['audio', 'Audio only']] },
  'recorder.audio_only_variant': { type: 'select', label: 'Audio only mode', options: [['both', 'Processed + RAW'], ['processed', 'Processed'], ['raw', 'RAW']] },
  'recorder.capture_source': { type: 'select', label: 'Output source', options: [['classic_v74', 'Classic output · recommended'], ['clean_scene', 'Clean scene output · experimental (no UI)'], ['native_xr', 'XR native video only · fallback']] },
  'recorder.output_format': { type: 'select', options: [['webm', 'WebM'], ['mp4', 'MP4']] },
  'recorder.audio_profile': { type: 'select', options: [['podcast', 'Podcast'], ['call', 'Call (Browser echo/noise filters)']] },
  'recorder.hardware_encode': { type: 'select', options: [['auto', 'Auto'], ['on', 'On'], ['off', 'Off (CPU)']] },
  'recorder.width': { type: 'slider', min: 320, max: 3840, step: 2 },
  'recorder.height': { type: 'slider', min: 240, max: 2160, step: 2 },
  'recorder.fps': { type: 'slider', min: 15, max: 60, step: 1 },
  'recorder.gate_threshold_db': { type: 'slider', min: -80, max: -5, step: 0.5 },
  'recorder.gate_hold_ms': { type: 'slider', min: 0, max: 1000, step: 10 },
  'recorder.gate_release_ms': { type: 'slider', min: 0, max: 1000, step: 10 },
  'recorder.video_bps': { type: 'slider', min: 500000, max: 20000000, step: 100000 },
  'recorder.audio_bps': { type: 'slider', min: 32000, max: 320000, step: 8000 },
  'recorder.segment_minutes': { type: 'select', options: [['0', 'Off'], ['30', 'Every 30 min'], ['60', 'Every 60 min']] },
  'recorder.raw_audio_format': { type: 'select', options: [['flac', 'FLAC (lossless)'], ['wav', 'WAV (large)']] },
  'recorder.filename': { type: 'text' },

  'camera.optimized': { type: 'toggle' },
  'camera.width': { type: 'slider', min: 160, max: 1920, step: 2 },
  'camera.height': { type: 'slider', min: 120, max: 1080, step: 2 },
  'camera.fps': { type: 'slider', min: 5, max: 60, step: 1 }
}

// Fields that are objects/arrays and must not be rendered as a scalar control.
function isScalar(v) { return v === null || ['string', 'number', 'boolean'].includes(typeof v) }

export function buildSections(config) {
  const sections = []
  for (const [key, value] of Object.entries(config || {})) {
    if (SKIP_SECTIONS.has(key)) continue
    if (!value || typeof value !== 'object' || Array.isArray(value)) continue
    const info = SECTION_INFO[key] || {}
    const controls = []
    for (const [field, def] of Object.entries(value)) {
      const path = `${key}.${field}`
      if (SKIP_PATHS.has(path)) continue
      const ov = OVERRIDES[path] || {}
      if (ov.hidden) continue
      if (def !== null && typeof def === 'object') {
        // one level of nesting (e.g. camera.view_presets is skipped, others flatten)
        continue
      }
      const type = ov.type || (typeof def === 'boolean' ? 'toggle' : typeof def === 'number' ? 'number' : 'text')
      controls.push({ type, path, label: ov.label || humanize(field), min: ov.min, max: ov.max, step: ov.step, options: ov.options })
    }
    if (controls.length) sections.push({ id: key, title: info.title || humanize(key), icon: info.icon || '⚙', controls })
  }
  sections.sort((a, b) => {
    const ia = SECTION_ORDER.indexOf(a.id), ib = SECTION_ORDER.indexOf(b.id)
    return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib)
  })
  return sections
}
