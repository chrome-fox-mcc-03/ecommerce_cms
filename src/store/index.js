import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../api/axiosInstance'
import M from 'materialize-css'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    items: [],
    categories: []
  },
  mutations: {
    LOADING (state) {
      state.isLoading = !state.isLoading
    },
    CATEGORIES (state, payload) {
      state.categories = payload.categories
    },
    ITEMS (state, payload) {
      state.items = payload.items
    },
    SUCCESS (state, payload) {
      M.toast({
        html: `<span>${payload}</span>`,
        classes: 'large green rounded',
        displayLength: 3000
      })
    },
    ERROR (state, payload) {
      let error = ''
      if (payload.data.response) error = payload.response.data.errors.split(',')
      else error = payload
      M.toast({
        html: `<span>${error}</span>`,
        classes: 'large red rounded',
        displayLength: 3000
      })
    }
  },
  actions: {
    login ({ commit }, payload) {
      return Axios({
        url: '/loginAdmin',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchItems ({ commit }) {
      commit('LOADING')
      Axios({
        url: '/items',
        method: 'GET'
      })
        .then(({ data }) => {
          console.log(data)
          commit('ITEMS', data)
        })
        .catch(err => commit('ERROR', `Something went wrong... ${err}`))
        .finally(() => commit('LOADING'))
    },
    fetchCategories ({ commit }) {
      Axios({
        url: '/categories',
        method: 'GET'
      })
        .then(({ data }) => {
          console.log(data)
          commit('CATEGORIES', { categories: data.categories })
        })
        .catch(err => commit('ERROR', `Something went wrong... ${err}`))
    },
    createItems (_, payload) {
      const { name, imageUrl, price, stock, CategoryId } = payload
      const token = localStorage.getItem('token')
      return Axios({
        url: '/items',
        method: 'POST',
        headers: { token },
        data: { name, imageUrl, price, stock, CategoryId }
      })
    }
  },
  getters: {
    getItemsByCategory: (state) => (CategoryId) => {
      console.log(CategoryId, 'dari getters')
      if (!CategoryId) return state.items
      else return state.items.filter(item => item.CategoryId === CategoryId)
    }
  }
})
