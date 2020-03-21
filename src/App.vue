<template>
  <div id="#app">
    <router-view/>
  </div>
</template>

<script>
// import UIkit from 'uikit'
// import Navbar from './components/Navbar'
// import UserLogin from './components/UserLogin'
export default {
  data () {
    return {

    }
  },
  methods: {
  },
  components: {},
  created () {
    if (localStorage.getItem('token')) {
      this.$store.commit('SET_ISLOGIN', true)
    }
  }
}
</script>

<style>
</style>
