<template>
  <div class="add-product-form">
    <form id="add-product">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Add Product</legend>
        <div class="uk-margin">
          <div class="uk-margin">
            <input v-model="productName" class="uk-input uk-form-width-large" type="text" placeholder="Product Name">
          </div>
          <div class="uk-margin">
            <textarea v-model="productDescription" class="uk-input uk-form-width-large" type="text" rows="5" placeholder="Product Description" style="margin-bottom: 0;"></textarea>
            <br>
            <small v-if="productDescription.length <= 200">{{ charLeft }}</small>
            <small class="charExcedeed" v-else>{{ charLeft }}</small>
          </div>
          <div class="uk-margin">
            <input v-model="productStock" class="uk-input uk-form-width-large" type="text" placeholder="Product Stock">
          </div>
          <div class="uk-margin">
            <input v-model="productPrice" class="uk-input uk-form-width-large" type="text" placeholder="Product Price">
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
