import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formLogin: true
  },
  mutations: {
    changeForm (state) {
      console.log(state.formLogin)
      state.formLogin = !state.formLogin
    }
  },
  actions: {
  },
  getters: {
  }
})
