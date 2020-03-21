import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formLogin: true,
    isLogin: false,
    isLoading: false,
    redirectLogo: '/',
    name: '',
    role: ''
  },
  mutations: {
    CHANGE_FORM (state) {
      state.formLogin = !state.formLogin
    },
    SET_USER (state, user) {
      state.name = user.name
      state.role = user.role
    },
    SET_LOADING (state) {
      state.isLoading = !state.isLoading
    },
    SET_LOGIN (state) {
      state.isLogin = !state.isLogin
    },
    CHANGE_LINK_LOGO (state, link) {
      state.redirectLogo = link
    },
    LOGOUT (state) {
      state.isLogin = false
      state.name = ''
      state.role = ''
      localStorage.clear()
      router.push('/')
    }
  },
  actions: {
    register ({ state, commit }, data) {
      commit('SET_LOADING')
      commit('SET_USER', { name: data.name, role: data.role })
      const { name, email, password } = data
      axios({
        method: 'post',
        url: 'http://localhost:3000/user/register',
        data: {
          name,
          email,
          password
        }
      })
        .then(({ data }) => {
          localStorage.token = data.access_token
          localStorage.name = data.name
          commit('SET_LOGIN')
          commit('CHANGE_LINK_LOGO', '/dashboard')
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          commit('SET_LOADING')
        })
    },
    login ({ commit }, data) {
      commit('SET_LOADING')
      const { email, password } = data
      axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data: {
          email,
          password
        }
      })
        .then(({ data }) => {
          localStorage.token = data.access_token
          localStorage.name = data.name
          commit('SET_LOGIN')
          commit('SET_USER', { name: data.name, role: data.role })
          if (data.role === 'customer') {
            commit('CHANGE_LINK_LOGO', '/dashboard')
            router.push('/dashboard')
          } else {
            commit('CHANGE_LINK_LOGO', '/store')
            router.push('/store')
          }
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          commit('SET_LOADING')
        })
    }
  },
  getters: {
  }
})
