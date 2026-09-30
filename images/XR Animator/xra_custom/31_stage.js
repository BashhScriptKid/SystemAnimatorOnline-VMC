(() => {
  'use strict';

  const XRA = window.XRA;
  const TAG = '[XRA STAGE]';
  const { config, events, util } = XRA;

  let gltfLoaderInstance = null;
  let bufferGeometryUtilsPromise = null;
  let activeStageMesh = null;
  const activeProps = {}; // { [propKey]: { mesh, staticPos, staticRot, staticScale, currentHand, lastSeenTime } }
  let sceneZoomRetryTimer = 0;
  let cameraViewRestoreGeneration = 0;
  const cameraZoomBeforeScene = new Map();
  const trackballZoomRuntime = new WeakMap();
  // THREE Euler XYZ reconstructs Y from quaternions in the stable [-90°, 90°]
  // interval.  Values outside it can fold back after a VRM update and make the
  // placement control appear stuck.  Keep UI and runtime on that same domain.
  const AVATAR_YAW_MIN_DEG = -90;
  const AVATAR_YAW_MAX_DEG = 90;

  function clampAvatarYaw(value, fallback = 0) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) return fallback;
    return util.clamp(numeric, AVATAR_YAW_MIN_DEG, AVATAR_YAW_MAX_DEG);
  }

  function getAvatarModel() {
    return window.MMD_SA?.THREEX?.get_model?.(0) || window.MMD_SA?.THREEX?.models?.[0] || null;
  }

  function isVRMModel(avatar) {
    const a = avatar || getAvatarModel();
    if (!a) return true; // Default to VRM (standard metric meters)
    return a.type === 'VRM' || !!a.is_VRM || !!a.model?.humanoid || !!a.vrm;
  }

  function getScaleFactor() {
    return 1.0;
  }

  function getHandRaisedThreshold() {
    return 9.2;
  }

  const DETACH_GRACE_PERIOD_MS = 1200;

  // Preset static desk positions in XR Animator world units (desk height Y ~ 8.0)
  const DEFAULT_PROP_ANCHORS = {
    cell_phone: { pos: [-2.8, 8.05, 3.2], rot: [Math.PI / 2, 0, 0.15], scale: 1.0 },
    cup:        { pos: [ 2.8, 8.55, 3.2], rot: [0, 0, 0], scale: 1.0 },
    microphone: { pos: [ 0.0, 8.90, 2.6], rot: [0.35, 0, 0], scale: 1.0 },
    bottle:     { pos: [ 4.0, 8.55, 3.2], rot: [0, 0, 0], scale: 1.0 },
    book:       { pos: [-4.0, 8.05, 3.2], rot: [Math.PI / 2, 0, 0], scale: 1.0 },
    knife:      { pos: [ 5.0, 8.05, 3.2], rot: [0, 0, 0.3], scale: 1.0 },
    fork:       { pos: [ 5.5, 8.05, 3.2], rot: [0, 0, 0.3], scale: 1.0 },
    spoon:      { pos: [ 6.0, 8.05, 3.2], rot: [0, 0, 0.3], scale: 1.0 },
    apple:      { pos: [-5.0, 8.30, 3.2], rot: [0, 0, 0], scale: 1.0 },
    orange:     { pos: [-5.5, 8.30, 3.2], rot: [0, 0, 0], scale: 1.0 },
    banana:     { pos: [-6.0, 8.20, 3.2], rot: [0, 0, 0.5], scale: 1.0 },
    scissors:   { pos: [ 1.5, 8.05, 3.2], rot: [0, 0, 0], scale: 1.0 },
    mouse:      { pos: [-1.5, 8.10, 3.2], rot: [0, 0, 0], scale: 1.0 },
    laptop:     { pos: [ 0.0, 8.05, 5.0], rot: [0, 0, 0], scale: 1.0 },
    donut:      { pos: [-6.5, 8.30, 3.2], rot: [0, 0, 0], scale: 1.0 },
    toothbrush: { pos: [ 6.5, 8.05, 3.2], rot: [0, 0, 0.3], scale: 1.0 },
    vase:       { pos: [ 7.0, 8.55, 3.2], rot: [0, 0, 0], scale: 1.0 },
  };

  // Fine-tuned grip transforms in XR Animator world units relative to wrist bone:
  // Palm center is ~0.5 units (5cm) along the hand axis into the palm.
  const PROP_GRIP_TRANSFORMS = {
    cell_phone: {
      right: { pos: [0.0, -0.02, 0.08], rot: [0.10, 0.15, -Math.PI / 2] },
      left:  { pos: [0.0, -0.02, 0.08], rot: [0.10, -0.15, Math.PI / 2] },
      scale: 1.0,
    },
    cup: {
      right: { pos: [0.0, -0.05, 0.04], rot: [0.0, 0.0, 0.0] },
      left:  { pos: [0.0, -0.05, 0.04], rot: [0.0, 0.0, 0.0] },
      scale: 1.0,
    },
    microphone: {
      right: { pos: [0.0, -0.03, 0.06], rot: [-0.25, 0.10, -Math.PI / 2] },
      left:  { pos: [0.0, -0.03, 0.06], rot: [-0.25, -0.10, Math.PI / 2] },
      scale: 1.0,
    },
  };

  const DEFAULT_GRIP = {
    right: { pos: [0.0, -0.02, 0.05], rot: [0, 0, -Math.PI / 2] },
    left:  { pos: [0.0, -0.02, 0.05], rot: [0, 0, Math.PI / 2] },
    scale: 1.0,
  };


  // XR Animator keeps the legacy renderer on window.THREE (r58) and the
  // active VRM renderer on MMD_SA.THREEX.THREE (r177).  The bundled FBX/GLTF
  // loaders are r177 modules, so loaded objects must use the active renderer's
  // Three instance.  Mixing the two makes the load callback fail before the
  // stage is added to the scene (r58 has no Group).
  function getRuntimeThree() {
    return window.MMD_SA?.THREEX?.THREE || window.THREEX || window.THREE || null;
  }

  function loaderModuleUrl(filename) {
    const base = String(window.System?.Gadget?.path || '').replace(/\/+$/, '');
    return `${base}/three.js/loaders/${filename}`;
  }

  function utilityModuleUrl(filename) {
    const base = String(window.System?.Gadget?.path || '').replace(/\/+$/, '');
    return `${base}/three.js/utils/${filename}`;
  }

  async function getBufferGeometryUtils() {
    if (!bufferGeometryUtilsPromise) {
      bufferGeometryUtilsPromise = import(utilityModuleUrl('BufferGeometryUtils.js'))
        .catch((error) => {
          bufferGeometryUtilsPromise = null;
          throw error;
        });
    }
    return bufferGeometryUtilsPromise;
  }

  let fbxLoaderInstance = null;
  async function getFBXLoader() {
    if (fbxLoaderInstance) return fbxLoaderInstance;
    const THREE = getRuntimeThree();
    if (!THREE) return null;
    if (THREE.FBXLoader) {
      fbxLoaderInstance = new THREE.FBXLoader();
      return fbxLoaderInstance;
    }
    try {
      const loaderModule = await import(loaderModuleUrl('FBXLoader.js'));
      Object.assign(THREE, loaderModule);
      fbxLoaderInstance = new loaderModule.FBXLoader();
      return fbxLoaderInstance;
    }
    catch (e) {
      console.warn(TAG, 'FBXLoader import failed', e);
      return null;
    }
  }

  async function getGLTFLoader() {
    if (gltfLoaderInstance) return gltfLoaderInstance;
    const THREE = getRuntimeThree();
    if (!THREE) return null;
    if (THREE.GLTFLoader) {
      gltfLoaderInstance = new THREE.GLTFLoader();
      return gltfLoaderInstance;
    }
    try {
      const loaderModule = await import(loaderModuleUrl('GLTFLoader.js'));
      Object.assign(THREE, loaderModule);
      gltfLoaderInstance = new loaderModule.GLTFLoader();
      return gltfLoaderInstance;
    }
    catch (e) {
      console.warn(TAG, 'GLTFLoader import failed', e);
      return null;
    }
  }

  function getScene() {
    return window.MMD_SA?.THREEX?.scene || window.jThree?.( 'scene' )?.three?.(0) || null;
  }

  function staticMeshBatchKey(node) {
    const geometry = node?.geometry;
    const material = node?.material;
    if (
      !node?.isMesh || node.isSkinnedMesh || node.isInstancedMesh ||
      !geometry?.isBufferGeometry || !material || Array.isArray(material) ||
      material.transparent || node.children?.length ||
      Object.keys(geometry.morphAttributes || {}).length
    ) return '';

    const attributes = Object.keys(geometry.attributes || {}).sort().map((name) => {
      const attribute = geometry.attributes[name];
      const arrayType = attribute?.array?.constructor?.name || '';
      return `${name}:${attribute?.itemSize}:${attribute?.normalized ? 1 : 0}:${arrayType}`;
    }).join('|');
    return [
      material.uuid || material.id || material.name,
      geometry.index ? 'indexed' : 'plain',
      attributes,
      node.castShadow ? 'cast' : 'no-cast',
      node.receiveShadow ? 'receive' : 'no-receive',
      node.renderOrder || 0,
    ].join('::');
  }

  async function batchStaticStageMeshes(root, animations = []) {
    if (!root?.traverse || animations?.length) return { before: 0, after: 0, skipped: true };

    let hasSkinnedMesh = false;
    const groups = new Map();
    root.updateMatrixWorld?.(true);
    root.traverse((node) => {
      if (node?.isSkinnedMesh) hasSkinnedMesh = true;
      const key = staticMeshBatchKey(node);
      if (!key) return;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(node);
    });
    if (hasSkinnedMesh) return { before: 0, after: 0, skipped: true };

    const mergeGroups = [...groups.values()].filter(nodes => nodes.length > 1);
    const before = mergeGroups.reduce((total, nodes) => total + nodes.length, 0);
    if (!before) return { before: 0, after: 0, skipped: false };

    try {
      const THREE = getRuntimeThree();
      const { mergeGeometries } = await getBufferGeometryUtils();
      if (!THREE?.Matrix4 || !THREE?.Mesh || typeof mergeGeometries !== 'function') {
        return { before: 0, after: 0, skipped: true };
      }

      root.updateMatrixWorld?.(true);
      const rootInverse = new THREE.Matrix4().copy(root.matrixWorld).invert();
      let mergedCount = 0;
      let batchCount = 0;
      for (const nodes of mergeGroups) {
        const geometries = [];
        for (const node of nodes) {
          const geometry = node.geometry.clone();
          const transform = new THREE.Matrix4().multiplyMatrices(rootInverse, node.matrixWorld);
          geometry.applyMatrix4(transform);
          geometries.push(geometry);
        }

        const mergedGeometry = mergeGeometries(geometries, false);
        geometries.forEach(geometry => geometry.dispose?.());
        if (!mergedGeometry) continue;

        const first = nodes[0];
        const mergedMesh = new THREE.Mesh(mergedGeometry, first.material);
        mergedMesh.name = `XRA_Batch_${batchCount + 1}_${first.material?.name || 'material'}`;
        mergedMesh.castShadow = !!first.castShadow;
        mergedMesh.receiveShadow = !!first.receiveShadow;
        mergedMesh.renderOrder = first.renderOrder || 0;
        mergedMesh.frustumCulled = true;
        mergedMesh.userData ||= {};
        mergedMesh.userData.xraBatchedMeshCount = nodes.length;
        root.add(mergedMesh);

        const disposed = new Set();
        for (const node of nodes) {
          node.parent?.remove(node);
          if (!disposed.has(node.geometry)) {
            node.geometry.dispose?.();
            disposed.add(node.geometry);
          }
        }
        mergedCount += nodes.length;
        batchCount++;
      }

      return { before: mergedCount, after: batchCount, skipped: false };
    }
    catch (error) {
      console.warn(TAG, 'Static stage batching unavailable:', error);
      return { before: 0, after: 0, skipped: true };
    }
  }

  function getRenderCameras() {
    const cameras = [
      window.MMD_SA?.THREEX?.camera?.obj,
      window.MMD_SA?._trackball_camera?.object,
    ].filter(Boolean);
    return [...new Set(cameras)];
  }

  let faceCameraPositionScratch = null;

  function normalizeYawRadians(value) {
    value = Number(value) || 0;
    while (value > Math.PI) value -= Math.PI * 2;
    while (value < -Math.PI) value += Math.PI * 2;
    return value;
  }

  function activeCameraWorldPosition() {
    const camera = getRenderCameras()[0] || window.MMD_SA?._trackball_camera?.object;
    if (camera?.position) {
      const Vector3 = camera.position.constructor;
      if (!faceCameraPositionScratch || faceCameraPositionScratch.constructor !== Vector3) {
        faceCameraPositionScratch = new Vector3();
      }
      if (camera.getWorldPosition) camera.getWorldPosition(faceCameraPositionScratch);
      else faceCameraPositionScratch.copy(camera.position);
      if (Number.isFinite(faceCameraPositionScratch.x) && Number.isFinite(faceCameraPositionScratch.z)) {
        return faceCameraPositionScratch;
      }
    }
    const mmdCamPos = window.MMD_SA?.camera_position;
    if (mmdCamPos && Number.isFinite(mmdCamPos.x) && Number.isFinite(mmdCamPos.z)) {
      return mmdCamPos;
    }
    return null;
  }

  function avatarFacingYaw(x, z, settings, fallback = 0, invertHorizontal = false) {
    const trim = clampAvatarYaw(settings?.rotation_y, fallback) * (Math.PI / 180.0);
    const cameraPosition = activeCameraWorldPosition();
    if (!cameraPosition) return trim;
    const dx = Number(cameraPosition.x) - Number(x);
    const dz = Number(cameraPosition.z) - Number(z);
    if (!Number.isFinite(dx) || !Number.isFinite(dz) || Math.hypot(dx, dz) < 1e-6) return trim;
    const horizontal = invertHorizontal ? -dx : dx;
    const cameraYaw = Math.atan2(horizontal, dz);
    // OFF keeps the avatar looking straight at the camera. ON mirrors the old
    // fixed-yaw pose around that camera-facing direction, so an off-axis avatar
    // turns inward towards the stage/camera instead of outward.
    return normalizeYawRadians(cameraYaw * (settings?.face_camera ? 2 : 1) + trim);
  }

  function pointDistance(a, b) {
    if (!a || !b) return NaN;
    return Math.hypot(
      Number(a.x) - Number(b.x),
      Number(a.y) - Number(b.y),
      Number(a.z) - Number(b.z),
    );
  }

  function setupTrackballCamera() {
    const trackball = window.MMD_SA?._trackball_camera;
    if (!trackball) return;
    trackball.noZoom = !!config.camera?.mouse_locked;
    // Set safe distance limits for mouse wheel zooming:
    // minDistance prevents clipping inside avatar head/face
    // maxDistance prevents zooming out into the void / NaN / freezing
    trackball.minDistance = 5.0;
    trackball.maxDistance = 80.0;
  }

  function isUiElement(target) {
    if (!target || !(target instanceof Element)) return false;
    return !!target.closest(
      '#XRA_CUSTOM_PANEL, .xra-right-panel, #XRA_NATIVE_SETTINGS, .xra-native-drawer, .xra-native-root, .xra-panel, .xra-overlay, .xra-modal, select, input, button, textarea, a, label, [data-xra-ui], #UI_box, #extra_buttons, #extra_boxes, .L_box, .control_box, .native-menu, dialog, [role="dialog"], [role="menu"]'
    );
  }

  function handleWheelZoom(event) {
    if (config.camera?.mouse_locked) return;
    const trackball = window.MMD_SA?._trackball_camera;
    if (!trackball || !trackball.enabled || trackball.noZoom) return;

    if (isUiElement(event.target)) {
      return;
    }

    let delta = 0;
    if (typeof event.deltaY === 'number') {
      delta = event.deltaY;
    } else if (event.detail) {
      delta = event.detail * 40;
    } else if (event.wheelDelta) {
      delta = -event.wheelDelta;
    }

    if (!delta) return;

    event.preventDefault();

    const cam = trackball.object;
    const targetPos = trackball.target;
    if (!cam || !targetPos) return;

    const factor = delta > 0 ? 1.08 : 0.92;
    const eye = cam.position.clone().sub(targetPos);
    let dist = eye.length() * factor;

    const minDist = Number(trackball.minDistance || 5.0);
    const maxDist = Number(trackball.maxDistance || 80.0);
    dist = Math.max(minDist, Math.min(maxDist, dist));

    eye.setLength(dist);
    cam.position.copy(targetPos).add(eye);
    if (trackball._eye) trackball._eye.copy(eye);
    if (trackball.lastPosition) trackball.lastPosition.copy(cam.position);
    cam.lookAt(targetPos);
    cam.updateProjectionMatrix?.();
  }

  function applySceneZoom() {
    const stageConf = config.stage || {};
    const enabled = !!stageConf.enabled && !!stageConf.path;
    const zoomValue = Number(stageConf.scene_zoom ?? 1);
    const zoom = Math.max(0.5, Math.min(8, Number.isFinite(zoomValue) ? zoomValue : 1));
    stageConf.scene_zoom = zoom;
    const cameras = getRenderCameras();

    if (!cameras.length) {
      clearTimeout(sceneZoomRetryTimer);
      sceneZoomRetryTimer = setTimeout(() => applySceneZoom(), 250);
      return false;
    }

    clearTimeout(sceneZoomRetryTimer);
    sceneZoomRetryTimer = 0;

    for (const camera of cameras) {
      if (enabled && !cameraZoomBeforeScene.has(camera))
        cameraZoomBeforeScene.set(camera, Number(camera.zoom) || 1);
      camera.zoom = enabled ? zoom : (cameraZoomBeforeScene.get(camera) || 1);
      camera.updateProjectionMatrix?.();
      if (!enabled) cameraZoomBeforeScene.delete(camera);
    }

    setupTrackballCamera();
    events.emit('stage-scene-zoom', { enabled, zoom: enabled ? zoom : 1 });
    return true;
  }

  function sanitizeCameraVector(value, length) {
    if (!Array.isArray(value) || value.length < length) return null;
    const vector = value.slice(0, length).map(Number);
    return vector.every(Number.isFinite) ? vector : null;
  }

  function sanitizeCameraViewPreset(value) {
    if (!value || typeof value !== 'object') return null;
    const name = String(value.name || '').trim();
    const position = sanitizeCameraVector(value.position, 3);
    const target = sanitizeCameraVector(value.target, 3);
    const up = sanitizeCameraVector(value.up, 3);
    const quaternion = sanitizeCameraVector(value.quaternion, 4);
    const fov = Number(value.fov);
    const zoom = Number(value.zoom);
    if (!name || !position || !target || !up || !Number.isFinite(fov) || !Number.isFinite(zoom)) return null;
    return {
      name,
      position,
      target,
      up,
      quaternion,
      fov: Math.max(1, Math.min(179, fov)),
      zoom: Math.max(0.01, Math.min(100, zoom)),
    };
  }

  function listCameraViewPresets() {
    config.camera ||= {};
    const presets = (Array.isArray(config.camera.view_presets) ? config.camera.view_presets : [])
      .map(sanitizeCameraViewPreset)
      .filter(Boolean);
    config.camera.view_presets = presets;
    return presets;
  }

  function saveCameraViewPreset(name) {
    const cleanName = String(name || '').trim();
    const trackball = window.MMD_SA?._trackball_camera;
    const camera = getRenderCameras()[0] || trackball?.object;
    if (!cleanName || !camera?.position || !camera?.up) return null;

    let target = trackball?.target?.clone?.();
    if (!target) {
      target = camera.position.clone();
      const direction = camera.getWorldDirection?.(camera.position.clone().set(0, 0, -1));
      if (direction) target.add(direction.multiplyScalar(10));
    }
    if (!target) return null;

    const preset = sanitizeCameraViewPreset({
      name: cleanName,
      position: camera.position.toArray(),
      target: target.toArray(),
      up: camera.up.toArray(),
      quaternion: camera.quaternion?.toArray?.() || null,
      fov: Number(camera.fov) || 45,
      zoom: Number(camera.zoom) || 1,
    });
    if (!preset) return null;

    const presets = listCameraViewPresets();
    const existing = presets.findIndex(item => item.name.toLocaleLowerCase() === cleanName.toLocaleLowerCase());
    if (existing >= 0) presets.splice(existing, 1, preset);
    else presets.push(preset);
    config.camera.view_presets = presets;
    config.camera.selected_view_preset = preset.name;
    events.emit('camera-view-presets-changed', { action: existing >= 0 ? 'updated' : 'saved', preset });
    return preset;
  }

  function applyCameraViewPreset(name) {
    const wanted = String(name || '').trim().toLocaleLowerCase();
    const preset = listCameraViewPresets().find(item => item.name.toLocaleLowerCase() === wanted);
    if (!preset) return false;

    const trackball = window.MMD_SA?._trackball_camera;
    const cameras = getRenderCameras();
    if (!cameras.length && trackball?.object) cameras.push(trackball.object);
    if (!cameras.length) return false;

    for (const camera of cameras) {
      camera.position?.fromArray?.(preset.position);
      camera.up?.fromArray?.(preset.up);
      if (preset.quaternion && camera.quaternion?.fromArray) camera.quaternion.fromArray(preset.quaternion);
      else camera.lookAt?.(...preset.target);
      if ('fov' in camera) camera.fov = preset.fov;
      if ('zoom' in camera) camera.zoom = preset.zoom;
      camera.updateMatrix?.();
      camera.matrixWorldNeedsUpdate = true;
      camera.updateProjectionMatrix?.();
    }

    if (trackball) {
      trackball.target?.fromArray?.(preset.target);
      trackball._eye?.subVectors?.(trackball.object.position, trackball.target);
      trackball.lastPosition?.copy?.(trackball.object.position);
      trackball._zoomStart?.copy?.(trackball._zoomEnd);
      trackball._panStart?.copy?.(trackball._panEnd);
      trackball._rotateStart?.copy?.(trackball._rotateEnd);
    }
    if (config.stage?.enabled && config.stage?.path) config.stage.scene_zoom = preset.zoom;
    config.camera.selected_view_preset = preset.name;
    events.emit('camera-view-preset-applied', { preset });
    return true;
  }

  function restoreSelectedCameraViewPreset({ attempts = 24, delay = 200 } = {}) {
    const name = String(config.camera?.selected_view_preset || '').trim();
    const generation = ++cameraViewRestoreGeneration;
    if (!name) return false;

    const attempt = (remaining) => {
      if (generation !== cameraViewRestoreGeneration) return;
      if (applyCameraViewPreset(name)) {
        events.emit('camera-view-preset-restored', { name });
        return;
      }
      if (remaining > 1) setTimeout(() => attempt(remaining - 1), delay);
    };
    attempt(Math.max(1, Number(attempts) || 1));
    return true;
  }

  function deleteCameraViewPreset(name) {
    const wanted = String(name || '').trim().toLocaleLowerCase();
    const presets = listCameraViewPresets();
    const filtered = presets.filter(item => item.name.toLocaleLowerCase() !== wanted);
    if (filtered.length === presets.length) return false;
    config.camera.view_presets = filtered;
    if (String(config.camera.selected_view_preset || '').toLocaleLowerCase() === wanted) {
      config.camera.selected_view_preset = '';
    }
    events.emit('camera-view-presets-changed', { action: 'deleted', name });
    return true;
  }

  function getWristBone(handSide) {
    const avatar = getAvatarModel();
    if (!avatar) return null;
    const isVRM = isVRMModel(avatar);
    if (isVRM) {
      const vrmBoneName = handSide === 'right' ? 'rightHand' : 'leftHand';
      return (
        avatar.getBoneNode?.(vrmBoneName) ||
        avatar.model?.humanoid?.getNormalizedBoneNode?.(vrmBoneName) ||
        avatar.model?.humanoid?.getBoneNode?.(vrmBoneName) ||
        avatar.get_bone_by_MMD_name?.(handSide === 'right' ? '右手首' : '左手首')
      );
    }
    const mmdBoneName = handSide === 'right' ? '右手首' : '左手首';
    return avatar.get_bone_by_MMD_name?.(mmdBoneName) || avatar.mesh?.bones_by_name?.[mmdBoneName];
  }

  function getMiddleFingerBone(handSide) {
    const avatar = getAvatarModel();
    if (!avatar) return null;
    if (isVRMModel(avatar)) {
      const name = handSide === 'right' ? 'rightMiddleProximal' : 'leftMiddleProximal';
      return (
        avatar.getBoneNode?.(name) ||
        avatar.model?.humanoid?.getNormalizedBoneNode?.(name) ||
        avatar.model?.humanoid?.getBoneNode?.(name)
      );
    }
    const mmd = handSide === 'right' ? '右中指１' : '左中指１';
    return avatar.get_bone_by_MMD_name?.(mmd) || avatar.mesh?.bones_by_name?.[mmd] || null;
  }

  function getGripTransform(handSide) {
    const THREE = getRuntimeThree();
    if (!THREE) return null;
    const wrist = getWristBone(handSide);
    if (!wrist) return null;
    try { wrist.updateWorldMatrix?.(true, false); } catch (_) {}
    const pos = new THREE.Vector3();
    const quat = new THREE.Quaternion();
    const mid = getMiddleFingerBone(handSide);
    if (mid) {
      try { mid.updateWorldMatrix?.(true, false); } catch (_) {}
      const wPos = new THREE.Vector3();
      const mPos = new THREE.Vector3();
      wrist.getWorldPosition(wPos);
      mid.getWorldPosition(mPos);
      pos.lerpVectors(wPos, mPos, 0.45);
      wrist.getWorldQuaternion(quat);
    } else {
      wrist.getWorldPosition(pos);
      wrist.getWorldQuaternion(quat);
    }
    return { position: pos, quaternion: quat };
  }

  function getWristWorldPosition(handSide) {
    const bone = getWristBone(handSide);
    const THREE = getRuntimeThree();
    if (!bone || !THREE) return null;
    const v = new THREE.Vector3();
    bone.getWorldPosition(v);
    return v;
  }

  function disposeMesh(mesh) {
    if (!mesh) return;
    mesh.traverse?.((node) => {
      if (node.geometry) node.geometry.dispose?.();
      if (node.material) {
        if (Array.isArray(node.material)) {
          node.material.forEach(m => m?.dispose?.());
        } else {
          node.material.dispose?.();
        }
      }
    });
    const scene = getScene();
    if (scene && mesh.parent === scene) {
      scene.remove(mesh);
    } else if (mesh.parent) {
      mesh.parent.remove(mesh);
    }
  }

  let currentStageLoadId = 0;

  function removeAllStagesFromScene() {
    const scene = getScene();
    if (!scene) return;
    const toRemove = [];
    scene.traverse?.((node) => {
      if (node && node !== scene && (node._is_xra_stage || node._xra_path || node.name === 'XRA_Active_Stage')) {
        toRemove.push(node);
      }
    });
    toRemove.forEach((node) => {
      disposeMesh(node);
      if (node.parent) {
        node.parent.remove(node);
      } else if (scene) {
        scene.remove(node);
      }
    });
    if (activeStageMesh) {
      disposeMesh(activeStageMesh);
      activeStageMesh = null;
    }
  }

  // --- 3D Stage Management ---

  async function applyStage() {
    const stageConf = config.stage || {};
    const path = stageConf.path || '';
    const enabled = !!stageConf.enabled && !!path;

    applySceneZoom();

    if (!enabled) {
      removeAllStagesFromScene();
      events.emit('stage-updated', { enabled: false, path: '' });
      return true;
    }

    const scene = getScene();
    if (!scene) {
      setTimeout(applyStage, 300);
      return false;
    }

    if (activeStageMesh && activeStageMesh._xra_path === path) {
      updateStageTransform();
      return true;
    }

    removeAllStagesFromScene();

    const thisLoadId = ++currentStageLoadId;
    const isFBX = path.toLowerCase().endsWith('.fbx');
    const loader = isFBX ? await getFBXLoader() : await getGLTFLoader();
    if (!loader) {
      console.warn(TAG, `Cannot load stage: ${isFBX ? 'FBXLoader' : 'GLTFLoader'} unavailable`);
      return false;
    }

    try {
      const stageUrl = new URL(path, location.href);
      stageUrl.searchParams.set('_t', Date.now());
      const url = stageUrl.href;
      loader.load(
        url,
        async (result) => {
          if (thisLoadId !== currentStageLoadId) {
            disposeMesh(result);
            return;
          }
          removeAllStagesFromScene();
          const rawMesh = isFBX ? result : (result.scene || result.scenes?.[0]);
          if (!rawMesh) return;

          const THREE = getRuntimeThree();

          const stageGroup = new THREE.Group();
          stageGroup._xra_path = path;

          let embeddedCamera = null;
          rawMesh.traverse?.((node) => {
            if (!embeddedCamera && node?.isPerspectiveCamera) embeddedCamera = node;
          });
          stageGroup._embeddedCamera = embeddedCamera;

          rawMesh.position.set(0, 0, 0);
          rawMesh.rotation.set(0, 0, 0);
          rawMesh.scale.set(1, 1, 1);
          rawMesh.updateMatrixWorld?.(true);

          const batchResult = await batchStaticStageMeshes(
            rawMesh,
            result?.animations || rawMesh.animations || []
          );
          if (thisLoadId !== currentStageLoadId) {
            disposeMesh(rawMesh);
            return;
          }
          if (batchResult.before > batchResult.after) {
            console.info(TAG, `Static stage batched: ${batchResult.before} meshes -> ${batchResult.after} draw batches`);
          }

          let baseScale = 1.0;
          if (THREE?.Box3) {
            try {
              const bbox = new THREE.Box3().setFromObject(rawMesh);
              if (!bbox.isEmpty()) {
                const size = bbox.getSize(new THREE.Vector3());
                const center = bbox.getCenter(new THREE.Vector3());
                const height = size.y;
                stageGroup._localBounds = bbox.clone();

                // Generic metric unit scaling:
                // XR Animator's VRM avatars use decimeter scale (vrm_scale = 11.0, avatar height ~17.5 units).
                // Standard 3D stages exported from Blender / GLTF in meters (room heights 0.2m - 50m)
                // must be scaled by vrm_scale (11.0) so 1 meter in the stage equals 1 meter on the avatar.
                const vrmScale = Number(window.MMD_SA?.THREEX?.VRM?.vrm_scale || 11.0);
                if (height > 0.1 && height <= 50.0) {
                  baseScale = vrmScale;
                } else if (height > 50.0 && height <= 5000.0) {
                  // Centimeter models (e.g. 250 cm high ceiling)
                  baseScale = vrmScale / 100.0;
                } else {
                  baseScale = 1.0;
                }

                if (config.stage?.auto_center) {
                  rawMesh.position.set(-center.x, -bbox.min.y, -center.z);
                } else {
                  // Ground floor at Y=0, preserve author's original X and Z origin
                  rawMesh.position.set(0, -bbox.min.y, 0);
                }
              }
            } catch (boxErr) {
              console.warn(TAG, 'Stage bounds calculation failed:', boxErr);
            }
          }
          stageGroup._baseScale = baseScale;

          stageGroup._embeddedLights = [];
          rawMesh.traverse((node) => {
            if (node.isLight) {
              if (node.intensity > 15) {
                node._originalIntensity = node.intensity * 0.02;
              } else {
                node._originalIntensity = node.intensity;
              }
              stageGroup._embeddedLights.push(node);
            }
            if (node.isMesh) {
              node.frustumCulled = true;
            }
          });

          stageGroup.add(rawMesh);
          scene.add(stageGroup);
          activeStageMesh = stageGroup;
          updateStageTransform();
          applyStageLights();
          setupTrackballCamera();
          applySceneZoom();
          events.emit('stage-updated', { enabled: true, path });
        },
        undefined,
        (err) => {
          console.warn(TAG, 'Failed to load 3D stage:', err);
        }
      );
      return true;
    }
    catch (e) {
      console.warn(TAG, 'Stage load exception:', e);
      return false;
    }
  }

  function applyStageLights() {
    if (!activeStageMesh || !activeStageMesh._embeddedLights) return;
    const enabled = config.stage?.lights_enabled !== false;
    const intensity = Number(config.stage?.lights_intensity ?? 1.0);
    for (const light of activeStageMesh._embeddedLights) {
      light.visible = enabled;
      light.intensity = (light._originalIntensity ?? 1.0) * intensity;
    }
  }

  function getAvatarBaseOrigin() {
    const dungeon = window.MMD_SA_options?.Dungeon;
    if (dungeon?.started) {
      const position = dungeon.character?.pos;
      if (
        Number.isFinite(Number(position?.x)) &&
        Number.isFinite(Number(position?.y)) &&
        Number.isFinite(Number(position?.z))
      ) {
        return {
          x: Number(position.x),
          y: Number(position.y),
          z: Number(position.z),
        };
      }
    }
    return { x: 0, y: 0, z: 0 };
  }

  function getAvatarBasePosition() {
    return getAvatarBaseOrigin();
  }

  function getAvatarRoots() {
    const avatar = getAvatarModel();
    if (!avatar) return [];
    // Target only the single top-level root node of the active avatar.
    // Never include child meshes alongside parent scenes (avoids double transform/rotation),
    // and never include the base MMD mesh when VRM is active (which shifts the Three.js camera look-at anchor).
    const root = avatar.scene || avatar.mesh || avatar.model?.scene;
    if (root?.position) return [root];
    return [];
  }

  function applyAvatarPosition() {
    const roots = getAvatarRoots();
    if (!roots.length) return false;

    const baseOrigin = getAvatarBaseOrigin();
    const ox = Number(config.avatar?.offset_x ?? 0.0);
    const oy = Number(config.avatar?.offset_y ?? 0.0);
    const oz = Number(config.avatar?.offset_z ?? 0.0);
    const x = baseOrigin.x + ox;
    const y = baseOrigin.y + oy;
    const z = baseOrigin.z + oz;
    // XR Animator gives VRM 0 its 180° basis rotation on this same root, which
    // reverses the visible horizontal response. VRM 1 and the neutral remote
    // avatar parent use the camera-vector sign directly.
    const invertFaceCameraYaw = getAvatarModel()?.is_VRM1 === false;
    const rotY = avatarFacingYaw(x, z, config.avatar, 0, invertFaceCameraYaw);
    const epsilon = 1e-6;

    let anyChanged = false;
    for (const root of roots) {
      const changed =
        Math.abs(root.position.x - x) > epsilon ||
        Math.abs(root.position.y - y) > epsilon ||
        Math.abs(root.position.z - z) > epsilon ||
        Math.abs(normalizeYawRadians(root.rotation.y - rotY)) > epsilon;

      if (changed) {
        root.position.set(x, y, z);
        root.rotation.y = rotY;
        root.updateMatrix?.();
        root.matrixWorldNeedsUpdate = true;
        anyChanged = true;
      }
    }
    return true;
  }

  const STUDIO_LINK_POSE_VERSION = 2;
  const MAX_REMOTE_BONES = 96;
  const MAX_REMOTE_EXPRESSIONS = 160;
  const REMOTE_POSE_TIMEOUT_MS = 3000;
  const VRM_HUMANOID_BONES = [
    'hips', 'spine', 'chest', 'upperChest', 'neck', 'head',
    'leftEye', 'rightEye', 'jaw',
    'leftShoulder', 'leftUpperArm', 'leftLowerArm', 'leftHand',
    'rightShoulder', 'rightUpperArm', 'rightLowerArm', 'rightHand',
    'leftUpperLeg', 'leftLowerLeg', 'leftFoot', 'leftToes',
    'rightUpperLeg', 'rightLowerLeg', 'rightFoot', 'rightToes',
    'leftThumbMetacarpal', 'leftThumbProximal', 'leftThumbDistal',
    'leftIndexProximal', 'leftIndexIntermediate', 'leftIndexDistal',
    'leftMiddleProximal', 'leftMiddleIntermediate', 'leftMiddleDistal',
    'leftRingProximal', 'leftRingIntermediate', 'leftRingDistal',
    'leftLittleProximal', 'leftLittleIntermediate', 'leftLittleDistal',
    'rightThumbMetacarpal', 'rightThumbProximal', 'rightThumbDistal',
    'rightIndexProximal', 'rightIndexIntermediate', 'rightIndexDistal',
    'rightMiddleProximal', 'rightMiddleIntermediate', 'rightMiddleDistal',
    'rightRingProximal', 'rightRingIntermediate', 'rightRingDistal',
    'rightLittleProximal', 'rightLittleIntermediate', 'rightLittleDistal'
  ];
  const MMD_STREAM_BONES = [
    '下半身', '上半身', '上半身2', '首', '頭', '両目',
    '左肩', '左腕', '左ひじ', '左手首',
    '右肩', '右腕', '右ひじ', '右手首',
    '左足', '左ひざ', '左足首', '左つま先',
    '右足', '右ひざ', '右足首', '右つま先'
  ];

  function normalizedBoneNode(avatar, boneName) {
    const humanoid = avatar?.model?.humanoid;
    if (!humanoid) return null;
    return humanoid.getNormalizedBoneNode?.(boneName)
      || humanoid.humanBones?.[boneName]?.node
      || humanoid.getRawBoneNode?.(boneName)
      || null;
  }

  function normalizedExpressionName(avatar, name) {
    if (!name) return '';
    try {
      return avatar?.blendshape_map_name?.(name, true) || String(name);
    } catch (_) {
      return String(name);
    }
  }

  function finiteQuaternionTuple(q) {
    if (!q) return null;
    const tuple = [Number(q.x), Number(q.y), Number(q.z), Number(q.w)];
    if (!tuple.every(Number.isFinite)) return null;
    const length = Math.hypot(tuple[0], tuple[1], tuple[2], tuple[3]);
    if (length < 1e-8) return null;
    return tuple.map(value => Number((value / length).toFixed(5)));
  }

  function getLocalAvatarPose() {
    const avatar = getAvatarModel();
    if (!avatar) return null;

    const humanoid = avatar.model?.humanoid;
    if (humanoid) {
      const useNormalizedPose = humanoid.autoUpdateHumanBones !== false;
      const discovered = Object.keys(humanoid.humanBones || {});
      const boneNames = [...new Set(discovered.length ? discovered : VRM_HUMANOID_BONES)];
      const bones = [];
      for (const boneName of boneNames.slice(0, MAX_REMOTE_BONES)) {
        const node = useNormalizedPose
          ? normalizedBoneNode(avatar, boneName)
          : humanoid.getRawBoneNode?.(boneName);
        let tuple = finiteQuaternionTuple(node?.quaternion);
        // XR Animator drives VRM 0 bones in its legacy X/Z handedness, even
        // when the three-vrm normalized rig is active. Undo that conversion
        // before sending the version-independent Studio Link pose.
        if (tuple && avatar.is_VRM1 === false) {
          tuple = [-tuple[0], tuple[1], -tuple[2], tuple[3]];
        }
        if (tuple) bones.push([boneName, ...tuple]);
      }

      let hips = null;
      const hipsNode = useNormalizedPose
        ? normalizedBoneNode(avatar, 'hips')
        : humanoid.getRawBoneNode?.('hips');
      const restPose = useNormalizedPose ? humanoid.normalizedRestPose : humanoid.rawRestPose;
      const rest = restPose?.hips?.position;
      if (hipsNode?.position && rest && rest.length >= 3) {
        const delta = [
          Number(hipsNode.position.x) - Number(rest[0]),
          Number(hipsNode.position.y) - Number(rest[1]),
          Number(hipsNode.position.z) - Number(rest[2])
        ];
        if (delta.every(Number.isFinite)) {
          if (avatar.is_VRM1 === false) {
            delta[0] *= -1;
            delta[2] *= -1;
          }
          hips = delta.map(value => Number(value.toFixed(4)));
        }
      }

      const expressions = [];
      const manager = avatar.model?.expressionManager;
      const expressionList = manager?.expressions || Object.values(manager?.expressionMap || {});
      const seen = new Set();
      for (const expression of expressionList) {
        const sourceName = expression?.expressionName;
        const name = normalizedExpressionName(avatar, sourceName);
        if (!name || seen.has(name) || expressions.length >= MAX_REMOTE_EXPRESSIONS) continue;
        const weight = Number(manager?.getValue?.(sourceName));
        if (!Number.isFinite(weight)) continue;
        seen.add(name);
        expressions.push([name, Number(Math.max(0, Math.min(1, weight)).toFixed(4))]);
      }

      return {
        version: STUDIO_LINK_POSE_VERSION,
        rig: 'vrm-normalized',
        bones,
        hips,
        expressions
      };
    }

    if (avatar.bones_by_name) {
      const bones = [];
      for (const boneName of MMD_STREAM_BONES) {
        const tuple = finiteQuaternionTuple(avatar.bones_by_name[boneName]?.quaternion);
        if (tuple) bones.push([boneName, ...tuple]);
      }
      return {
        version: STUDIO_LINK_POSE_VERSION,
        rig: 'mmd',
        bones,
        hips: null,
        expressions: []
      };
    }

    return null;
  }

  async function listAvatars() {
    try {
      const res = await fetch('/__xra_avatars', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data.files) ? data.files : [];
      }
    } catch (_) {}
    return [];
  }

  function sanitizeRemotePose(payload) {
    if (!payload || Number(payload.version) !== STUDIO_LINK_POSE_VERSION) return null;
    const rig = payload.rig === 'mmd' ? 'mmd' : 'vrm-normalized';
    const bones = new Map();

    if (Array.isArray(payload.bones)) {
      for (const entry of payload.bones.slice(0, MAX_REMOTE_BONES)) {
        if (!Array.isArray(entry) || entry.length < 5) continue;
        const name = String(entry[0] || '').slice(0, 80);
        const tuple = entry.slice(1, 5).map(Number);
        if (!name || !tuple.every(Number.isFinite)) continue;
        const length = Math.hypot(...tuple);
        if (length < 1e-8) continue;
        bones.set(name, tuple.map(value => value / length));
      }
    }

    let hips = null;
    if (Array.isArray(payload.hips) && payload.hips.length >= 3) {
      const values = payload.hips.slice(0, 3).map(Number);
      if (values.every(Number.isFinite)) {
        hips = values.map(value => Math.max(-10, Math.min(10, value)));
      }
    }

    const expressions = new Map();
    if (Array.isArray(payload.expressions)) {
      for (const entry of payload.expressions.slice(0, MAX_REMOTE_EXPRESSIONS)) {
        if (!Array.isArray(entry) || entry.length < 2) continue;
        const name = String(entry[0] || '').slice(0, 100);
        const weight = Number(entry[1]);
        if (name && Number.isFinite(weight)) {
          expressions.set(name, Math.max(0, Math.min(1, weight)));
        }
      }
    }

    return {
      rig,
      bones,
      hips,
      expressions,
      seq: Number.isFinite(Number(payload.seq)) ? Number(payload.seq) : 0,
      receivedAt: performance.now()
    };
  }

  function remoteAvatarRoot(model) {
    return model?._studioLinkRoot || model?.mesh || model?.model?.scene || model?.scene || null;
  }

  function disposeRemoteAvatar(model) {
    const root = remoteAvatarRoot(model);
    if (!root) return;
    try { root.parent?.remove(root); } catch (_) {}
    try { window.MMD_SA?.THREEX?.utils?.dispose?.(root); } catch (error) {
      console.warn(TAG, 'remote avatar dispose failed:', error);
    }
  }

  const secondAvatarManager = {
    active: false,
    model: null,
    _modelKey: '',
    _loadingKey: '',
    _loadingPromise: null,
    _loadGeneration: 0,
    _failedKey: '',
    _retryAfter: 0,
    _lastLoadError: null,
    _remoteStreamId: '',
    _lastSequence: -1,
    _lastPoseAt: 0,
    _latestPose: null,
    _firstPosePending: false,
    _resetPhysicsPending: false,
    _tempQuaternion: null,

    _source(srcToLoad) {
      const configured = String(srcToLoad || config.second_avatar?.vrm_path || 'AliciaSolid').trim();
      if (!configured || configured === 'AliciaSolid') {
        const base = String(window.System?.Gadget?.path || '').replace(/\/+$/, '');
        const fallback = window.MMD_SA_options?.THREEX_options?.model_path || '';
        return {
          key: 'AliciaSolid',
          url: base ? base + '/three.js/model/AliciaSolid.zip#/AliciaSolid.vrm' : fallback
        };
      }
      if (/^(?:https?:|blob:|file:)/i.test(configured) || configured.includes('/')) {
        return { key: configured, url: configured };
      }
      const url = new URL('/__xra_avatar/' + encodeURIComponent(configured), location.href);
      url.searchParams.set('xra_reload', String(Date.now()));
      return { key: configured, url: url.href };
    },

    async loadModel(srcToLoad, { force = false } = {}) {
      const threeX = window.MMD_SA?.THREEX;
      if (!threeX?.VRM?.load || !threeX?.scene) {
        throw new Error('Renderer VRM non ancora pronto');
      }

      const source = this._source(srcToLoad);
      if (!source.url) throw new Error('Percorso VRM remoto non disponibile');
      if (this._loadingPromise && this._loadingKey === source.key) {
        return this._loadingPromise;
      }
      if (!force && this._failedKey === source.key && performance.now() < this._retryAfter) {
        throw this._lastLoadError || new Error(`Avatar remoto “${source.key}” temporaneamente non disponibile`);
      }

      const generation = ++this._loadGeneration;
      this._loadingKey = source.key;
      events.emit('second-avatar-loading', { loading: true, name: source.key });

      const loadPromise = (async () => {
        const loaded = await threeX.VRM.load(source.url, {
          vrm_index: -1,
          detached: true,
          get_parent: function() { return null; },
          update: function() {}
        });
        if (!loaded?.model?.humanoid || !remoteAvatarRoot(loaded)) {
          disposeRemoteAvatar(loaded);
          throw new Error('Il file selezionato non contiene un avatar VRM valido');
        }
        if (generation !== this._loadGeneration) {
          disposeRemoteAvatar(loaded);
          throw new Error('Caricamento sostituito da una richiesta più recente');
        }

        // Keep the VRM scene's own basis transform intact (VRM 0 avatars use a
        // 180-degree root rotation).  Studio Link offsets live on a dedicated
        // parent so changing X/Y/Z or yaw cannot twist the model itself.
        const RuntimeThree = getRuntimeThree();
        if (!RuntimeThree?.Group) {
          disposeRemoteAvatar(loaded);
          throw new Error('Renderer THREE moderno non disponibile');
        }
        const root = new RuntimeThree.Group();
        root.name = 'XRA_StudioLink_RemoteAvatar';
        root.add(loaded.mesh);
        loaded._studioLinkRoot = root;
        root.matrixAutoUpdate = true;
        root.visible = false;
        root.traverse?.(child => {
          child.frustumCulled = false;
        });

        const humanoid = loaded.model.humanoid;
        humanoid.autoUpdateHumanBones = true;
        humanoid.resetNormalizedPose?.();

        const previous = this.model;
        this.model = loaded;
        this._modelKey = source.key;
        this._failedKey = '';
        this._retryAfter = 0;
        this._lastLoadError = null;
        threeX.scene.add(root);
        this.applyPosition(true);
        root.visible = !!(this.active && this._latestPose);
        this._firstPosePending = true;
        this._resetPhysicsPending = true;
        if (previous && previous !== loaded) disposeRemoteAvatar(previous);

        events.emit('second-avatar-model', { name: source.key, loaded: true });
        events.emit('second-avatar-status', {
          active: this.active,
          connected: this.active,
          model: source.key
        });
        return loaded;
      })();

      this._loadingPromise = loadPromise;
      try {
        return await loadPromise;
      } catch (error) {
        if (generation === this._loadGeneration) {
          this._failedKey = source.key;
          this._retryAfter = performance.now() + 10000;
          this._lastLoadError = error instanceof Error ? error : new Error(String(error));
          events.emit('second-avatar-error', {
            name: source.key,
            message: error?.message || String(error)
          });
        }
        throw error;
      } finally {
        if (this._loadingPromise === loadPromise) {
          this._loadingPromise = null;
          this._loadingKey = '';
          events.emit('second-avatar-loading', { loading: false, name: source.key });
        }
      }
    },

    async ensureModel(srcToLoad) {
      const source = this._source(srcToLoad);
      if (this.model && this._modelKey === source.key) return this.model;
      try {
        return await this.loadModel(srcToLoad);
      } catch (error) {
        // Automatic Studio Link startup must not hammer a missing URL on every
        // incoming mocap frame. A manually selected avatar still reports its
        // error to the picker; only the saved automatic choice falls back.
        if (srcToLoad != null || source.key === 'AliciaSolid') throw error;
        config.second_avatar ||= {};
        config.second_avatar.vrm_path = 'AliciaSolid';
        events.emit('second-avatar-fallback', {
          missing: source.key,
          fallback: 'AliciaSolid',
          message: error?.message || String(error)
        });
        const tr = source => XRA.i18n?.t?.(source) || source;
        XRA.toast(`${tr('Remote avatar')} “${source.key}” ${tr('unavailable: using AliciaSolid.')}`, 'error', 5000);
        try { await XRA.profileService.save(0); } catch (_) {}
        return this.loadModel('AliciaSolid', { force: true });
      }
    },

    async startSession(payload = {}) {
      const streamId = String(payload.streamId || '');
      this.active = true;
      this._remoteStreamId = streamId;
      this._lastSequence = -1;
      this._lastPoseAt = performance.now();
      this._latestPose = null;
      this._firstPosePending = true;
      const root = remoteAvatarRoot(this.model);
      if (root) root.visible = false;
      events.emit('second-avatar-status', {
        active: true,
        connected: true,
        awaitingPose: true,
        model: this._modelKey
      });

      try {
        await this.ensureModel();
      } catch (error) {
        if (this.active && (!streamId || this._remoteStreamId === streamId)) {
          const tr = source => XRA.i18n?.t?.(source) || source;
          XRA.toast(`${tr('Remote avatar')}: ${error?.message || error}`, 'error', 6000);
        }
      }
    },

    applyRemotePose(payload) {
      if (!this.active) return false;
      const streamId = String(payload?.streamId || '');
      if (this._remoteStreamId && streamId !== this._remoteStreamId) return false;

      const pose = sanitizeRemotePose(payload);
      if (!pose || pose.seq <= this._lastSequence) return false;
      const isFirstPose = !this._latestPose;
      this._lastSequence = pose.seq;
      this._lastPoseAt = pose.receivedAt;
      this._latestPose = pose;
      if (isFirstPose) {
        this._firstPosePending = true;
        events.emit('second-avatar-status', {
          active: true,
          connected: true,
          awaitingPose: false,
          model: this._modelKey
        });
      }
      if (!this.model && !this._loadingPromise) {
        this.ensureModel().catch(() => {});
      }
      return true;
    },

    stopSession(payload = {}) {
      const force = !!payload.force;
      const streamId = String(payload.streamId || '');
      if (!force && this._remoteStreamId && streamId && streamId !== this._remoteStreamId) {
        return false;
      }

      this.active = false;
      this._remoteStreamId = '';
      this._lastSequence = -1;
      this._lastPoseAt = 0;
      this._latestPose = null;
      this._firstPosePending = false;
      const root = remoteAvatarRoot(this.model);
      if (root) root.visible = false;
      events.emit('second-avatar-status', {
        active: false,
        connected: false,
        reason: payload.reason || 'stopped',
        model: this._modelKey
      });
      return true;
    },

    applyPosition(forcePhysicsReset = false) {
      const root = remoteAvatarRoot(this.model);
      if (!root?.position) return false;

      const baseOrigin = getAvatarBaseOrigin();
      const x = baseOrigin.x + Number(config.second_avatar?.offset_x ?? 12.0);
      const y = baseOrigin.y + Number(config.second_avatar?.offset_y ?? 0.0);
      const z = baseOrigin.z + Number(config.second_avatar?.offset_z ?? 0.0);
      const yaw = avatarFacingYaw(x, z, config.second_avatar, 0);
      if (![x, y, z, yaw].every(Number.isFinite)) return false;

      const distance = Math.hypot(root.position.x - x, root.position.y - y, root.position.z - z);
      const yawDelta = Math.abs(normalizeYawRadians(root.rotation.y - yaw));
      if (distance < 1e-6 && yawDelta < 1e-6) return true;

      root.position.set(x, y, z);
      root.rotation.y = yaw;
      root.updateMatrix?.();
      root.updateMatrixWorld?.(true);
      root.matrixWorldNeedsUpdate = true;
      if (forcePhysicsReset || distance > 0.25 || yawDelta > 0.05) {
        this._resetPhysicsPending = true;
      }
      return true;
    },

    update(deltaSeconds) {
      const model = this.model;
      const root = remoteAvatarRoot(model);

      if (!this.active) {
        if (root) root.visible = false;
        return;
      }
      if (this._lastPoseAt && performance.now() - this._lastPoseAt > REMOTE_POSE_TIMEOUT_MS) {
        this._lastPoseAt = 0;
        this._latestPose = null;
        this._firstPosePending = true;
        if (root) root.visible = false;
        events.emit('second-avatar-status', {
          active: true,
          connected: true,
          awaitingPose: true,
          reason: 'pose-timeout',
          model: this._modelKey
        });
        return;
      }
      if (!model?.model || !root) return;

      const pose = this._latestPose;
      root.visible = !!pose;
      if (!pose) return;

      this.applyPosition();
      const THREE = getRuntimeThree();
      if (!this._tempQuaternion && THREE?.Quaternion) {
        this._tempQuaternion = new THREE.Quaternion();
      }
      const targetQuaternion = this._tempQuaternion;
      const dt = Math.max(1 / 240, Math.min(0.1, Number(deltaSeconds) || 1 / 60));
      const alpha = this._firstPosePending ? 1 : 1 - Math.exp(-28 * dt);

      if (targetQuaternion) {
        for (const [boneName, tuple] of pose.bones) {
          let node = null;
          if (pose.rig === 'vrm-normalized') {
            node = normalizedBoneNode(model, boneName);
            targetQuaternion.fromArray(tuple);
            // Studio Link transports a VRM-version-independent canonical pose.
            // VRM 0 normalized rigs still use the legacy X/Z handedness, so
            // convert back for the concrete receiving avatar.
            model.process_rotation?.(targetQuaternion, boneName);
          } else {
            node = model.get_bone_by_MMD_name?.(boneName) || null;
            targetQuaternion.fromArray(tuple);
            const vrmName = model.bone_map_MMD_to_VRM?.[boneName];
            if (vrmName) model.process_rotation?.(targetQuaternion, vrmName);
          }
          if (node?.quaternion) node.quaternion.slerp(targetQuaternion, alpha);
        }
      }

      if (pose.rig === 'vrm-normalized' && pose.hips) {
        const hipsNode = normalizedBoneNode(model, 'hips');
        const rest = model.model.humanoid?.normalizedRestPose?.hips?.position;
        if (hipsNode?.position && rest && rest.length >= 3) {
          const hipsX = model.is_VRM1 === false ? -pose.hips[0] : pose.hips[0];
          const hipsZ = model.is_VRM1 === false ? -pose.hips[2] : pose.hips[2];
          const targetX = Number(rest[0]) + hipsX;
          const targetY = Number(rest[1]) + pose.hips[1];
          const targetZ = Number(rest[2]) + hipsZ;
          hipsNode.position.x += (targetX - hipsNode.position.x) * alpha;
          hipsNode.position.y += (targetY - hipsNode.position.y) * alpha;
          hipsNode.position.z += (targetZ - hipsNode.position.z) * alpha;
        }
      }

      const expressionManager = model.model.expressionManager;
      const expressionList = expressionManager?.expressions || Object.values(expressionManager?.expressionMap || {});
      for (const expression of expressionList) {
        const localName = expression?.expressionName;
        if (!localName) continue;
        const canonicalName = normalizedExpressionName(model, localName);
        const target = pose.expressions.get(canonicalName) ?? 0;
        const current = Number(expressionManager.getValue?.(localName) || 0);
        expressionManager.setValue?.(localName, current + (target - current) * alpha);
      }

      if (this._resetPhysicsPending) {
        this._resetPhysicsPending = false;
        try { model.model.springBoneManager?.reset?.(); } catch (_) {}
      }
      try {
        if (typeof model.model._update_XRA === 'function') {
          model.model._update_XRA(dt);
        } else {
          model.model.humanoid?.update?.();
          model.model.expressionManager?.update?.();
        }
      } catch (error) {
        console.warn(TAG, 'remote avatar update failed:', error);
      }

      root.updateMatrix?.();
      root.updateMatrixWorld?.(true);
      this._firstPosePending = false;
    },

    get status() {
      return {
        active: this.active,
        model: this._modelKey,
        loading: !!this._loadingPromise,
        streamId: this._remoteStreamId
      };
    }
  };

  function getSecondAvatarModel() {
    return secondAvatarManager.model;
  }

  function applySecondAvatarPosition() {
    return secondAvatarManager.applyPosition();
  }

  XRA.secondAvatar = secondAvatarManager;

  function updateStageTransform() {
    if (!activeStageMesh) return;
    const stageConf = config.stage || {};

    const offsetX = Number(stageConf.offset_x ?? 0.0);
    const offsetY = Number(stageConf.offset_y ?? 0.0);
    const offsetZ = Number(stageConf.offset_z ?? 0.0);
    const userScale = Number(stageConf.scale ?? 1.0);
    const baseScale = Number(activeStageMesh._baseScale ?? 1.0);
    const finalScale = baseScale * userScale;

    const rotX = Number(stageConf.rotation_x ?? 0.0) * (Math.PI / 180.0);
    const rotY = Number(stageConf.rotation_y ?? 0.0) * (Math.PI / 180.0);
    const rotZ = Number(stageConf.rotation_z ?? 0.0) * (Math.PI / 180.0);

    const basePos = getAvatarBasePosition();
    activeStageMesh.position.set(basePos.x + offsetX, basePos.y + offsetY, basePos.z + offsetZ);
    activeStageMesh.scale.set(finalScale, finalScale, finalScale);
    activeStageMesh.rotation.set(rotX, rotY, rotZ);
    activeStageMesh.updateMatrixWorld?.(true);
  }

  function resetCameraToDefault() {
    const trackball = window.MMD_SA?._trackball_camera;
    if (trackball) {
      trackball.up0?.set?.(0, 1, 0);
      trackball.object?.up?.set?.(0, 1, 0);
      trackball.noZoom = false;
      trackball.minDistance = 5.0;
      trackball.maxDistance = 80.0;
    }
    if (window.MMD_SA?.reset_camera) {
      window.MMD_SA.reset_camera(true);
    }
    setupTrackballCamera();
    applySceneZoom();
    return true;
  }

  async function listStages(force = false) {
    try {
      const r = await fetch('/__xra_stages?' + (force ? 'refresh=1&' : '') + '_=' + Date.now(), { cache: 'no-store' });
      if (!r.ok) return [];
      const data = await r.json();
      return Array.isArray(data.files) ? data.files : [];
    }
    catch (e) {
      console.warn(TAG, 'listStages failed', e);
      return [];
    }
  }

  // --- 3D Props Management ---

  async function listProps(force = false) {
    try {
      const r = await fetch('/__xra_props?' + (force ? 'refresh=1&' : '') + '_=' + Date.now(), { cache: 'no-store' });
      if (!r.ok) return [];
      const data = await r.json();
      return Array.isArray(data.files) ? data.files : [];
    }
    catch (e) {
      console.warn(TAG, 'listProps failed', e);
      return [];
    }
  }

  async function loadProp(propKey, glbPath, anchor) {
    if (activeProps[propKey]) return activeProps[propKey];
    const scene = getScene();
    if (!scene) return null;
    const loader = await getGLTFLoader();
    if (!loader) return null;

    return new Promise((resolve) => {
      const propUrl = new URL(glbPath, location.href);
      propUrl.searchParams.set('_t', Date.now());
      const url = propUrl.href;
      loader.load(url, (gltf) => {
        const mesh = gltf.scene || gltf.scenes?.[0];
        if (!mesh) return resolve(null);

        const anc = anchor || DEFAULT_PROP_ANCHORS[propKey] || { pos: [0, 8.05, 3.0], rot: [0, 0, 0], scale: 1 };
        const basePos = getAvatarBasePosition();
        const worldPos = [basePos.x + anc.pos[0], anc.pos[1], basePos.z + anc.pos[2]];
        const scaledScale = anc.scale;

        mesh.position.set(...worldPos);
        mesh.rotation.set(...anc.rot);
        mesh.scale.set(scaledScale, scaledScale, scaledScale);
        mesh.visible = false;

        // A light parented to a prop still affects the whole scene and stacked
        // props multiply the avatar brightness.  Props reuse the scene lights.
        const THREE = getRuntimeThree();

        mesh.traverse((node) => {
          if (node.isMesh) {
            node.frustumCulled = false;
            if (node.material) {
              if (Array.isArray(node.material)) {
                node.material.forEach(m => { if (m && THREE) m.side = THREE.DoubleSide; });
              } else if (THREE) {
                node.material.side = THREE.DoubleSide;
              }
            }
          }
        });

        scene.add(mesh);
        activeProps[propKey] = {
          mesh,
          staticPos: [...worldPos],
          staticRot: [...anc.rot],
          staticScale: scaledScale,
          currentHand: null,
          lastSeenTime: 0,
        };
        resolve(activeProps[propKey]);
      }, undefined, (err) => {
        console.warn(TAG, `Failed to load prop ${propKey}:`, err);
        resolve(null);
      });
    });
  }

  function updateHeldProps() {
    try {
      updateHeldProps_inner();
    } catch (e) {
      console.error("Error in updateHeldProps:", e);
    }
  }

  function updateHeldProps_inner() {
    if (!config.object_tracking?.enabled) return;
    const THREE = getRuntimeThree();
    if (!THREE) return;
    for (const [propKey, prop] of Object.entries(activeProps)) {
      if (!prop.currentHand || !prop.mesh) continue;
      const gripTransform = getGripTransform(prop.currentHand);
      if (!gripTransform) continue;

      const wristPos = gripTransform.position;
      const wristQuat = gripTransform.quaternion;

      const userGrip = config.object_tracking?.grip?.[propKey] || {};
      const defaultGrip = PROP_GRIP_TRANSFORMS[propKey] || DEFAULT_GRIP;
      const grip = defaultGrip[prop.currentHand] || defaultGrip.right;

      // User calibration sliders are in cm; in XR Animator world units: 1 unit = 10cm, so 1cm = 0.1 units
      const uX = (Number(userGrip.pos_x ?? 0) / 10.0);
      const uY = (Number(userGrip.pos_y ?? 0) / 10.0);
      const uZ = (Number(userGrip.pos_z ?? 0) / 10.0);

      const offset = new THREE.Vector3(
        grip.pos[0] + uX,
        grip.pos[1] + uY,
        grip.pos[2] + uZ
      );
      offset.applyQuaternion(wristQuat);

      const rotEuler = new THREE.Euler(
        grip.rot[0] + ((Number(userGrip.rot_x ?? 0)) * Math.PI / 180.0),
        grip.rot[1] + ((Number(userGrip.rot_y ?? 0)) * Math.PI / 180.0),
        grip.rot[2] + ((Number(userGrip.rot_z ?? 0)) * Math.PI / 180.0),
        'XYZ'
      );
      const rotQuat = new THREE.Quaternion().setFromEuler(rotEuler);

      const finalScale = grip.scale || 1.0;

      prop.mesh.position.copy(wristPos).add(offset);
      prop.mesh.quaternion.copy(wristQuat).multiply(rotQuat);
      prop.mesh.scale.set(finalScale, finalScale, finalScale);
    }
  }

  function attachPropToHand(propKey, handSide) {
    if (!config.object_tracking?.enabled) {
      detachProp(propKey);
      return;
    }
    const prop = activeProps[propKey];
    if (!prop || !prop.mesh) return;

    const manual = config.object_tracking?.manual_attach?.[propKey] || 'auto';
    if (manual === 'hidden') {
      prop.mesh.visible = false;
      prop.currentHand = null;
      return;
    }
    if (manual === 'desk') {
      prop.currentHand = null;
      prop.mesh.visible = true;
      prop.mesh.position.set(...prop.staticPos);
      prop.mesh.rotation.set(...prop.staticRot);
      prop.mesh.scale.set(prop.staticScale, prop.staticScale, prop.staticScale);
      return;
    }

    const actualHand = (manual === 'right' || manual === 'left') ? manual : handSide;
    const bone = getWristBone(actualHand);
    if (!bone) return;

    // Hand exclusivity: only 1 prop per hand. Detach any other prop held on this hand
    for (const [otherKey, otherProp] of Object.entries(activeProps)) {
      if (otherKey !== propKey && otherProp.currentHand === actualHand) {
        detachProp(otherKey);
      }
    }

    if (prop.currentHand !== actualHand) {
      prop.currentHand = actualHand;
      events.emit('prop-attached', { prop: propKey, hand: actualHand });
    }

    prop.mesh.visible = true;
    updateHeldProps();
  }

  function detachProp(propKey) {
    const prop = activeProps[propKey];
    if (!prop || !prop.mesh) return;

    const manual = config.object_tracking?.manual_attach?.[propKey] || 'auto';
    if (manual === 'right' || manual === 'left') {
      return;
    }
    if (manual === 'desk') {
      prop.currentHand = null;
      prop.mesh.visible = true;
      prop.mesh.position.set(...prop.staticPos);
      prop.mesh.rotation.set(...prop.staticRot);
      prop.mesh.scale.set(prop.staticScale, prop.staticScale, prop.staticScale);
      return;
    }

    const changed = !!prop.currentHand || prop.mesh.visible;
    prop.mesh.visible = false;
    prop.currentHand = null;
    prop.lastSeenTime = 0;
    if (changed) events.emit('prop-detached', { prop: propKey });
  }

  function resetAllProps() {
    for (const propKey of Object.keys(activeProps)) {
      const prop = activeProps[propKey];
      if (!prop || !prop.mesh) continue;
      prop.mesh.visible = false;
      prop.currentHand = null;
      prop.lastSeenTime = 0;
    }
  }

  function applyManualAttaches() {
    if (!config.object_tracking?.enabled) {
      resetAllProps();
      return;
    }
    const manualMap = config.object_tracking?.manual_attach || {};
    for (const [propKey, prop] of Object.entries(activeProps)) {
      if (!prop || !prop.mesh) continue;
      const mode = manualMap[propKey] || 'auto';
      if (mode === 'right' || mode === 'left') {
        attachPropToHand(propKey, mode);
      } else if (mode === 'desk') {
        prop.currentHand = null;
        prop.mesh.visible = true;
        prop.mesh.position.set(...prop.staticPos);
        prop.mesh.rotation.set(...prop.staticRot);
        prop.mesh.scale.set(prop.staticScale, prop.staticScale, prop.staticScale);
      } else if (mode === 'hidden') {
        prop.currentHand = null;
        prop.mesh.visible = false;
      } else {
        // 'auto'
        if (prop.currentHand) {
          prop.mesh.visible = true;
        } else {
          prop.mesh.visible = false;
        }
      }
    }
    updateHeldProps();
  }

  async function setObjectTrackingEnabled(enabled) {
    if (!enabled) {
      resetAllProps();
    } else {
      await initDefaultProps();
      applyManualAttaches();
      updateHeldProps();
    }
  }

  function updateGripTransforms() {
    updateHeldProps();
  }

  // Called when object detection results arrive from WebSocket
  function onObjectDetected(detections) {
    // A detection already in flight can arrive just after the user disables
    // the feature.  OFF must win over that stale result immediately.
    if (!config.object_tracking?.enabled) {
      resetAllProps();
      return;
    }
    if (!Array.isArray(detections)) return;

    const now = performance.now();
    const detectedMap = {};
    const CLASS_TO_PROP = {
      'cell phone': 'cell_phone', 'remote': 'cell_phone',
      'cup': 'cup', 'wine glass': 'cup',
      'bottle': 'bottle',
      'microphone': 'microphone',
      'book': 'book',
      'laptop': 'laptop',
      'scissors': 'scissors',
      'knife': 'knife',
      'fork': 'fork',
      'spoon': 'spoon',
      'apple': 'apple',
      'orange': 'orange',
      'banana': 'banana',
      'donut': 'donut',
      'mouse': 'mouse',
      'toothbrush': 'toothbrush',
      'vase': 'vase',
    };

    const handCandidates = { right: null, left: null };

    for (const det of detections) {
      const cat = (det.category || '').toLowerCase();
      let propKey = null;
      for (const [cls, key] of Object.entries(CLASS_TO_PROP)) {
        if (cat.includes(cls)) { propKey = key; break; }
      }

      if (propKey && det.hand) {
        // Skip props manually set to hidden
        const manual = config.object_tracking?.manual_attach?.[propKey] || 'auto';
        if (manual === 'hidden') continue;

        // Custom AI triggers: check if user configured other props to trigger on this detection
        const aiTriggers = config.object_tracking?.ai_trigger || {};
        for (const [customKey, triggerClass] of Object.entries(aiTriggers)) {
          if (triggerClass === propKey && customKey !== propKey) {
            const customManual = config.object_tracking?.manual_attach?.[customKey] || 'auto';
            if (customManual !== 'hidden') {
              propKey = customKey;
            }
          }
        }

        const score = Number(det.score || 0);
        const hand = det.hand;
        if (!handCandidates[hand] || score > handCandidates[hand].score) {
          handCandidates[hand] = { propKey, score };
        }
      }
    }

    if (handCandidates.right) detectedMap[handCandidates.right.propKey] = 'right';
    if (handCandidates.left) detectedMap[handCandidates.left.propKey] = 'left';

    // Auto-load any detected prop that isn't loaded yet
    for (const [propKey, targetHand] of Object.entries(detectedMap)) {
      const manual = config.object_tracking?.manual_attach?.[propKey] || 'auto';
      if (manual === 'hidden') continue;
      if (!activeProps[propKey]) {
        loadProp(propKey, `props/${propKey}.glb`).then((p) => {
          if (p && config.object_tracking?.enabled) {
            attachPropToHand(propKey, targetHand);
          }
        });
      }
    }

    const raisedThreshold = getHandRaisedThreshold();

    // Attach or evaluate holding hysteresis
    for (const [propKey, prop] of Object.entries(activeProps)) {
      const manual = config.object_tracking?.manual_attach?.[propKey] || 'auto';
      if (manual !== 'auto') continue;

      const targetHand = detectedMap[propKey];
      if (targetHand) {
        prop.lastSeenTime = now;
        attachPropToHand(propKey, targetHand);
      } else if (prop.currentHand) {
        // ANTI-DROP HYSTERESIS:
        // Check if hand is still raised (holding pose). If so, DO NOT DROP!
        const wristPos = getWristWorldPosition(prop.currentHand);
        const isHandRaised = wristPos ? wristPos.y > raisedThreshold : false;

        if (isHandRaised) {
          // Hand is still in holding zone (chest/face/air) -> keep holding firmly
        } else {
          // Hand has descended to desk/resting level
          if (now - (prop.lastSeenTime || 0) > DETACH_GRACE_PERIOD_MS) {
            detachProp(propKey);
          }
        }
      }
    }

    events.emit('objects-detected', detections);
  }

  // Periodic check loop for hands returning to desk level
  setInterval(() => {
    if (!config.object_tracking?.enabled) return;
    const now = performance.now();
    const raisedThreshold = getHandRaisedThreshold();
    for (const [propKey, prop] of Object.entries(activeProps)) {
      const manual = config.object_tracking?.manual_attach?.[propKey] || 'auto';
      if (manual !== 'auto') continue;
      if (!prop.currentHand) continue;
      const wristPos = getWristWorldPosition(prop.currentHand);
      const isHandRaised = wristPos ? wristPos.y > raisedThreshold : false;
      if (!isHandRaised && (now - (prop.lastSeenTime || 0) > DETACH_GRACE_PERIOD_MS + 400)) {
        detachProp(propKey);
      }
    }
  }, 300);

  // Initialize default sample props if available
  async function initDefaultProps() {
    const propFiles = await listProps();
    for (const file of propFiles) {
      const name = file.replace(/^props\//, '').replace(/\.(glb|gltf|pmx|x|fbx)$/i, '');
      if (!activeProps[name]) {
        const prop = await loadProp(name, file);
        if (prop?.mesh) prop.mesh.visible = false;
      }
    }
  }

  // Startup hooks
  window.addEventListener('MMDStarted', () => {
    setTimeout(applyStage, 600);
    setTimeout(setupTrackballCamera, 700);
    setTimeout(applySceneZoom, 800);
    setTimeout(applyAvatarPosition, 900);
    // Native camera setup can finish after the profile is loaded. Reapply the
    // selected saved framing only after stage zoom/trackball initialization.
    setTimeout(() => restoreSelectedCameraViewPreset(), 1050);
    setTimeout(() => restoreSelectedCameraViewPreset({ attempts: 8 }), 2400);
    setTimeout(async () => {
      await initDefaultProps();
      if (config.object_tracking?.enabled) {
        applyManualAttaches();
        updateHeldProps();
      }
    }, 1200);
  });
  window.addEventListener('SA_Dungeon_onstart', () => {
    setTimeout(applyStage, 500);
    setTimeout(applyAvatarPosition, 550);
  });
  let savedCameraDistance = 0;
  let savedCameraZoom = 1;
  window.addEventListener('jThree_ready', () => setTimeout(setupTrackballCamera, 0));
  window.addEventListener('MMDCameraReset', () => {
    try {
      const trackball = window.MMD_SA?._trackball_camera;
      const cam = trackball?.object || getRenderCameras()[0];
      if (cam && trackball?.target) {
        savedCameraDistance = cam.position.distanceTo(trackball.target);
        savedCameraZoom = cam.zoom || 1;
      }
    } catch (_) {}
    setTimeout(setupTrackballCamera, 0);
  });
  window.addEventListener('MMDCameraReset_after', () => setTimeout(() => {
    setupTrackballCamera();
    try {
      if (savedCameraDistance > 0) {
        const trackball = window.MMD_SA?._trackball_camera;
        const cam = trackball?.object || getRenderCameras()[0];
        if (cam && trackball?.target) {
          const eye = cam.position.clone().sub(trackball.target);
          if (eye.length() > 1e-4) {
            eye.setLength(savedCameraDistance);
            cam.position.copy(trackball.target).add(eye);
            if (trackball._eye) trackball._eye.copy(eye);
            if (trackball.lastPosition) trackball.lastPosition.copy(cam.position);
          }
          if (savedCameraZoom) cam.zoom = savedCameraZoom;
          cam.updateProjectionMatrix?.();
        }
      }
    } catch (_) {}
    applySceneZoom();
  }, 0));
  window.addEventListener('SA_camera_poseNet_process_bones_onended', applyAvatarPosition);
  window.addEventListener('SA_MMD_before_render', () => {
    updateHeldProps();
    applyAvatarPosition();
    const frameMs = typeof RAF_timestamp_delta !== 'undefined'
      ? Number(RAF_timestamp_delta)
      : 16.67;
    secondAvatarManager.update(frameMs / 1000);
  });
  window.addEventListener('wheel', (e) => {
    if (isUiElement(e.target)) {
      e.stopPropagation();
    }
  }, { capture: true, passive: true });
  window.addEventListener('wheel', handleWheelZoom, { passive: false });
  events.on('profile-loaded', () => {
    applyStage();
    applyAvatarPosition();
    applySecondAvatarPosition();
    setupTrackballCamera();
    restoreSelectedCameraViewPreset();
    if (config.object_tracking?.enabled) {
      initDefaultProps().then(() => {
        applyManualAttaches();
        updateGripTransforms();
      });
    } else {
      resetAllProps();
    }
  });


  XRA.stage = {
    apply: applyStage,
    updateTransform: updateStageTransform,
    applyStageLights,
    avatarYawRange: Object.freeze({ min: AVATAR_YAW_MIN_DEG, max: AVATAR_YAW_MAX_DEG }),
    applyAvatarPosition,
    applySecondAvatarPosition,
    getSecondAvatarModel,
    getLocalAvatarPose,
    getAvatarBaseOrigin,
    getAvatarBasePosition,
    frameCamera: resetCameraToDefault,
    resetCamera: resetCameraToDefault,
    setupTrackballCamera,
    applySceneZoom,
    applyLinkedSceneZoom: applySceneZoom,
    listCameraViewPresets,
    saveCameraViewPreset,
    applyCameraViewPreset,
    restoreSelectedCameraViewPreset,
    deleteCameraViewPreset,
    updateGripTransforms,
    resetAllProps,
    setObjectTrackingEnabled,
    applyManualAttaches,
    listStages,
    listProps,
    listAvatars,
    loadProp,
    attachPropToHand,
    detachProp,
    onObjectDetected,
    activeProps,
    getActiveStageMesh: () => activeStageMesh,
  };
})();
