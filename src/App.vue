<template>
  <div id="app">
    <div class="home d-flex justify-content-center align-items-center flex-column">
      <navbar-home v-if="hideNav()"></navbar-home>
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavbarHome from './components/NavbarHome'
export default {
  data () {
    return {
      hideNav () {
        if (this.$route.name === 'RegisterPage' || this.$route.name === 'LogInPage') return false
        else return true
      }
    }
  },
  components: {
    NavbarHome
  }
}
</script>

<style>
.home{
    height: 100vh;
  }
</style>
