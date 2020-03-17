import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'uikit'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit-icons'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
