<script>
  let status = $state(null)
  let err = $state('')

  function refresh() {
    err = ''
    try {
      const b = window.SA_bridge && window.SA_bridge.backend
      status = (b && typeof b.status === 'function') ? b.status() : null
      if (!status) err = 'SA_bridge.backend unavailable'
    } catch (e) { err = String(e) }
  }

  $effect(() => { refresh() })
</script>

<div class="xra-svelte-card">
  <strong>Svelte is mounted ✅</strong>
  <div class="xra-svelte-sub">backend status below:</div>
  {#if err}<div class="xra-svelte-err">{err}</div>{/if}
  {#if status}
    <pre class="xra-svelte-pre">{JSON.stringify(status, null, 1).slice(0, 400)}</pre>
  {/if}
  <button onclick={refresh}>Refresh</button>
</div>

<style>
  .xra-svelte-card {
    position: fixed; right: 12px; bottom: 12px; z-index: 100000;
    width: 280px; padding: 10px 12px; border-radius: 10px;
    background: rgba(20, 99, 74, .96); color: #eafff6;
    font: 12px/1.4 system-ui, sans-serif; box-shadow: 0 8px 30px rgba(0, 0, 0, .5);
  }
  .xra-svelte-sub { opacity: .8; margin: 4px 0; }
  .xra-svelte-err { color: #ffd0d0; }
  .xra-svelte-pre { max-height: 120px; overflow: auto; white-space: pre-wrap; word-break: break-all; margin: 6px 0; }
  button { background: #0b3b2c; color: #eafff6; border: 0; border-radius: 6px; padding: 4px 10px; cursor: pointer; }
</style>
