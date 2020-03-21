<template>
  <div class="add-product-form">
    <form id="add-product">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Add Product</legend>
        <div class="uk-margin">
          <div class="uk-margin">
            <input v-if="productName" v-model="productName" class="uk-input uk-form-width-large" type="text" placeholder="Product Name">
            <input v-else v-model="productName" class="uk-input uk-form-danger uk-form-width-large" type="text" placeholder="Product Name">
          </div>
          <div class="uk-margin">
            <textarea v-if="productDescription" v-model="productDescription" class="uk-input uk-form-width-large" type="text" rows="5" placeholder="Product Description" style="margin-bottom: 0;"></textarea>
            <textarea v-else v-model="productDescription" class="uk-input uk-form-danger uk-form-width-large" type="text" rows="5" placeholder="Product Description" style="margin-bottom: 0;"></textarea>
            <br>
            <small v-if="productDescription.length <= 200">{{ charLeft }}</small>
            <small v-else class="charExcedeed" >{{ charLeft }}</small>
          </div>
          <div class="uk-margin">
            <input v-if="isFinite(productStock)" v-model="productStock" class="uk-input uk-form-width-large" type="text" placeholder="Product Stock">
            <input v-else v-model="productStock" class="uk-input uk-form-danger uk-form-width-large" type="text" placeholder="Product Stock">
          </div>
          <div class="uk-margin">
            <input v-if="isFinite(productPrice)" v-model="productPrice" class="uk-input uk-form-width-large" type="text" placeholder="Product Price">
            <input v-else v-model="productPrice" class="uk-input uk-form-danger uk-form-width-large" type="text" placeholder="Product Price">
          </div>
          <div class="uk-margin">
            <input v-model="productImage" class="uk-input uk-form-width-large" type="text" placeholder="Product Image">
          </div>
          <div class="uk-margin btn-add">
            <button @click.prevent="addProduct()" class="uk-button uk-button-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import UIkit from 'uikit'
export default {
  data () {
    return {
      productName: '',
      productDescription: '',
      productStock: null,
      productPrice: null,
      productImage: ''
    }
  },
  computed: {
    charLeft () {
      return `${this.productDescription.length}/200`
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.productName,
        description: this.productDescription,
        stock: this.productStock,
        price: this.productPrice,
        image_url: this.productImage
      }
      this.$store.dispatch('addProduct', payload)
        .then(response => {
          this.$router.replace({ path: '/products' })
          UIkit.notification({
            message: `Added ${response.data.name} to Store`,
            status: 'primary',
            pos: 'top-right',
            timeout: 1500
          })
        })
        .catch(err => {
          const errors = err.response.data.message
          UIkit.notification({
            message: `${errors}`,
            status: 'danger',
            pos: 'top-right',
            timeout: 1500
          })
        })
    }
  }
}
</script>

<style scoped>
.add-product-form{
  margin-top: 2rem;
  margin: 3rem;
}

.uk-input{
  margin-bottom: 1rem;
}

.uk-button-primary{
  border-radius: 15px;
}

small{
  margin-top: 0;
  color: black;
}

small.charExcedeed {
  margin-top: 0;
  color: red;
}

btn-add{
  display: flex;
  justify-content: space-around;
}
</style>
