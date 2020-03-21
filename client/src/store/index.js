import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productsById: [],
    isLoading: false
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_LOADING (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    login: function (state, payload) {
      return axios({
        method: 'post',
        url: 'https://morning-citadel-50263.herokuapp.com/admins/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    getProducts ({ commit }) {
      commit('SET_LOADING', true)
      axios({
        method: 'get',
        url: 'https://morning-citadel-50263.herokuapp.com/products',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_PRODUCTS', data)
        })
        .catch(error => {
          this.$toasted.error(error.response.data)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    createProduct (state, payload) {
      return axios({
        method: 'post',
        url: 'https://morning-citadel-50263.herokuapp.com/products',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    getProductById (state, id) {
      return axios({
        method: 'get',
        url: `https://morning-citadel-50263.herokuapp.com/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    editProductById (state, payload) {
      return axios({
        method: 'put',
        url: `https://morning-citadel-50263.herokuapp.com/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          image_url: payload.img_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    deleteProductById (state, payload) {
      return axios({
        method: 'delete',
        url: `https://morning-citadel-50263.herokuapp.com/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  },
  getters: {}
})
