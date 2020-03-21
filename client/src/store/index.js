import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    isLoading: false
  },
  mutations: {
    SET_ITEMS (state, payload) {
      state.items = payload
    },
    SET_ISLOADING (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      return axios({
        method: 'POST',
        url: 'https://evening-mesa-91440.herokuapp.com/login',
        data: {
          email,
          password
        }
      })
    },
    getProduct ({ commit }, payload) {
      commit('SET_ISLOADING', true)
      const token = localStorage.getItem('token')
      axios({
        method: 'GET',
        url: 'https://evening-mesa-91440.herokuapp.com/product',
        headers: {
          token
        }
      })
        .then((result) => {
          commit('SET_ITEMS', result.data.result)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          commit('SET_ISLOADING', false)
        })
    },
    addProduct ({ commit }, payload) {
      commit('SET_ISLOADING', true)
      const { name, image, price, stock } = payload
      return axios({
        method: 'POST',
        url: 'https://evening-mesa-91440.herokuapp.com/product',
        data: {
          name,
          image_url: image,
          price,
          stock
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    getProductEdit ({ state, commit, dispatch }, payload) {
      commit('SET_ISLOADING', true)
      return axios({
        method: 'GET',
        url: `https://evening-mesa-91440.herokuapp.com/product/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    editProduct ({ commit }, payload) {
      commit('SET_ISLOADING', true)
      const { id, name, image, price, stock } = payload
      console.log(id)
      return axios({
        method: 'PUT',
        url: `https://evening-mesa-91440.herokuapp.com/product/${id}`,
        data: {
          name,
          image_url: image,
          price,
          stock
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    deleteProduct ({ commit }, payload) {
      commit('SET_ISLOADING', true)
      return axios({
        method: 'DELETE',
        url: `https://evening-mesa-91440.herokuapp.com/product/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  },
  getters: {}
})
