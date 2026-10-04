<script>
  import { get, set, t } from './xra.svelte.js'
  let { control } = $props()
  const opts = $derived(typeof control.options === 'function' ? control.options() : (control.options || []))
</script>

<label class="xra-row">
  <span class="xra-row-label">{t(control.label)}</span>
  {#if control.type === 'select'}
    <select value={get(control.path)} onchange={(e) => set(control.path, e.currentTarget.value)}>
      {#each opts as o}<option value={o[0]}>{t(o[1])}</option>{/each}
    </select>
  {:else if control.type === 'slider'}
    <input type="range" min={control.min} max={control.max} step={control.step}
           value={get(control.path, control.min)} oninput={(e) => set(control.path, Number(e.currentTarget.value))} />
    <span class="xra-val">{get(control.path)}</span>
  {:else if control.type === 'toggle'}
    <input type="checkbox" checked={!!get(control.path)} onchange={(e) => set(control.path, e.currentTarget.checked)} />
  {:else if control.type === 'color'}
    <input type="color" value={get(control.path)} oninput={(e) => set(control.path, e.currentTarget.value)} />
  {:else if control.type === 'text'}
    <input type="text" value={get(control.path, '')} onchange={(e) => set(control.path, e.currentTarget.value)} />
  {/if}
</label>
