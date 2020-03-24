<template>
  <div>
    <loading :active.sync="$store.state.isLoading"
      :is-full-page="true"></loading>
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
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  data () {
    return {
    }
  },
  components: {
    Item,
    Loading
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style>

</style>
