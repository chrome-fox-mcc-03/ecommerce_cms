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
    loadingCard: false,
    error: ''
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
    },
    SET_ERROR (state, payload) {
      state.error = payload
    }
  },
  actions: {
    fecthData ({ commit }) {
      return axios({
        method: 'get',
        url: 'https://pure-lake-24201.herokuapp.com/product',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => {
          commit('SET_DATA', data.data)
        })
        .catch(err => {
          commit('SET_ERROR', err)
        })
    },
    fecthHistory ({ commit }) {
      return axios({
        method: 'get',
        url: 'https://pure-lake-24201.herokuapp.com/history',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => {
          commit('SET_HISTORY', data)
        })
        .catch(err => {
          commit('SET_ERROR', err)
        })
    },
    deleted ({ commit }, id) {
      commit('SET_LOADING', 'start')
      return axios({
        method: 'delete',
        url: `https://pure-lake-24201.herokuapp.com/product/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    edit ({ commit }, payload) {
      commit('SET_LOADING', true)
      return axios({
        method: 'patch',
        url: `https://pure-lake-24201.herokuapp.com/product/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          description: payload.description,
          price: payload.price,
          stock: payload.stock,
          url: payload.url
        }
      })
    },
    addProduct ({ commit }, payload) {
      return axios({
        method: 'post',
        url: 'https://pure-lake-24201.herokuapp.com/product',
        data: {
          name: payload.name,
          description: payload.description,
          price: payload.price,
          stock: payload.stock,
          url: payload.url
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    login ({ commit }, payload) {
      return axios({
        url: 'https://pure-lake-24201.herokuapp.com/login',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    register ({ commit }, payload) {
      return axios({
        url: 'https://pure-lake-24201.herokuapp.com/register',
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
