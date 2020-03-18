import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isLoading: false,
    successObj: {},
    errorObj: {}
  },
  mutations: {
    SET_ISLOGIN (state, payload) {
      state.isLogin = payload
    },
    TOGGLE_ISLOADING (state, _) {
      state.isLoading = !state.isLoading
    },
    SET_ERROROBJ (state, payload) {
      state.errorObj = payload
    },
    SET_SUCCESSOBJ (state, payload) {
      state.successObj = payload
    }
  },
  actions: {
    checkLoginState (context, _) {
      const token = localStorage.getItem('token')

      if (token) context.commit('SET_ISLOGIN', true)
    },
    login (context, payload) {
      context.commit('TOGGLE_ISLOADING')
      const { email, password } = payload

      Axios({
        method: 'POST',
        url: 'http://localhost:3000/admin/login',
        data: {
          email,
          password
        }
      })
        .then(response => {
          const { token, name } = response.data

          localStorage.setItem('token', token)
          localStorage.setItem('name', name)

          context.commit('SET_ISLOGIN', true)

          context.commit('SET_SUCCESSOBJ', { message: 'You successfully logged in!' })
        })
        .catch(err => {
          console.log('[ERROR] Authentication fail!')
          context.commit('SET_ERROROBJ', err.response.data)
        })
        .finally(() => {
          context.commit('TOGGLE_ISLOADING')
        })
    },
    logout (context, _) {
      localStorage.clear()
      context.commit('SET_ISLOGIN', false)
    },
    register (context, payload) {
      const { name, email, password } = payload

      Axios({
        method: 'POST',
        url: 'http://localhost:3000/admin/register',
        data: {
          name,
          email,
          password
        }
      })
        .then(response => {
          const { token, name } = response.data

          localStorage.setItem('token', token)
          localStorage.setItem('name', name)

          context.commit('SET_ISLOGIN', true)

          context.commit('SET_SUCCESSOBJ', { message: 'You successfully logged in!' })
        })
        .catch(err => {
          context.commit('SET_ERROROBJ', err.response.data)
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  getters: {

  }
})
