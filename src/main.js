import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCurrencyFilter from 'vue-currency-filter'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(VueCurrencyFilter,
  {
    symbol: 'Rp',
    thousandsSeparator: '.',
    fractionCount: 0,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
