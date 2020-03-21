<template>
  <div class="product-list uk-child-width-expand@s" uk-grid>
    <pic-loading v-if="isLoading"></pic-loading>
    <product-card v-else v-for="(product) in products" :key="product.id" :product="product" @fetchProducts="fetchProducts" ></product-card>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import PicLoading from '../components/LoadingPic'
export default {
  name: 'UserProducts',
  data () {
    return {
      products: [],
      isLoading: false,
      errMessage: ''
    }
  },
  components: {
    ProductCard,
    PicLoading
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('getProducts')
        .then(response => {
          this.products = [...response.data.response]
        })
        .catch(err => {
          this.errMessage = err.response
        })
        .finally(_ => {
          this.isLoading = false
        })
    }
  },
  computed: {},
  created () {
    this.isLoading = true
    this.fetchProducts()
  }
}

</script>

<style scoped>
.product-list{
  width: auto;
  height: auto;
  margin-left: 5px;
  margin-top: 5px;
  flex-direction: row;
  background-image: url('../assets/product_bg.png');
}
</style>
