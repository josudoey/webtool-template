import Vue from 'vue'
import Outlet from './outlet/index.js'
import { createRouter } from './router.js'

export function createApp () {
  const app = new Vue({
    router: createRouter(),
    ...Outlet
  })

  return app
}
