<script>
  import Control from './Control.svelte'
  import { config, t } from './xra.svelte.js'
  let { section } = $props()
  let open = $state(true)
</script>

<details class="xra-sec" open={open}>
  <summary onclick={(e) => { e.preventDefault(); open = !open }}>{section.icon} {t(section.title)}</summary>
  {#if open}
    <div class="xra-sec-body">
      {#each section.controls as c (c.path)}
        {#if !c.when || c.when(config)}<Control control={c} />{/if}
      {/each}
    </div>
  {/if}
</details>
