import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@react-pdf-viewer/core', 
      '@react-pdf-viewer/default-layout', // Include this if you are using any specific layout
      'pdfjs-dist' // Ensure pdfjs-dist is also optimized if required
    ]
  }
})
