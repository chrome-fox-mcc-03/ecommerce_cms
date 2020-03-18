<template>
  <div class="edit-product-page">
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
            <button @click.prevent="editProduct" class="uk-button uk-button-primary">Submit</button>
            <button @click.prevent="getBack" class="uk-button uk-button-danger">Cancel</button>
          </div>
        </div>
      </fieldset>
    </form>
    <div class="image-product">
      <div class="image-product-edit">
        <loading v-if="isLoading" ></loading>
        <img :src="product.image_url" width="480px" alt="Product's Image" srcset="">
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import Loading from '../components/Loading'
import UIkit from 'uikit'
export default {
  data () {
    return {
      product: {
        id: this.$route.params.id,
        stock: 0,
        name: '',
        description: '',
        price: 0,
        image_url: ''
      },
      isLoading: false
    }
  },
  components: {
    Loading
  },
  methods: {
    getBack () {
      this.$router.replace({ path: '/products' })
    },
    editProduct () {
      const payload = {
        id: this.product.id,
        name: this.product.name,
        description: this.product.description,
        stock: this.product.stock,
        price: this.product.price,
        image_url: this.product.image_url
      }
      this.$store.dispatch('editProduct', payload)
        .then(response => {
          this.$router.replace({ path: '/products' })
          UIkit.notification({
            message: `Edited ${response.data}`,
            status: 'primary',
            pos: 'top-right',
            timeout: 1500
          })
        })
        .catch(err => {
          const errors = err.response.data.message
          errors.forEach(element => {
            UIkit.notification({
              message: `${element}`,
              status: 'danger',
              pos: 'top-right',
              timeout: 1500
            })
          })
        })
    }
  },
  created () {
    this.isLoading = true
    this.$store.dispatch('getProductData', this.$route.params.id)
      .then(({ data: { response } }) => {
        this.product.id = response.id
        this.product.stock = response.stock
        this.product.name = response.name
        this.product.description = response.description
        this.product.price = response.price
        this.product.image_url = response.image_url
      })
      .catch(err => {
        console.log(err)
      })
      .finally(_ => {
        this.isLoading = false
      })
  }
}
</script>

<style scoped>
.edit-product-page{
  margin-top: 2rem;
  margin: 3rem;
  display: flex;
  flex-direction: row;
}

.loading-container{
  width: 480px;
}

.image-product{
  margin-left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.uk-input{
  margin-bottom: 1rem;
}

.uk-button-primary, .uk-button-danger{
  margin-right: 1%;
  border-radius: 10px
}
</style>
