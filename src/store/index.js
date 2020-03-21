import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isLoading: false,
    products: [],
    product: {},
    users: [],
    isError: false,
    errors: []
  },
  mutations: {
    SET_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_LOADING (state, payload) {
      state.isLoading = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_PRODUCT (state, payload) {
      state.product = payload
    },
    SET_USERS (state, payload) {
      state.users = payload
    },
    SET_ERROR (state, payload) {
      state.isError = payload
    },
    SET_ERRORS (state, payload) {
      state.errors = payload
    }
  },
  actions: {
    getProducts ({ commit }, payload) {
      commit('SET_LOADING', true)
      axios({
        method: 'get',
        url: 'https://still-plains-85177.herokuapp.com/products',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_PRODUCTS', data.data)
        })
        .catch((err) => {
          commit('SET_ERROR', true)
          commit('SET_ERRORS', err.response.data.errors)
        })
        .finally((_) => {
          commit('SET_LOADING', false)
        })
    },
    getUsers ({ commit }, payload) {
      commit('SET_LOADING', true)
      axios({
        method: 'get',
        url: 'https://still-plains-85177.herokuapp.com/admin/users',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_USERS', data.data)
        })
        .catch((err) => {
          commit('SET_ERROR', true)
          commit('SET_ERRORS', err.response.data.errors)
        })
        .finally((_) => {
          commit('SET_LOADING', false)
        })
    },
    login ({ dispatch, commit }, payload) {
      commit('SET_LOADING', true)
      axios({
        method: 'post',
        url: 'https://still-plains-85177.herokuapp.com/admin/login',
        data: payload
      })
        .then(({ data }) => {
          commit('SET_ERROR', false)
          commit('SET_ERRORS', [])
          const token = data.token
          localStorage.setItem('token', token)
          router.push('/dashboard')
          commit('SET_LOGIN', true)
          dispatch('getProducts')
          dispatch('getUsers')
        })
        .catch((err) => {
          commit('SET_ERROR', true)
          commit('SET_ERRORS', err.response.data.errors)
        })
        .finally((_) => {
          commit('SET_LOADING', false)
        })
    },
    createProduct ({ dispatch, commit }, payload) {
      commit('SET_LOADING', true)
      axios({
        method: 'post',
        url: 'https://still-plains-85177.herokuapp.com/products',
        headers: {
          token: localStorage.getItem('token')
        },
        data: payload
      })
        .then(({ data }) => {
          commit('SET_ERROR', false)
          commit('SET_ERRORS', [])
          dispatch('getProducts')
          router.push('/products')
        })
        .catch((err) => {
          commit('SET_ERROR', true)
          commit('SET_ERRORS', err.response.data.errors)
        })
        .finally((_) => {
          commit('SET_LOADING', false)
        })
    },
    getDetailProduct ({ commit }, payload) {
      commit('SET_LOADING', true)
      const id = payload
      axios({
        method: 'get',
        url: `https://still-plains-85177.herokuapp.com/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_PRODUCT', data.data)
        })
        .catch((err) => {
          commit('SET_ERROR', true)
          commit('SET_ERRORS', err.response.data.errors)
        })
        .finally((_) => {
          commit('SET_LOADING', false)
        })
    },
    editProduct ({ dispatch, commit }, payload) {
      commit('SET_LOADING', true)
      const id = payload.id
      axios({
        method: 'put',
        url: `https://still-plains-85177.herokuapp.com/products/${id}`,
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
        .then(({ data }) => {
          dispatch('getProducts')
          router.push(`/products/${id}`)
        })
        .catch((err) => {
          commit('SET_ERROR', true)
          commit('SET_ERRORS', err.response.data.errors)
        })
        .finally((_) => {
          commit('SET_LOADING', false)
        })
    },
    deleteProduct ({ dispatch, commit }, payload) {
      commit('SET_LOADING', true)
      const id = payload
      axios({
        method: 'delete',
        url: `https://still-plains-85177.herokuapp.com/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          dispatch('getProducts')
          router.push('/products')
        })
        .catch((err) => {
          commit('SET_ERROR', true)
          commit('SET_ERRORS', err.response.data.errors)
        })
        .finally((_) => {
          commit('SET_LOADING', false)
        })
    }
  },
  getters: {}
})
