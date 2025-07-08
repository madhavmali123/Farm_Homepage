import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Tailwind doesn't need to be in plugins
export default defineConfig({
  plugins: [react()],
})
