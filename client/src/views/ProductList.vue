<template>
  <div class="container
      d-flex
      flex-row
      flex-wrap
      align-items-center
      justify-content-start
      pt-3
      pb-3
      pl-4
      overflow-auto">
    <ProductCard
      v-for="product in products"
      :key="product.id" :product="product"/>
  </div>
</template>

<script>

import ProductCard from '../components/ProductCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'ProductionList',
  data () {
    return {
      // testing product card
      dummyCards: [
        { card1: 'Product 1' },
        { card2: 'Product 2' },
        { card1: 'Product 3' },
        { card1: 'Product 4' },
        { card1: 'Product 4' },
        { card1: 'Product 4' },
        { card1: 'Product 4' },
        { card1: 'Product 4' },
        { card1: 'Product 4' },
        { card1: 'Product 4' },
        { card1: 'Product 4' }
      ]
    }
  },
  components: {
    ProductCard
  },
  computed: {
    ...mapState(['products'])
  },
  created () {
    this.$store.dispatch('onFetchProduct')
    console.log(this.products, 'dari component')
  }
}
</script>

<style>
.container {
  max-height: 75vh;
}
</style>
