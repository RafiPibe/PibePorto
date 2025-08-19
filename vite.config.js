// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Import tailwind and autoprefixer
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), 
        autoprefixer()
      ],
    },
  },
})