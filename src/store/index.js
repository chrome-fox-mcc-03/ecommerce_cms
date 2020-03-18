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
    }
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
    }
  },
  actions: {
    login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        client.post('/login', data)
          .then(response => {
            localStorage.setItem('access_token', response.data.access_token)
            commit('LOGIN', response.data)
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
    }
  },
  getters: {
    isLogin (state) {
      return !!state.access_token
    }
  }
})

export default store
