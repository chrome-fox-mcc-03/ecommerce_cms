import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    product: {},
    errorMessage: ''
  },
  mutations: {
    SET_IS_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_PRODUCT (state, payload) {
      state.product = payload
    },
    SET_ERROR_MESSAGE (state, payload) {
      state.errorMessage = payload
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
    },
    addProduct (context, payload) {
      return axios({
        url: 'http://localhost:3000/products',
        method: 'POST',
        data: payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    fetchOneProduct (context, productId) {
      axios({
        url: 'http://localhost:3000/products/' + productId,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_PRODUCT', data)
        })
        .catch(err => {
          console.log(err)
          context.commit('SET_ERROR_MESSAGE', err.response)
        })
    }
  },
  modules: {
  }
})
