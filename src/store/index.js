'use strict'

import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import VueToastify from 'vue-toastify'

Vue.use(VueToastify, {
  errorDuration: 2000,
  succesDuration: 2000,
  theme: 'light',
  position: 'bottom-center'
})
Vue.use(Vuex)

const notifier = new Vue()

export default new Vuex.Store({
  state: {
    nowLoading: false,
    userData: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      img_url: '',
      role: '',
      store_name: ''
    }
  },
  mutations: {
    CHANGE_NOWLOADING (state) {
      state.nowLoading = !state.nowLoading
    },
    CHANGE_USERDATA (state, payload) {
      for (const key in payload) {
        state.userData[key] = payload[key]
      }
    }
  },
  actions: {
    login ({ commit, state }, payload) {
      commit('CHANGE_NOWLOADING')
      commit('CHANGE_USERDATA', payload)
      axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: {
          email: state.userData.email,
          password: state.userData.password
        }
      })
        .then(result => {
          localStorage.setItem('token', result.data.token)
          localStorage.setItem('name', result.data.name)
          localStorage.setItem('store_name', result.data.store_name)
          localStorage.setItem('img_url', result.data.img_url)
          notifier.$vToastify.success({
            title: 'Success',
            body: `Welcome, ${result.data.name}`
          })
        })
        .catch(err => {
          notifier.$vToastify.error({
            title: 'Ouch!',
            body: err.response.data.msg
          })
        })
        .finally(() => {
          commit('CHANGE_NOWLOADING')
        })
    },
    register ({ commit, state, dispatch }, payload) {
      commit('CHANGE_NOWLOADING')
      commit('CHANGE_USERDATA', payload)
      axios({
        url: 'http://localhost:3000/register',
        method: 'POST',
        data: payload
      })
        .then(result => {
          dispatch('login', {
            email: state.userData.email,
            password: state.userData.password
          })
        })
        .catch(err => {
          notifier.$vToastify.error({
            title: 'Ouch!',
            body: err.response.data.msg
          })
        })
        .finally(() => {
          commit('CHANGE_NOWLOADING')
        })
    }
  },
  getters: {
  }
})
