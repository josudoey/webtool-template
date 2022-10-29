import {
  VApp,
  VAppBarNavIcon,
  VNavigationDrawer,
  VListItem,
  VAppBar,
  VAppBarTitle,
  VBtn,
  VMain
} from 'vuetify/components'
import { provide, ref } from 'vue'
import * as render from './render.pug'

const components = {
  VApp,
  VAppBarNavIcon,
  VNavigationDrawer,
  VListItem,
  VAppBar,
  VAppBarTitle,
  VBtn,
  VMain
}

function setup () {
  const AppTitle = ref('')
  const opened = ref(false)
  const toggle = () => {
    opened.value = !opened.value
  }
  provide('drawerOpened', opened)
  provide('drawerToggle', toggle)
  provide('AppTitle', AppTitle)
  return {
    AppTitle,
    opened,
    toggle
  }
}

export default {
  ...render,
  components,
  setup
}
