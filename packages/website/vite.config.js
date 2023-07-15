import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// ref https://vitejs.dev/guide/#trying-vite-online
export default defineConfig(() => {
  return {
    base: './',
    build: {
      rollupOptions: {
        // ref https://rollupjs.org/configuration-options/#output-chunkfilenames
        output: {
          dir: 'dist',
          chunkFileNames: 'assets/[hash].js'
        }
      }
    },
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
