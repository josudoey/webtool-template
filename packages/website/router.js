import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'

Vue.use(Router)
export function createRouter () {
  const router = new Router({
    mode: 'hash',
    base: '/',
    linkActiveClass: 'active',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      return { x: 0, y: 0 }
    },
    routes
  })

  return router
}
