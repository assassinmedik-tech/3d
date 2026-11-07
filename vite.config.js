import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    target: 'es2020',
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
})
