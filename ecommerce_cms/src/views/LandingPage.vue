<template>
  <div class="landingPage">
    <br>
    <br>
    <div class="d-flex justify-content-center">
      <img class="img-fluid" src="../assets/logocms.png" alt="">
    </div>
    <div class="loginRegister">
      <Login
      v-if="$store.state.formLogin"
      />
      <Register
      v-else
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'LandingPage',
  components: {
    Login,
    Register
  }
}
</script>

<style scoped>
.landingPage {
  background-image: url('../assets/BackgroundHome.png');
  /* background-position: center; */
  background-size: cover;
  height: 100vh;
  width: 100vw;
}
</style>
