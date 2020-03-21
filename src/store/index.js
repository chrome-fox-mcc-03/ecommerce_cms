import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../api/axiosInstance'
import M from 'materialize-css'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    items: [],
    item: {},
    categories: [],
    filterId: null
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
    ITEM (state, payload) {
      state.item = payload.item
    },
    SET_FILTERID (state, payload) {
      state.filterId = payload
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
    login (_, payload) {
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
          commit('ITEMS', data)
        })
        .catch(err => commit('ERROR', `Something went wrong... ${err}`))
        .finally(() => commit('LOADING'))
    },
    fetchOneItem ({ commit }, payload) {
      commit('LOADING')
      const { itemId } = payload
      Axios({
        url: `/items/${itemId}`,
        method: 'GET'
      })
        .then(({ data }) => {
          commit('ITEM', data)
        })
        .catch(err => commit('ERROR', err))
        .finally(() => commit('LOADING'))
    },
    fetchCategories ({ commit }) {
      Axios({
        url: '/categories',
        method: 'GET'
      })
        .then(({ data }) => {
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
    },
    editItem (_, payload) {
      const { id, name, imageUrl, price, stock, CategoryId } = payload
      const token = localStorage.getItem('token')
      return Axios({
        url: `/items/${id}/update`,
        method: 'PUT',
        headers: { token },
        data: { name, imageUrl, price, stock, CategoryId }
      })
    },
    deleteItem (_, payload) {
      const { itemId } = payload
      const token = localStorage.getItem('token')
      return Axios({
        url: `/items/${itemId}/delete`,
        method: 'DELETE',
        headers: { token }
      })
    }
  },
  getters: {
    getItemsByCategory: (state) => {
      if (!state.filterId) return state.items
      else return state.items.filter(item => item.CategoryId === state.filterId)
    }
  }
})
