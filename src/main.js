import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import SweetModal from 'sweet-modal-vue/src/plugin.js'
import store from './store'
// import Vuex from 'vuex'

require('./bootstrap')
// var slug = require('slug')
// Vue.use(Vuex)
Vue.use(SweetModal)
Vue.use(axios)
// axios.defaults.headers.common['ssk'] = 'a8ae58f0470acbfbe357d2c8b35a7ac4d17733c7'
// Vue.use(bootstrap)
Vue.config.productionTip = false

Vue.mixin({
  data () {
    return {
      baseUrl: 'http://api.vota-ng.org/api',
      pathOrigin: window.location.origin,
      managedUser: {}
    }
  },
  computed: {
    isLoggedIn: function () {
      const token = window.localStorage.getItem('utoken')
      if (token) {
        return true
      }
      return false
    }
  }
})

export const eventbus = new Vue()

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// window.isLoggedIn = this.isLoggedIn
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && vue.isLoggedIn === false) next({ name: 'Login' })
  else next()
})
