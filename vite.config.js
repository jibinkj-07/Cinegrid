import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ], server: {
    host: '0.0.0.0', // allows access from any device on the same network
  }, css: {
    postcss: './postcss.config.js', // Optional, Vite auto-detects postcss.config.js
  },
  preview: {
    allowedHosts: ['cinegrid.onrender.com', 'localhost'], // Add your Render domain here
  },
})
