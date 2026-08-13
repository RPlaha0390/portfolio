import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// If you deploy to GitHub Pages as a *project* site (https://<user>.github.io/<repo>/),
// Vite needs to know the repo name so built asset URLs resolve correctly.
// The deploy workflow (.github/workflows/deploy.yml) sets this automatically at build time.
// For local dev this stays "/", so `npm run dev` always works without extra config.
const base = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
