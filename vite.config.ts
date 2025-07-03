import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.svg'] // Add .svg here
  },
  build: {
    target: ['chrome100', 'es2020'],
    manifest: true,
    outDir: './dist',
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
})
