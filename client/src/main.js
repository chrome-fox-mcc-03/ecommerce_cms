import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Notifications from 'vue-notification'
import velocity from 'velocity-animate'
Vue.config.productionTip = false
Vue.use(Notifications, { velocity })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
