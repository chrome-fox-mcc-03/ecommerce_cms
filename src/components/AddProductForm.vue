<template>
  <div>
    <Navbar></Navbar>
    <h2>ADD NEW PRODUCT</h2>
    <b-form class="forms" @submit.prevent="addNewProduct" @reset="onReset">
      <b-form-group
        id="input-group-add-product-name"
        label="Product Name:"
        label-for="add-product-name"
      >
        <b-form-input
          id="add-product-name"
          v-model="form.name"
          required
          placeholder="Enter product's name"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-3" label="Category:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.category"
          :options="categories"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-add-product-image-url"
        label="Image URL:"
        label-for="add-product-image-url"
      >
        <b-form-input
          id="add-product-image-url"
          v-model="form.image_url"
          placeholder="Enter URL to product's illustratiion"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-add-product-price"
        label="Unit Price:"
        label-for="add-product-price"
      >
        <b-form-input
          id="add-product-price"
          v-model="form.price"
          placeholder="Enter unit price in IDR"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-add-product-stock"
        label="Stock Qty (pcs):"
        label-for="add-product-stock"
      >
        <b-form-input
          id="add-product-stock"
          v-model="form.stock"
          placeholder="Enter Stocky Qty in pcs"
        ></b-form-input>
      </b-form-group>

      <div class="btn-bars">
        <b-button class="btn" type="submit" variant="primary">Add</b-button>
        <b-button class="btn" type="reset" variant="danger">Reset</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
// const URL = 'http://localhost:3000'
export default {
  name: 'AddProductForm',
  data () {
    return {
      product: null,
      form: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      },
      categories: [{ text: 'Select One', value: null }, 'food', 'medicine', 'supplements']
      // show: true
    }
  },
  components: {
    Navbar
  },
  methods: {
    // addNewProduct() { axios({}) }
    addNewProduct () {
      // alert(JSON.stringify(this.form))
      // CALL AXIOS, SEND TO DATABASE WHO?

      this.$store.dispatch('addProduct', this.form)
        .then(response => {
          console.log('ADD PRODUCT SUCCESS')
          // console.log(response)
          this.product = response.data
          console.log(this.product)
          this.$toasted.success((this.product.data.name + ' HAS BEEN ADDED'), {
            position: 'bottom-center'
          })
          this.$router.push({ name: 'ListProducts' })
        })
        .catch(err => {
          console.log('ERROR CATCHED:')
          // console.log('ERR RESPONSE IS')
          // console.log(error.response.data.error);
          this.$toasted.error(err.response.data.error, {
            position: 'bottom-center'
          })
        })
        .finally(_ => {
          this.$store.commit('SET_LOADING', false)
        })
    },
    onReset () {
      // Reset our form values
      this.form.name = ''
      this.form.imageURL = ''
      this.price = 0
      this.stock = 0
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  computed: {}
}
</script>

<style>
  .forms  {
    text-align: center;
    justify-content: center;
    width: 50%;
    margin-left: 25%;
  }

  .btn {
    margin: 0.5vh;
    padding: 0.5vh;
  }

</style>
