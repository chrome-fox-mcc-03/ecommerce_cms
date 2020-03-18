<template>
  <div>
    <loading v-if="pageLoading"></loading>
    <div v-else-if="!pageLoading && products.length === 0">/DASHBOARD/PRODUCTS ISEMPTY</div>
    <div v-else-if="!pageLoading && products.length > 0">
      <product-card v-for="(item, i) in products" :key="i" :item="item"></product-card>
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
      pageLoading: state => state._pageLoading,
      products: state => state.products
    })
  },
  components: {
    ProductCard,
    Loading
  },
  methods: {
    ...mapMutations({
      startLoading: 'startLoading',
      stopLoading: 'stopLoading',
      emptyProducts: 'emptyProducts',
      appendProduct: 'appendProduct'
    }),
    ...mapActions({
      fetch: 'fetchProduct'
    })
  },
  mounted () {
    // console.log(this.products, 'container created')
    // store fetch
    this.startLoading()
    this.emptyProducts()
    this.fetch()
      .then(result => {
        console.log(result.data.products)
        const items = result.data.products
        items.forEach(item => {
          this.appendProduct(item)
        })
      })
      .catch(err => {
        console.log(err.response.data)
      })
      .finally(_ => {
        setTimeout(() => {
          this.stopLoading()
        }, 500)
      })
  }
}
</script>
