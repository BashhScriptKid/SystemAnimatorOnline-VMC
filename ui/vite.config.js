import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// Builds the Svelte UI as a single classic (IIFE) script that auto-mounts into
// #XRA_SVELTE, so the existing classic <script src> loading model can pull it in.
export default defineConfig({
  plugins: [svelte()],
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
