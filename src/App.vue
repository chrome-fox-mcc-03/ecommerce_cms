<template>
  <div id="#app">
    <navbar :isLogin='isLogin'></navbar>
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
      isLogin: false
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
          localStorage.setItem('token', token)
          this.$router.push({ path: 'products' })
          UIkit.offcanvas('#login-canvas').hide()
          this.isLogin = true
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  components: {
    Navbar,
    UserLogin
  }
}
</script>

<style>

</style>
