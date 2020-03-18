import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SET_IS_LOGIN  (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    registerOn (context, payload) {
      return axios({
        url: 'http://localhost:3000/register',
        method: 'POST',
        data: payload
      })
    },
    loginOn (context, payload) {
      return axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: payload
      })
    },
    fetchProducts (context, payload) {
      return axios({
        url: 'http://localhost:3000/products',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
    }
  },
  modules: {
  }
})
