import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  babel: {
    presets: [
      ['@babel/preset-env', { loose: true, modules: false }],
      '@babel/preset-react', // Include the @babel/preset-react preset
    ],
  },
})
