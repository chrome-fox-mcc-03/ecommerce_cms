<template>
<div class="container pt-4">
  <Loading v-if="isLoading"/>
  <div class="row mt-5">
    <Product v-for="product in products" :key="product.id" :product="product"/>
  </div>
</div>
</template>

<script>
import Loading from './Loading'
import Product from './Product'
export default {
  name: 'AllProduct',
  components: {
    Loading,
    Product
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
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>
.clickable-div {
  text-decoration: none;
  cursor: pointer;
}
.clickable-div:hover {
  color: teal;
}
.fa-trash {
  color: rgb(195, 28, 28);
}
</style>
