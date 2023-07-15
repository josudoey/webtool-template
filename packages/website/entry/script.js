import Vue from 'vue'
import { Portal, PortalTarget } from 'portal-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import { createApp } from '../app.js'

Vue.component('Portal', Portal)
Vue.component('PortalTarget', PortalTarget)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
const app = window.app = createApp()

app.mount('#app')
