import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/WeWeb/' : '/',

  resolve: {
    alias: {
      '@packages/ui': path.resolve(__dirname, '../Monorepo/packages/ui/src'),
      '@packages/utils': path.resolve(__dirname, '../Monorepo/packages/utils/src'),
      '@framework/utils': path.resolve(__dirname, '../Monorepo/packages/utils/src'),
      '@': path.resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    exclude: ['@packages/ui', '@packages/utils']
  },
  server: {
    watch: {
      usePolling: true
    }
  }
}))
