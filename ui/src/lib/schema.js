// Declarative schema for the control panel. Each control binds a config path to
// a generic widget; labels are English keys resolved through XRA.i18n.t().
// Types: select | slider | toggle | color | text | button

export const SECTIONS = [
  {
    id: 'background', title: 'Background', icon: '🖼',
    controls: [
      { type: 'select', path: 'background.mode', label: 'Mode', options: [['color', 'Color'], ['image', 'Image'], ['none', 'None (transparent · OBS)']] },
      { type: 'color', path: 'background.color', label: 'Color', when: c => c.background?.mode === 'color' },
      { type: 'text', path: 'background.path', label: 'Image path', when: c => c.background?.mode === 'image' }
    ]
  },
  {
    id: 'avatar', title: 'Avatar position', icon: '🧍',
    controls: [
      { type: 'slider', path: 'avatar.offset_x', label: 'Avatar X', min: -5, max: 5, step: 0.01 },
      { type: 'slider', path: 'avatar.offset_y', label: 'Avatar Y', min: -5, max: 5, step: 0.01 },
      { type: 'slider', path: 'avatar.offset_z', label: 'Avatar Z', min: -5, max: 5, step: 0.01 },
      { type: 'slider', path: 'avatar.rotation_y', label: 'Avatar rotation Y', min: -180, max: 180, step: 1 },
      { type: 'toggle', path: 'avatar.face_camera', label: 'Face camera' }
    ]
  },
  {
    id: 'stage', title: '3D Stage & Environment', icon: '🏛️',
    controls: [
      { type: 'toggle', path: 'stage.enabled', label: 'Enable 3D stage' },
      { type: 'slider', path: 'stage.scale', label: 'Stage scale', min: 0.1, max: 5, step: 0.01, when: c => c.stage?.enabled },
      { type: 'slider', path: 'stage.rotation_x', label: 'Rotation X', min: -180, max: 180, step: 1, when: c => c.stage?.enabled },
      { type: 'slider', path: 'stage.rotation_y', label: 'Rotation Y', min: -180, max: 180, step: 1, when: c => c.stage?.enabled },
      { type: 'slider', path: 'stage.rotation_z', label: 'Rotation Z', min: -180, max: 180, step: 1, when: c => c.stage?.enabled },
      { type: 'slider', path: 'stage.offset_x', label: 'Offset X', min: -10, max: 10, step: 0.05, when: c => c.stage?.enabled },
      { type: 'slider', path: 'stage.offset_y', label: 'Offset Y', min: -10, max: 10, step: 0.05, when: c => c.stage?.enabled },
      { type: 'slider', path: 'stage.offset_z', label: 'Offset Z', min: -10, max: 10, step: 0.05, when: c => c.stage?.enabled },
      { type: 'slider', path: 'stage.scene_zoom', label: 'Zoom scena', min: 0.5, max: 3, step: 0.01 },
      { type: 'toggle', path: 'stage.lights_enabled', label: 'Stage lights', when: c => c.stage?.enabled },
      { type: 'slider', path: 'stage.lights_intensity', label: 'Stage light intensity', min: 0, max: 3, step: 0.05, when: c => c.stage?.enabled }
    ]
  },
  {
    id: 'performance', title: 'Performance', icon: '⚡',
    controls: [
      { type: 'select', path: 'performance.tracking_pipeline', label: 'Tracking mode', options: [['FULL_BODY', 'Full Body'], ['FACE', 'Face only'], ['UPPER_BODY', 'Upper body']] },
      { type: 'select', path: 'performance.render_resolution', label: 'Resolution', options: [['720p', '720p (HD · GPU Saving)'], ['1080p', '1080p (Full HD · Recommended)'], ['1440p', '1440p (2K · High resolution)']] },
      { type: 'slider', path: 'performance.render_fps', label: 'Render FPS', min: 15, max: 240, step: 1 },
      { type: 'select', path: 'performance.gpu_preference', label: 'Graphics card (GPU)', options: [['default', 'Default'], ['high-performance', 'Dedicated GPU (High Performance)'], ['low-power', 'Integrated GPU (Low Power)']] },
      { type: 'select', path: 'performance.shadows', label: 'Shadows', options: [['auto', 'Auto'], ['on', 'Enabled'], ['off', 'Disabled (GPU saving)']] },
      { type: 'select', path: 'performance.antialias', label: 'Anti-Aliasing (AA)', options: [['auto', 'Enabled (Hardware MSAA · Recommended)'], ['off', 'Disabled']] },
      { type: 'select', path: 'performance.spring_bone', label: 'Hair/cloth physics (Spring Bone)', options: [['full', 'Full (every frame)'], ['half', 'Half (1 frame out of 2 · Saving)'], ['off', 'Off']] },
      { type: 'toggle', path: 'performance.preserve_drawing_buffer', label: 'GPU drawing buffer (preserveDrawingBuffer)' },
      { type: 'toggle', path: 'performance.disable_postfx', label: 'Disable heavy post FX' },
      { type: 'slider', path: 'performance.pose_fps', label: 'Pose inference', min: 5, max: 30, step: 1 },
      { type: 'slider', path: 'performance.hand_fps', label: 'Hands inference', min: 5, max: 30, step: 1 },
      { type: 'slider', path: 'performance.min_tracking_confidence', label: 'Min tracking confidence', min: 0.05, max: 1, step: 0.05 },
      { type: 'slider', path: 'performance.min_pose_confidence', label: 'Min pose detection confidence', min: 0.05, max: 1, step: 0.05 },
      { type: 'slider', path: 'performance.min_face_confidence', label: 'Min face detection confidence', min: 0.05, max: 1, step: 0.05 },
      { type: 'slider', path: 'performance.min_joint_confidence', label: 'Min joint confidence', min: 0.05, max: 1, step: 0.05 }
    ]
  },
  {
    id: 'tracking', title: 'Tracking / mocap mode', icon: '🎯',
    controls: [
      { type: 'toggle', path: 'tracking.hands_enabled', label: 'Hands' },
      { type: 'select', path: 'tracking.hand_recovery_mode', label: 'Hand recovery', options: [['normal', 'Normal'], ['aggressive', 'Aggressive'], ['off', 'Off']] },
      { type: 'select', path: 'tracking.hand_detection_sensitivity', label: 'Hand detection sensitivity', options: [['high', 'High'], ['normal', 'Normal'], ['low', 'Low']] },
      { type: 'slider', path: 'tracking.stabilize_hand_percent', label: 'Hand stabilization', min: 0, max: 100, step: 1 },
      { type: 'slider', path: 'tracking.adaptive_smoothing_strength', label: 'Adaptive smoothing strength', min: 0, max: 1, step: 0.01 },
      { type: 'toggle', path: 'tracking.desk_wrist_guard', label: 'Desk wrist occlusion guard' }
    ]
  },
  {
    id: 'lip', title: 'Audio & Lip-sync', icon: '🎙️',
    controls: [
      { type: 'toggle', path: 'lip.optimized', label: 'Light lip analysis' },
      { type: 'slider', path: 'lip.analysis_fps', label: 'Analysis FPS', min: 5, max: 60, step: 1 },
      { type: 'slider', path: 'lip.mic_mix', label: 'Mic / camera mix', min: 0, max: 1, step: 0.01 },
      { type: 'slider', path: 'lip.threshold', label: 'Lip-sync threshold', min: 0, max: 0.2, step: 0.001 },
      { type: 'slider', path: 'lip.response_gain', label: 'Mouth response', min: 0, max: 3, step: 0.05 },
      { type: 'slider', path: 'lip.vowel_emphasis', label: 'Vowel emphasis', min: 0, max: 3, step: 0.05 },
      { type: 'toggle', path: 'lip.meter_visible', label: 'Show VU meter' }
    ]
  },
  {
    id: 'recorder', title: 'Recording / capture', icon: '⏺',
    controls: [
      { type: 'select', path: 'recorder.mode', label: 'Recording source', options: [['video_audio', 'Video + Audio'], ['video', 'Video only'], ['audio', 'Audio only']] },
      { type: 'select', path: 'recorder.output_format', label: 'Output format', options: [['webm', 'WebM'], ['mp4', 'MP4']] },
      { type: 'slider', path: 'recorder.width', label: 'Width', min: 320, max: 3840, step: 2 },
      { type: 'slider', path: 'recorder.height', label: 'Height', min: 240, max: 2160, step: 2 },
      { type: 'slider', path: 'recorder.fps', label: 'Capture FPS', min: 15, max: 60, step: 1 },
      { type: 'toggle', path: 'recorder.noise_gate', label: 'Recording noise gate' },
      { type: 'slider', path: 'recorder.gate_threshold_db', label: 'Recording gate threshold', min: -80, max: -5, step: 0.5 },
      { type: 'slider', path: 'recorder.video_bps', label: 'Video bitrate', min: 500000, max: 20000000, step: 100000 },
      { type: 'toggle', path: 'recorder.raw_audio_backup', label: 'RAW microphone backup' }
    ]
  },
  {
    id: 'ui', title: 'UI & overlays', icon: '🖥️',
    controls: [
      { type: 'select', path: 'ui.language', label: 'Language', options: () => (window.XRA?.i18n?.LANGUAGES || [['en', 'English']]) }
    ]
  }
]
