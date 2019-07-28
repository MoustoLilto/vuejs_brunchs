import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: "#000000",
    secondary: "#FFA000",
    background: "#ECEFF1",
    error: "#B71C1C"
  }
})