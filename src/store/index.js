import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../api/axiosInstance'
import M from 'materialize-css'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    items: []
  },
  mutations: {
    SET_LOADING (state) {
      state.isLoading = !state.isLoading
    },
    SUCCESS (state, payload) {
      M.toast({
        html: `<span>${payload}</span>`,
        classes: 'large green rounded',
        displayLength: 3000
      })
    },
    ERROR (state, payload) {
      M.toast({
        html: `<span>${payload}</span>`,
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
    }
  },
  getters: {
  }
})
