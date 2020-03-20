<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Login msg="Welcome to Vood App Admin"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>
