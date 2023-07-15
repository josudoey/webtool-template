import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// ref https://vitejs.dev/guide/#trying-vite-online
export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        vue: '@vue/compat'
      }
    },
    plugins: [
      vue()
    ],
    server: {
      port: 8080
    }
  }
})
