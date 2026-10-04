<script>
  import { get, set, t } from './xra.svelte.js'
  let { control } = $props()
  const opts = $derived(typeof control.options === 'function' ? control.options() : (control.options || []))

  // Mocap-wireframe visibility: null/true = auto (follow tracking), false = off.
  const tri = (v) => (v === false ? 'off' : 'auto')
  const fromTri = (s) => (s === 'off' ? false : null)
</script>

<label class="xra-row" class:xra-row-slider={control.type === 'slider'}>
  <span class="xra-row-label">{t(control.label)}</span>
  {#if control.type === 'select'}
    <select value={get(control.path)} onchange={(e) => set(control.path, e.currentTarget.value)}>
      {#each opts as o}<option value={o[0]}>{t(o[1])}</option>{/each}
    </select>
  {:else if control.type === 'tristate'}
    <select value={tri(get(control.path))} onchange={(e) => set(control.path, fromTri(e.currentTarget.value))}>
      <option value="auto">{t('Auto (follow tracking)')}</option>
      <option value="off">{t('Off')}</option>
    </select>
  {:else if control.type === 'slider'}
    <span class="xra-val">{get(control.path)}</span>
    <input type="range" min={control.min} max={control.max} step={control.step}
           value={get(control.path, control.min)} oninput={(e) => set(control.path, Number(e.currentTarget.value))} />
  {:else if control.type === 'toggle'}
    <input type="checkbox" checked={!!get(control.path)} onchange={(e) => set(control.path, e.currentTarget.checked)} />
  {:else if control.type === 'color'}
    <input type="color" value={get(control.path)} oninput={(e) => set(control.path, e.currentTarget.value)} />
  {:else if control.type === 'number'}
    <input type="number" step={control.step || 'any'} value={get(control.path, 0)} oninput={(e) => set(control.path, Number(e.currentTarget.value))} />
  {:else if control.type === 'text'}
    <input type="text" value={get(control.path, '')} onchange={(e) => set(control.path, e.currentTarget.value)} />
  {/if}
</label>
