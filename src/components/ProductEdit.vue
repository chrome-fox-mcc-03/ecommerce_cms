<template>
    <div class="edit-product-form">
    <form id="edit-product">
      <fieldset class="uk-fieldset">

        <legend class="uk-legend">Edit Product</legend>

        <div class="uk-margin">
          <div class="uk-margin">
            <input class="uk-input uk-form-width-large" type="text" v-model="product.name" placeholder="Product Name">
          </div>
          <div class="uk-margin">
            <textarea class="uk-input uk-form-width-large" type="text" rows="5" v-model="product.description" placeholder="Product Description"></textarea>
          </div>
          <div class="uk-margin">
            <input class="uk-input uk-form-width-large" type="text" v-model="product.stock" placeholder="Product Stock">
          </div>
          <div class="uk-margin">
            <input class="uk-input uk-form-width-large" type="text" v-model="product.price" placeholder="Product Price">
          </div>
          <div class="uk-margin">
            <input class="uk-input uk-form-width-large" type="text" v-model="product.image_url" placeholder="Product Image">
          </div>
          <div class="uk-margin">
            <button class="uk-button uk-button-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      product: {
        stock: 0,
        name: '',
        description: '',
        price: 0,
        iamge_url: ''
      }
    }
  },
  methods: {
  },
  created () {
    this.$store.dispatch('getProductData', this.$route.params.id)
      .then(({ data: { response } }) => {
        this.product.stock = response.stock
        this.product.name = response.name
        this.product.description = response.description
        this.product.price = response.price
        this.product.image_url = response.image_url
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>
.edit-product-form{
  margin-top: 2rem;
  margin: 3rem;
}

.uk-input{
  margin-bottom: 1rem;
}

.uk-button-primary{
  border-radius: 10px
}
</style>
