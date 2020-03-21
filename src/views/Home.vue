<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar></Navbar>
    <h1>ALOHA ADMIN! WELCOME BACK!</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    Navbar
  }
}
</script>
<style scoped>
  .home {
    background-color: beige;
    font-family: 'Courier New', Courier, monospace;
  }
</style>
