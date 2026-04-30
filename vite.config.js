import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages: set VITE_BASE=/repo-name/ in CI. Cloudflare Pages custom domain uses "/".
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  server: {
    fs: {
      allow: [path.resolve(process.cwd(), '..')],
    },
  },
})
