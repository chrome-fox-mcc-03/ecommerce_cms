<template>
  <div>
    <div class="navbar-dashboard">
      <Navbar />
    </div>
    <div class="body-dashboard">
      <h2>List Products</h2>
      <img src="" alt="">
      {{ products[0].image_url }}
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('getProducts')
    console.log(this.$store.state, 'di list products')
  }
}
</script>
