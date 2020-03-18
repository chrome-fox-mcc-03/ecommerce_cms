import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueToastify from 'vue-toastify'
import store from './store'
Vue.config.productionTip = false
Vue.use(VueToastify, {
  errorDuration: 2000,
  succesDuration: 2000,
  theme: 'light',
  position: 'bottom-center'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
