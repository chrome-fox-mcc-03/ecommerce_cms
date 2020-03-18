<template>
  <div class="home">
    <Header></Header>
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Login
  }
}
</script>

<style scoped>
  .home {
    margin: 0;
  }
</style>
