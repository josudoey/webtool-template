import {
  VApp,
  VAppBarNavIcon,
  VNavigationDrawer,
  VAppBar,
  VAppBarTitle,
  VMain
} from 'vuetify/components'
import * as render from './render'

export default {
  ...render,
  components: {
    VApp,
    VAppBarNavIcon,
    VNavigationDrawer,
    VAppBar,
    VAppBarTitle,
    VMain
  },
  data () {
    return {
      drawer: false
    }
  },
  mounted () {},
  updated () {},
  methods: {}
}
