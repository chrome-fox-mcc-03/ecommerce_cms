<template>
  <div>
    <loading v-if="pageLoading"></loading>
    <div v-else-if="!pageLoading && products.length < 1">/DASHBOARD/PRODUCTS ISEMPTY</div>
    <div v-else-if="!pageLoading && products.length > 1">
      <product-card v-for="(item, i) in $store.state.products" :key="i" :item="item"></product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import Loading from './Loading'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      pageLoading: '_pageLoading',
      products: 'products'
    })
  },
  components: {
    ProductCard,
    Loading
  },
  methods: {
    ...mapActions({
      fetch: 'fetchProduct'
    }),
    ...mapMutations({
      emptyProducts: 'emptyProducts'
    })
  },
  created () {
    // store fetch
    this.emptyProducts()
    this.fetch()
  }
}
</script>
