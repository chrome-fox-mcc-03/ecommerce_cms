import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formLogin: true,
    isLogin: false,
    isLoading: false,
    redirectLogo: '/',
    name: '',
    totalSale: 0,
    totalVisit: 0,
    products: [],
    error: '',
    productEdit: {}
  },
  mutations: {
    CHANGE_FORM (state) {
      state.formLogin = !state.formLogin
    },
    SET_USER (state) {
      state.name = localStorage.name
    },
    SET_LOADING (state) {
      state.isLoading = !state.isLoading
    },
    SET_LOGIN (state) {
      state.isLogin = !state.isLogin
    },
    CHANGE_LINK_LOGO (state, link) {
      state.redirectLogo = link
    },
    LOGOUT (state) {
      state.isLogin = false
      state.name = ''
      state.role = ''
      localStorage.clear()
      router.push('/')
    },
    SET_PRODUCT (state, products) {
      state.products = products
    },
    ADD_PRODUCT (state, product) {
      state.products.push(product)
    },
    SET_ERROR (state, error) {
      state.error = error
    },
    SET_EDIT_PRODUCT (state, product) {
      state.productEdit = product
    }
  },
  actions: {
    register ({ state, commit }, data) {
      commit('SET_LOADING')
      commit('SET_USER', { name: data.name, role: data.role })
      const { name, email, password } = data
      axios({
        method: 'post',
        url: 'http://localhost:3000/user/register',
        data: {
          name,
          email,
          password
        }
      })
        .then(({ data }) => {
          localStorage.token = data.access_token
          localStorage.name = data.name
          commit('SET_LOGIN')
          commit('CHANGE_LINK_LOGO', '/dashboard')
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          commit('SET_LOADING')
        })
    },
    login ({ commit }, data) {
      commit('SET_LOADING')
      const { email, password } = data
      axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data: {
          email,
          password
        }
      })
        .then(({ data }) => {
          localStorage.token = data.access_token
          localStorage.name = data.name
          commit('SET_LOGIN')
          commit('SET_USER')
          if (data.role === 'customer') {
            commit('CHANGE_LINK_LOGO', '/dashboard')
            router.push('/dashboard')
          } else {
            commit('CHANGE_LINK_LOGO', '/store')
            router.push('/store')
          }
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          commit('SET_LOADING')
        })
    },
    getProducts ({ commit }) {
      commit('SET_LOADING')
      axios({
        method: 'get',
        url: 'http://localhost:3000/product',
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          commit('SET_PRODUCT', data)
        })
        .catch(err => console.log(err))
        .finally(_ => {
          commit('SET_LOADING')
        })
    },
    createProduct ({ commit }, data) {
      commit('SET_LOADING')
      axios({
        method: 'post',
        url: 'http://localhost:3000/product',
        headers: {
          token: localStorage.token
        },
        data
      })
        .then(({ data }) => {
          commit('ADD_PRODUCT', data)
          router.push(`/store/product/${data.id}`)
        })
        .catch(err => {
          commit('SET_ERROR')
          console.log(err)
        })
        .finally(_ => {
          commit('SET_LOADING')
        })
    },
    editProduct ({ commit, dispatch }, data) {
      commit('SET_LOADING')
      axios({
        method: 'patch',
        url: `http://localhost:3000/product/${data.id}`,
        headers: {
          token: localStorage.token
        },
        data
      })
        .then(_ => {
          dispatch('getProducts')
          router.push(`/store/product/${data.id}`)
        })
        .catch(err => {
          commit('SET_ERROR')
          console.log(err)
        })
        .finally(_ => {
          commit('SET_LOADING')
        })
    },
    deleteProduct ({ commit }, id) {
      commit('SET_LOADING')
      axios({
        method: 'delete',
        url: `http://localhost:3000/product/${id}`,
        headers: {
          token: localStorage.token
        }
      })
        .then(_ => router.push('/store/product'))
        .catch(err => {
          commit('SET_ERROR')
          console.log(err)
        })
        .finally(_ => commit('SET_LOADING'))
    }
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => Number(product.id) === Number(id))
    }
  }
})
