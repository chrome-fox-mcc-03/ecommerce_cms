import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    access_token: localStorage.getItem('access_token') || '',
    user: {
      id: '',
      name: '',
      email: '',
      role: ''
    },
    products: []
  },
  mutations: {
    LOGIN (state, data) {
      state.access_token = data.access_token
      state.user = data.user
    },
    LOGOUT (state) {
      state.access_token = ''
      state.user = {
        id: '',
        name: '',
        email: '',
        role: ''
      }
      localStorage.clear()
    },
    SET_PRODUCTS (state, data) {
      state.products = data
    }
  },
  actions: {
    login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        client.post('/login', data)
          .then(({ data }) => {
            console.log(data)
            localStorage.setItem('access_token', data.access_token)
            commit('LOGIN', data)
            resolve('/')
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve) => {
        commit('LOGOUT')
        resolve('/login')
      })
    },
    getProducts ({ commit, state }) {
      client.get('/products', {
        headers: {
          access_token: state.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          commit('SET_PRODUCTS', data.products)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    isLogin (state) {
      return !!state.access_token
    }
  }
})

export default store
