import Vue from 'vue'
import { Portal, PortalTarget } from 'portal-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { createApp } from './app.js'

Vue.component('Portal', Portal)
Vue.component('PortalTarget', PortalTarget)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
const app = window.app = createApp()
app.$mount('#app')
