import { inject, defineComponent } from 'vue'

import {
  VApp,
  VAppBarNavIcon,
  VNavigationDrawer,
  VAppBar,
  VAppBarTitle,
  VMain,
  VBtn,
  VListItem
} from 'vuetify/components'

const components = {
  VBtn
}

function setup () {
  const AppTitle = inject('AppTitle')
  const toggle = inject('drawerToggle')
  const opened = inject('drawerOpened')
  AppTitle.value = 'JSX'
  return { AppTitle, toggle, opened }
}

function render (props) {
  const { toggle, opened } = props
  let ToggleBtn
  if (opened) {
    ToggleBtn = <VBtn onClick={toggle}>Close</VBtn>
  } else {
    ToggleBtn = <VBtn onClick={toggle}>Open</VBtn>
  }

  return (
    <ToggleBtn></ToggleBtn>
  )
}

export default {
  render,
  setup
}
