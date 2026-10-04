import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// Rollup/Vite hoist Svelte's internal runtime helpers (including a top-level
// `$`) above the entry wrapper, so a plain library build leaks them onto
// `window` when loaded as a classic <script>. A global `$` clobbers jQuery and
// breaks jThree's MMD loader (which calls `$. _data`), leaving the app stuck on
// "Loading avatar...". Wrap the whole chunk explicitly so nothing escapes.
function wrapIife() {
  return {
    name: 'xra-wrap-iife',
    generateBundle(_options, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type === 'chunk' && file.isEntry) {
          file.code = '(function(){\n' + file.code + '\n})();\n'
        }
      }
    }
  }
}

// Builds the Svelte UI as a single classic (IIFE) script that auto-mounts into
// #XRA_SVELTE, so the existing classic <script src> loading model can pull it in.
export default defineConfig({
  plugins: [svelte(), tailwindcss(), wrapIife()],
  build: {
    outDir: '../images/XR Animator/xra_ui',
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: 'src/main.js',
      name: 'XRA_UI',
      formats: ['iife'],
      fileName: () => 'xra-ui.js'
    }
  }
})
