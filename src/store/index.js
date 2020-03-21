import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    history: [],
    message: [],
    loading: '',
    loadingCard: false
  },
  mutations: {
    SET_DATA (state, payload) {
      state.data = payload
    },
    SET_HISTORY (state, payload) {
      state.history = payload
    },
    SET_MESSAGE (state, payload) {
      state.message = payload
    },
    SET_LOADING (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    fecthData ({ commit }) {
      return axios({
        method: 'get',
        url: 'http://localhost:3000/product',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => {
          console.log(data.data)
          commit('SET_DATA', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fecthHistory ({ commit }) {
      return axios({
        method: 'get',
        url: 'http://localhost:3000/history',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => {
          commit('SET_HISTORY', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleted ({ commit }, id) {
      commit('SET_LOADING', 'start')
      return axios({
        method: 'delete',
        url: `http://localhost:3000/product/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => {
          commit('SET_LOADING', 'success')
        })
        .catch(err => {
          commit('SET_MESSAGE', err.response.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', 'error')
        })
    },
    edit ({ commit }, payload) {
      commit('SET_LOADING', true)
      const price = payload.price.match(/[0-9]/g).join('')
      const stock = payload.stock.match(/[0-9]/g).join('')
      return axios({
        method: 'patch',
        url: `http://localhost:3000/product/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          description: payload.description,
          price: +price,
          stock: +stock,
          url: payload.url
        }
      })
    },
    addProduct ({ commit }, payload) {
      const price = payload.price.match(/[0-9]/g).join('')
      const stock = payload.stock.match(/[0-9]/g).join('')
      return axios({
        method: 'post',
        url: 'http://localhost:3000/product',
        data: {
          name: payload.name,
          description: payload.description,
          price: +price,
          stock: +stock,
          url: payload.url
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    login ({ commit }, payload) {
      return axios({
        url: 'http://localhost:3000/login',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    register ({ commit }, payload) {
      return axios({
        url: 'http://localhost:3000/register',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    }
  },
  modules: {
  }
})
