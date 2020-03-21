<template>
  <div id="app">
    <div class="home d-flex justify-content-center align-items-center flex-column">
      <navbar-home v-if="hideNav()" :isLoggedIn="isLoggedIn"></navbar-home>
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavbarHome from './components/NavbarHome'
export default {
  data () {
    return {
    }
  },
  methods: {
    hideNav () {
      if (this.$route.name === 'RegisterPage' || this.$route.name === 'LogInPage') return false
      else return true
    }
  },
  components: {
    NavbarHome
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.$store.commit('CHANGE_LOGIN_STATUS')
    }
  }
}
</script>

<style>
body {
  background-color: #f9fafb;
}
.home{
    height: 100vh;
}
form {
  font-family: 'Baloo 2', cursive;
}
p {
  font-family: 'Baloo 2', cursive;
}
h2 {
  font-family: 'Lato', sans-serif;
}
h3 {
  font-family: 'Lato', sans-serif;
}
h4 {
  font-family: 'Lato', sans-serif;
}
h1 {
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
}
</style>
