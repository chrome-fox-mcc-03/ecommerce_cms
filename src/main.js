import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/bootstrap/css/bootstrap.min.css';
import Vue from 'vue';
import VModal from 'vue-js-modal';
import Toasted from 'vue-toasted';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Toasted);
Vue.use(Loading);

Vue.config.productionTip = false;
Vue.use(VModal, { dialog: true });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
