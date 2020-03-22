import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueToastify from 'vue-toastify'
import router from '../router/index.js'

Vue.use(VueToastify, {
  errorDuration: 2000,
  theme: 'dark',
  position: 'bottom-right'
})
Vue.use(Vuex)

const alert = new Vue()

const localhost = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    products: [],
    isLoading: false,
    updating: {}
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_LOADING (state, payload) {
      state.isLoading = payload
    },
    SET_UPDATING (state, payload) {
      state.updating = payload
      router.push(`/update/${payload.id}`)
    }
  },
  actions: {
    login: function ({ commit }, loginData) {
      commit('SET_LOADING', true)
      axios({
        method: 'POST',
        url: `${localhost}/login`,
        data: {
          email: loginData.email,
          password: loginData.password
        }
      })
        .then(response => {
          console.log(response)
          localStorage.setItem('token', response.data.token)
          router.push('/')
        })
        .catch(err => {
          // console.log(err)
          alert.$vToastify.error({
            title: 'Error',
            body: err.response.data
          })
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    getProducts: function ({ commit }) {
      commit('SET_LOADING', true)
      axios({
        method: 'GET',
        url: `${localhost}/products/read`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          console.log(response)
          commit('SET_PRODUCTS', response.data)
        })
        .catch(err => {
          alert.$vToastify.error({
            title: 'Error',
            body: err.response.data
          })
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    getUpdatePage: function ({ commit }, product) {
      commit('SET_UPDATING', product)
    },
    createItem: function ({ commit, dispatch }, product) {
      axios({
        method: 'POST',
        url: `${localhost}/products/create`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: product.name,
          image_url: product.image_url,
          price: product.price,
          stock: product.stock
        }
      })
        .then(response => {
          console.log(response.data)
          alert.$vToastify.success({
            title: 'Success',
            body: `${response.data.name} created`
          })
          dispatch('getProducts')
        })
        .catch(err => {
          alert.$vToastify.error({
            title: 'Error',
            body: err.response.data
          })
        })
    },
    updateItem: function ({ commit }, product) {
      axios({
        method: 'PUT',
        url: `${localhost}/products/update/${product.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: product.name,
          image_url: product.image_url,
          price: product.price,
          stock: product.stock
        }
      })
        .then(response => {
          alert.$vToastify.success({
            title: 'Success',
            body: `${response.data.name} updated`
          })
          commit('SET_UPDATING', {})
          router.push('/')
        })
        .catch(err => {
          alert.$vToastify.error({
            title: 'Error',
            body: err.response.data
          })
        })
    },
    deleteItem: function ({ commit, dispatch }, product) {
      axios({
        method: 'DELETE',
        url: `${localhost}/products/delete/${product.id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          console.log(response)
          alert.$vToastify.success({
            title: 'Success',
            body: `${product.name} deleted`
          })
          dispatch('getProducts')
        })
        .catch(err => {
          console.log(err.response)
          alert.$vToastify.error({
            title: 'Error',
            body: err.response.data
          })
        })
    }
  },
  modules: {
  }
})
