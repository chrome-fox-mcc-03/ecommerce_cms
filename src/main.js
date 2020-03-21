import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'uikit'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit-icons'
import '@intera/vue-zoom-on-hover'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
