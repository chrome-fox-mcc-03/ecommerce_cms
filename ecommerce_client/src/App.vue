<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <navbar/>

    <router-view/>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    navbar
  },
  methods: {
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    },
    Products () {
      return this.$store.state.Products
    }
  },
  beforeCreate () {
    this.$store.dispatch('FetchProducts')
  },
  created () {
    const Role = localStorage.getItem('Role')
    if (localStorage.getItem('Access_Token')) {
      this.$store.dispatch('FetchProducts')
      this.$store.commit('SET_LOGIN', true)
      if (Role === 'Admin') {
        this.$store.commit('SET_ADMIN', true)
        this.$store.dispatch('FetchProducts')
      } else {
      }
    } else {
      this.$router.push('home')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
