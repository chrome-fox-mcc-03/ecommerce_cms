<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'DashboardPage',
  components: {
    Navbar
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>
.below-nav {
  margin-top: 3rem;
}
</style>
