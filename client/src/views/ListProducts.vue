<template>
    <div>
        <div class="navbar-dashboard">
        <Navbar/>
        </div>
        <div class="body-dashboard">
        <h2>List Products</h2>
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
  },
  created () {
    // this.$store.dispatch('getProducts')
    console.log(this.$store.state, 'di list products')
  }
}
</script>
