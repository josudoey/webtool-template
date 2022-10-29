import {
  VBtn
} from 'vuetify/components'

import * as render from './render.pug'
import { inject } from 'vue'

const components = {
  VBtn
}

function setup () {
  const AppTitle = inject('AppTitle')
  const toggle = inject('drawerToggle')
  const opened = inject('drawerOpened')
  AppTitle.value = 'home'
  return { AppTitle, toggle, opened }
}

export default {
  ...render,
  components,
  setup
}
