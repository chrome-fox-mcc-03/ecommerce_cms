import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const baseUrl = 'http://54.169.90.72'
// const baseUrl = 'http://localhost:3000'
export default new Vuex.Store({
  state: {
    isLoading: false,
    isLogin: false,
    products: [],
    product: {},
    profile: {}
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.isLoading = payload
    },
    SET_PRODUCT (state, payload) {
      state.products = payload
    },
    SET_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_PRODUCT_DETAIL (state, payload) {
      state.product = payload
    },
    SET_PROFILE (state, payload) {
      state.profile = payload
    }
  },
  actions: {
    getProducts ({ commit }) {
      commit('SET_LOADING', true)
      axios({
        method: 'get',
        url: baseUrl + '/products',
        headers: {
          token: localStorage.token
        }
      })
        .then(response => {
          commit('SET_PRODUCT', response.data.data)
        })
        .catch(err => {
          this.$toasted.error(err.response.data.message, {
            position: 'bottom-center'
          })
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    login (_, payload) {
      return axios({
        method: 'POST',
        url: baseUrl + '/admin/login',
        data: payload
      })
    },
    addProd (_, payload) {
      return axios({
        method: 'POST',
        url: baseUrl + '/products',
        headers: {
          token: localStorage.getItem('token')
        },
        data: payload
      })
    },
    deleteProd (_, payload) {
      return axios({
        method: 'DELETE',
        url: baseUrl + `/products/${payload}`,
        headers: {
          token: localStorage.token
        }
      })
    },
    detailProduct (_, payload) {
      return axios({
        method: 'GET',
        url: baseUrl + `/products/${payload}`,
        headers: {
          token: localStorage.token
        }
      })
    },
    editProduct (_, payload) {
      return axios({
        method: 'PUT',
        url: baseUrl + `/products/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: payload.data
      })
    }
  },
  getters: {

  }
})
