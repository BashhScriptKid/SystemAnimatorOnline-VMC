<script>
  import Control from './Control.svelte'
  import { app, config } from './xra.svelte.js'
  let { section } = $props()

  // Flattened render list: optional group headers interleaved with controls,
  // honoring per-control `when` visibility, `enabled` state and the panel
  // search filter.
  const items = $derived.by(() => {
    const q = (app.search || '').trim().toLowerCase()
    const out = []
    let group = null
    for (const c of section.controls) {
      if (c.when && !c.when(config)) continue
      if (q && !`${c.label} ${c.path}`.toLowerCase().includes(q)) continue
      if (c.group && c.group !== group) { out.push({ header: c.group }); group = c.group }
      else if (!c.group) group = null
      out.push({ control: c, disabled: c.enabled ? !c.enabled(config) : false })
    }
    return out
  })
</script>

{#each items as it, i (it.header ? `g${i}` : it.control.path)}
  {#if it.header}<div class="xra-group">{it.header}</div>
  {:else}<Control control={it.control} disabled={it.disabled} />{/if}
{/each}
