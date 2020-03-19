<template>
  <div id="#app">
    <navbar @logout="logout"></navbar>
    <user-login></user-login>
    <router-view/>
  </div>
</template>

<script>
// import UIkit from 'uikit'
import Navbar from './components/Navbar'
import UserLogin from './components/UserLogin'
export default {
  data () {
    return {

    }
  },
  methods: {
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
