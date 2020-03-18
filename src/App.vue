<template>
  <div id="#app">
    <navbar @logout="logout"></navbar>
    <user-login @login="login"></user-login>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import UIkit from 'uikit'
import Navbar from './components/Navbar'
import UserLogin from './components/UserLogin'
export default {
  data () {
    return {

    }
  },
  methods: {
    login (data) {
      const { email, password } = data
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email,
          password
        }
      })
        .then(response => {
          const token = response.data.token
          this.$store.commit('SET_ISLOGIN', true)
          localStorage.setItem('token', token)
          this.$router.push({ path: 'products' })
          UIkit.offcanvas('#login-canvas').hide()
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout () {
      localStorage.clear()
      this.$router.push({ path: '/' })
      this.$store.commit('SET_ISLOGIN', false)
    }
  },
  components: {
    Navbar,
    UserLogin
  },
  created () {
    if (localStorage.getItem('token')) {
      this.$store.commit('SET_ISLOGIN', true)
    }
  }
}
</script>

<style>

</style>
