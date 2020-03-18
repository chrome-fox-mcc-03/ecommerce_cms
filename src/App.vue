<template>
  <div id="#app">
    <navbar @logout="logout"></navbar>
    <user-login @login="login"></user-login>
    <router-view/>
  </div>
</template>

<script>
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
      const payload = {
        email: data.email,
        password: data.password
      }
      this.$store.dispatch('login', payload)
        .then(response => {
          localStorage.setItem('token', response.data.token)
          this.$router.push({ path: 'products' })
          this.$store.commit('SET_ISLOGIN', true)
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
.uk-notification-message{
  border-radius: 15px;
}
</style>
