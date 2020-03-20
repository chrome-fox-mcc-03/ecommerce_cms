<template>
  <div>
    <div>
      <h1>List Product</h1>
    </div>
    <div>
      <Card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'listProduct',
  components: {
    Card
  },
  computed: {
    products: function () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchData')
  }
}
</script>

<style>
</style>
