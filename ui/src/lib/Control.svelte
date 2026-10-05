<script>
  import { get, set, setCameraResolution, t } from './xra.svelte.js'
  import { CAMERA_RESOLUTION_PRESETS } from './schema.js'
  let { control, disabled = false } = $props()
  const opts = $derived(typeof control.options === 'function' ? control.options() : (control.options || []))

  // Mocap-wireframe visibility: null/true = auto (follow tracking), false = off.
  const tri = (v) => (v === false ? 'off' : 'auto')
  const fromTri = (s) => (s === 'off' ? false : null)

  // Camera resolution dropdown: device-supported modes + static presets +
  // "Follow inference resolution" + "Custom…" (which exposes the sliders).
  function camResOptions() {
    const pairs = []
    const seen = new Set()
    const add = (w, h) => {
      w = Number(w); h = Number(h)
      if (!(w >= 320 && h >= 240 && w <= 1920 && h <= 1080)) return
      const key = `${w}x${h}`
      if (seen.has(key)) return
      seen.add(key)
      pairs.push([w, h])
    }
    let supported = null
    try {
      const snap = window.XRA?.xraBackend?.snapshot?.()
      supported = snap?.hardware?.camera?.supported_resolutions
        || snap?.capture?.hardware?.camera?.supported_resolutions
    } catch (e) {}
    const list = Array.isArray(supported) && supported.length ? supported : CAMERA_RESOLUTION_PRESETS
    for (const [w, h] of list) add(w, h)
    for (const [w, h] of CAMERA_RESOLUTION_PRESETS) add(w, h)
    const c = get('camera', {}) || {}
    if (!c.follow_inference && !c.custom_resolution) add(c.width, c.height)
    pairs.sort((a, b) => a[0] * a[1] - b[0] * b[1])
    const out = [['follow', 'Follow inference resolution (auto)']]
    for (const [w, h] of pairs) out.push([`${w}x${h}`, `${w}×${h}`])
    out.push(['custom', 'Custom…'])
    return out
  }

  function camResValue() {
    const c = get('camera', {}) || {}
    if (c.follow_inference) return 'follow'
    if (c.custom_resolution) return 'custom'
    const key = `${c.width}x${c.height}`
    return camResOptions().some((o) => o[0] === key) ? key : 'custom'
  }
</script>

<label class="xra-row" class:xra-row-slider={control.type === 'slider'} class:disabled>
  <span class="xra-row-label" title={control.desc || ''}>{t(control.label)}</span>
  {#if control.type === 'select'}
    <select value={get(control.path)} disabled={disabled} onchange={(e) => set(control.path, e.currentTarget.value)}>
      {#each opts as o}<option value={o[0]}>{t(o[1])}</option>{/each}
    </select>
  {:else if control.type === 'camera-resolution'}
    <select value={camResValue()} disabled={disabled} onchange={(e) => setCameraResolution(e.currentTarget.value)}>
      {#each camResOptions() as o}<option value={o[0]}>{t(o[1])}</option>{/each}
    </select>
  {:else if control.type === 'tristate'}
    <select value={tri(get(control.path))} disabled={disabled} onchange={(e) => set(control.path, fromTri(e.currentTarget.value))}>
      <option value="auto">{t('Auto (follow tracking)')}</option>
      <option value="off">{t('Off')}</option>
    </select>
  {:else if control.type === 'slider'}
    {@const sv = Number(get(control.path, control.min))}
    {@const spct = control.max > control.min ? Math.round(((sv - control.min) / (control.max - control.min)) * 100) : 0}
    <span class="xra-val">{get(control.path)}</span>
    <div class="xra-meter-wrap">
      <div class="xra-meter" style="--xra-fill:{spct}%"></div>
      <input class="xra-meter-input" type="range" min={control.min} max={control.max} step={control.step}
             value={sv} disabled={disabled} oninput={(e) => set(control.path, Number(e.currentTarget.value))} />
      <div class="xra-meter-scale"><span>{control.min}</span><span>{control.max}</span></div>
    </div>
  {:else if control.type === 'toggle'}
    <input type="checkbox" checked={!!get(control.path)} disabled={disabled} onchange={(e) => set(control.path, e.currentTarget.checked)} />
  {:else if control.type === 'color'}
    <input type="color" value={get(control.path)} disabled={disabled} oninput={(e) => set(control.path, e.currentTarget.value)} />
  {:else if control.type === 'number'}
    <input type="number" step={control.step || 'any'} value={get(control.path, 0)} disabled={disabled} oninput={(e) => set(control.path, Number(e.currentTarget.value))} />
  {:else if control.type === 'text'}
    <input type="text" value={get(control.path, '')} disabled={disabled} onchange={(e) => set(control.path, e.currentTarget.value)} />
  {/if}
</label>
