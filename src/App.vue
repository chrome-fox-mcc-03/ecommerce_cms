<template>
  <div id="#app">
    <navbar :isLogin='isLogin' @logout="logout"></navbar>
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
          localStorage.setItem('token', token)
          this.$router.push({ path: 'products' })
          UIkit.offcanvas('#login-canvas').hide()
          this.$store.commit('SET_ISLOGIN', true)
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout () {
      this.$store.commit('SET_ISLOGIN', false)
    }
  },
  components: {
    Navbar,
    UserLogin
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>
