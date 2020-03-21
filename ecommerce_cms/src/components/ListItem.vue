<template>
  <div>
    <router-link to="product/create" class="btn btn-secondary ml-3">Add Product</router-link>
    <br>
    <br>
    <div class="row container">
      <Item
      v-for="(product, i) in $store.state.products" :key="i"
      :product="product"
      />
    </div>
  </div>
</template>

<script>
import Item from './Item'

export default {
  data () {
    return {
    }
  },
  components: {
    Item
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style>

</style>
