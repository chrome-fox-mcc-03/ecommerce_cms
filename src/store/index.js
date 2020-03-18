import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    isLoading: false
  },
  mutations: {
    SET_ISLOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_ISLOADING (state, payload) {
      state.isLoading = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    }
  },
  getters: {},
  actions: {
    getProducts (context, payload) {
      context.commit('SET_ISLOADING', true)
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          context.commit('SET_PRODUCTS', [...response.data.response])
        })
        .catch(err => {
          console.log(err.response)
        })
        .finally(_ => {
          context.commit('SET_ISLOADING', false)
        })
    },
    getProductData (id) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          console.log(response);
        })
        .catch(err => [
          console.log(err.response)
        ])
    }
  }
})
