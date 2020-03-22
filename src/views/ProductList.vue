<template>
  <div class="container pl-5 pr-5 pt-4 d-flex flex-column justify-content-wrap">
      <div class="d-flex flex-column flex-grow-1 pb-5 ">
        <h2 class="display-5">Your Products</h2>
        <div class="d-flex align-items-wrap flex-column card-container mr-2 ml-2 mt-2 p-3 container overflow-auto">
          <product-card
            v-for="(product, i) in products"
            :key="i"
            :name="product.name"
            :price="product.price"
            :stock="product.stock"
            :category="product.category"
            :highlighted="product.highlighted"
            :img_url="product.img_url"
            :id="product.id"
            >
            </product-card>
            <small v-if="!products" style="text-align:center;">No product. Start adding now!</small>
        </div>
      </div>
      <loading-now v-if="nowLoading"></loading-now>
  </div>
</template>

<script>
import LoadingNow from '../components/LoadingNow'
import ProductCard from '../components/ProductCard'
export default {
  components: {
    LoadingNow,
    ProductCard
  },
  mounted () {
    this.$store.dispatch('fetchProduct')
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    nowLoading () {
      return this.$store.state.nowLoading
    }
  }
}
</script>

<style>
h2 {
  text-align: center;
}
.card-container {
  max-height: 70vh;
  border: 1px solid rgb(235, 235, 235);
  border-right: 0;
  border-left: 0;
}
.item-img {
  width: 6rem
}
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #e9e9e9;
}
::-webkit-scrollbar-thumb {
  background: rgb(28, 6, 128);
}
</style>
