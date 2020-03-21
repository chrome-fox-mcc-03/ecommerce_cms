import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

/*
  Vuex action -> ASYNC
  MUTATION -> ngubah state
  state -> data
*/
export default new Vuex.Store({
  state: {
    products: [],
    loginStatus: false,
    loading: false,
    errors: false,
    success: false
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_LOGIN_STATUS (state) {
      if (localStorage.getItem('access_token')) {
        state.loginStatus = true
      } else {
        state.loginStatus = false
        localStorage.clear()
      }
    },
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    SET_ERRORS (state, payload) {
      state.errors = payload.status
      setTimeout(() => {
        state.errors = false
      }, 1500)
    },
    SET_SUCCESS (state, payload) {
      state.success = payload
      setTimeout(() => {
        state.success = false
      }, 1500)
    }
  },
  actions: {
    onLogin ({ dispatch, commit }, { email, password }) {
      commit('SET_LOADING', true)
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: email,
          password: password
        }
      })
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          commit('SET_LOGIN_STATUS')
          commit('SET_SUCCESS', true)
          commit('SET_ERRORS', { status: false })
          dispatch('onFetchProduct')
          router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err)
          commit('SET_SUCCESS', false)
          commit('SET_ERRORS', { status: true, data: err })
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    onRegister ({ dispatch, commit }, { email, password }) {
      commit('SET_LOADING', true)
      axios({
        method: 'POST',
        url: 'http://localhost:3000/register',
        data: {
          email: email,
          password: password,
          role: 'admin'
        }
      })
        .then((response) => {
          router.push('/')
        })
        .catch((err) => {
          commit('SET_ERRORS', { status: true, data: err })
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    onAddProduct ({ dispatch, commit }, { name, imageUrl, price, stock }) {
      commit('SET_LOADING', true)
      axios({
        method: 'POST',
        url: 'http://localhost:3000/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          imageUrl,
          price,
          stock
        }
      })
        .then((response) => {
          router.push('/dashboard/products')
        }).catch((err) => {
          commit('SET_ERRORS', { status: true, data: err })
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    onFetchProduct ({ dispatch, commit }) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('SET_PRODUCTS', data.result)
        }).catch((err) => {
          commit('SET_ERRORS', { status: true, data: err })
        })
    },
    onEditProduct ({ dispatch, commit }, { id, name, imageUrl, price, stock }) {
      axios({
        method: 'PUT',
        url: `http://localhost:3000/product/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          imageUrl,
          price,
          stock
        }
      })
        .then((response) => {
          dispatch('onFetchProduct')
        }).catch((err) => {
          commit('SET_ERRORS', { status: true, data: err })
        })
    },
    onDeleteProduct ({ dispatch, commit }, { id }) {
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/product/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((response) => {
          dispatch('onFetchProduct')
        }).catch((err) => {
          commit('SET_ERRORS', { status: true, data: err })
        })
    },
    onLogoutProcess ({ dispatch, commit }) {
      localStorage.clear()
      commit('SET_LOGIN_STATUS')
      router.push('/')
    }
  },
  getters: {}
})
