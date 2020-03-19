<template>
  <div class="home">
    <br>
    <br>
    <div class="loginregister">
      <LoginRegister
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
import LoginRegister from '@/components/LoginRegister.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'Home',
  components: {
    LoginRegister,
    Register
  }
}
</script>

<style scoped>
.home {
  background-image: url('../assets/BackgroundHome.png');
  /* background-position: center; */
  background-size: cover;
  height: 100vh;
  width: 100vw;
}
</style>
