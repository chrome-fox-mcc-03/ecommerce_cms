import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    isLoading: false
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_ISLOADING (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    addAdmin ({ commit }, payload) {
      commit('SET_ISLOADING', true)
      return axios({
        method: 'post',
        url: 'http://localhost:3000/users/register',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password,
          role: 'Admin'
        }
      })
    },
    login ({ commit, state, dispatch }, payload) {
      commit('SET_ISLOADING', true)
      return axios({
        method: 'post',
        url: 'http://localhost:3000/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    getProducts ({ commit }) {
      commit('SET_ISLOADING', true)
      axios({
        method: 'get',
        url: 'http://localhost:3000/products'
      })
        .then(response => {
          const {
            data
          } = response
          commit('SET_PRODUCTS', [...data])
        })
        .catch(err => {
          console.log(err)
          this.$toasted.info('tes yaa')
        })
        .finally(_ => {
          commit('SET_ISLOADING', false)
        })
    },
    addProduct ({ commit }, payload) {
      commit('SET_ISLOADING', true)
      if (payload.category !== 'Lokal' || payload.category !== 'Import') {
        payload.category = 'Other'
      }
      return axios({
        method: 'post',
        url: 'http://localhost:3000/products',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category,
          description: payload.description
        }
      })
    },
    getById ({ commit, dispatch }, payload) {
      commit('SET_ISLOADING', true)
      return axios({
        method: 'get',
        url: `http://localhost:3000/products/${payload}`
      })
    },
    getByCategory ({ commit, dispatch }, payload) {
      commit('SET_ISLOADING', true)
      axios({
        method: 'get',
        url: `http://localhost:3000/products/category/${payload}`
      })
        .then(response => {
          const {
            data
          } = response
          commit('SET_PRODUCTS', [...data])
        })
        .catch(err => {
          console.log(err)
          this.$toasted.error('tes yaa')
        })
        .finally(_ => {
          commit('SET_ISLOADING', false)
        })
    },
    editProduct ({ commit }, payload) {
      commit('SET_LOADING', true)
      console.log(payload)
      if (payload.category !== 'Lokal' || payload.category !== 'Import') {
        payload.category = 'Other'
      }
      if (payload.stock < 1 || typeof payload.stock !== 'number') payload.stock = 0
      const { id, name, imageUrl, price, stock, category, description } = payload
      console.log(payload)
      return axios({
        method: 'put',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name, image_url: imageUrl, price, stock, category, description
        }
      })
    },
    deleteProduct ({ commit }, payload) {
      commit('SET_ISLOADING', true)
      return axios({
        method: 'delete',
        url: `http://localhost:3000/products/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  },
  getters: {}
})
