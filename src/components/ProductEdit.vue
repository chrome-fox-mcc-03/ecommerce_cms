<template>
    <div class="edit-product-form">
    <form id="edit-product">
      <fieldset class="uk-fieldset">

        <legend class="uk-legend">Edit Product</legend>

        <div class="uk-margin">
          <div class="uk-margin">
            <input class="uk-input uk-form-width-large" type="text" :value="this.product.name">
          </div>
          <div class="uk-margin">
            <textarea class="uk-input uk-form-width-large" type="text" rows="5" :value="this.product.id"></textarea>
          </div>
          <div class="uk-margin">
            <input class="uk-input uk-form-width-large" type="text" placeholder="Product Stock">
          </div>
          <div class="uk-margin">
            <input class="uk-input uk-form-width-large" type="text" placeholder="Product Price">
          </div>
          <div class="uk-margin">
            <input class="uk-input uk-form-width-large" type="text" placeholder="Product Image">
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
import axios from 'axios'
export default {
  data () {
    return {
      product: {},
      id: this.$route.params.id
    }
  },
  methods: {
    getProductData () {
      axios({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${this.id}`
      })
        .then(response => {
          this.product.id = response.data.id
          this.product.name = response.data.name
        })
        .catch(err => [
          console.log(err)
        ])
    }
  },
  created () {
    this.getProductData()
    console.log(this.product)
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
