<template>
    <div>
        <h2>Product List</h2>
        <br>
        <Loading v-if="isLoading"/>
        <div v-else class="items">
          <ProductCard class="item" v-for="product in products" :key="product.id" :product="product"/>
          <br>
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import Loading from './Loading.vue'

export default {
  name: 'ProductList',
  data () {
    return {
    }
  },
  components: {
    ProductCard,
    Loading
  },
  computed: {
    products: function () {
      return this.$store.state.products
    },
    isLoading: function () {
      return this.$store.state.isLoading
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style>
.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.item {
  margin: 25px;
}
</style>
