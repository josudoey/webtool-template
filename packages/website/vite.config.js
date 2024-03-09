import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import PugHotReload from './vite.pug.hot.reload.js'

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
      vue(),
      PugHotReload()
    ],
    server: {
      port: 8080
    }
  }
})
