<template>
  <div>
      <NavbarPanel/>
      <!-- <router-link class="row btn btn-primary" :to="`/products`">Back To Products</router-link> -->
      <div class="detail-board m-3">
          <div class="row d-flex justify-content-between categories">
              <div class="col-6 text-center">
                  <img :src="`${product.image_url}`" class="img-fluid" alt="Responsive image">
              </div>
              <!-- {{product}} -->
              <div class="col-6">
                <h1 class="login-text" style="font-size: 65px;">DETAIL PRODUCT</h1>
                  <div style="padding: 29px; font-size: 52px; font-family: 'Lora', serif; padding-top:18;">
                      <h2 style="padding-left: 0;">{{product.name}}</h2>
                      <p style="font-size: 28px;">Price : {{formatMoney(product.price)}}</p>
                      <p style="font-size: 28px;">Stock : {{product.stock}}</p>
                  </div>
                  <div class="d-flex justify-c0ntent-around">
                      <router-link class="button" :to="`/products/${product.id}/edit`" style="margin: 10px;border-radius: 10px; text-align:center; font-family: 'Amiri', serif; color: white; font-size: 30px;">Edit</router-link>
                      <router-link class="button" :to="`/products/${product.id}/delete`" style="margin: 10px;border-radius: 10px; text-align:center; font-family: 'Amiri', serif;background-color: #AD6A6C; color: white; font-size: 30px;" > Delete</router-link>
                      <!-- <button type="button" class=" ">Edit</button> -->
                  </div>
              <router-view/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import NavbarPanel from './NavbarPanel'

export default {
  name: 'DetailProduct',
  methods: {
    formatMoney (amount) {
      const price = 'Rp ' + parseFloat(amount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1.')
      return price
    }
  },
  components: {
    NavbarPanel
  },
  computed: {
    product () {
      return this.$store.state.detailProduct
    }
  },
  created () {
    // console.log(this.$route.params)
    this.$store.dispatch('fetchProduct', this.$route.params.id)
  }
}
</script>

<style>

</style>
