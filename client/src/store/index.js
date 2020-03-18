import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    onLogin ({ dispatch, commit }, { email, password }) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: email,
          password: password
        }
      })
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onRegister ({ dispatch, commit }, { email, password }) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/register',
        data: {
          email: email,
          password: password,
          role: 'admin'
        }
      })
        .then((response) => {
          console.log(response)
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  getters: {}
})
