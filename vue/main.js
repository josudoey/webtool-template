import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuetify } from 'vuetify'

import routes from './routes.js'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.min.css'

const router = createRouter({
  history: createWebHashHistory(),
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

const app = window.app = createApp({})
const vuetify = createVuetify({})
app.use(vuetify)
app.use(router)
const div = document.createElement('div')
div.appendChild(document.createElement('router-view'))
document.body.appendChild(div)

app.mount(div)
