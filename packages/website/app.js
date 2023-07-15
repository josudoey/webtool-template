import { createApp as createVueApp } from 'vue'
import Outlet from './outlet/component.vue'
import { createRouter } from './router.js'

export function createApp () {
  const router = createRouter()
  const app = createVueApp({
    ...Outlet
  })

  app.use(router)
  return app
}
