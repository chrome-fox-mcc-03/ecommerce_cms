<template>
      <div>
        <NavbarPanel/>
        <div class="container main-board">
            <div class="d-flex justify-content-around align-content-center">
                <h1 class="display-3 d-flex justify-content-center m-3 products login-text"  style="padding-left:47px; margin-top: 31px;">Products</h1>
            </div>
            <div
             class="row categories d-flex justify-content-center"
            >
                <div
                  v-for="product in products"
                  :key="product.id"
                >
                    <div class="card p-3 m-3 card-product" style="width: 20rem;margin-bottom:30px;">
                        <img :src="`${product.image_url}`" class="card-img-top " style="border-radius:10px;">
                        <div class="card-body">
                            <p class="card-text">{{product.name}}</p>
                            <div class="d-flex justify-content-center"  style="padding-button:10px;">
                                <router-link :to="`/products/${product.id}`" class="btn btn-primary button">Detail</router-link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarPanel from '../components/NavbarPanel'

export default {
  name: 'Products',
  components: {
    NavbarPanel
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>

</style>
