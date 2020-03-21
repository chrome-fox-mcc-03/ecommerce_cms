<template>
  <div>
    <!-- <Navbar></Navbar> -->
    <h1>THIS IS EDIT FORM</h1>
    <!-- <p>{{ productInfo()  }}</p> -->
    <b-form class="forms" @submit.prevent="editProduct" @reset="onReset">
      <b-form-group
        id="input-group-add-product-name"
        label="Product Name:"
        label-for="add-product-name"
      >
        <b-form-input
          id="add-product-name"
          v-model="productInfo().name"
          required
          placeholder="Enter product's name"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-3" label="CATEGORY:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="productInfo().category"
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
          v-model="productInfo().image_url"
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
          v-model="productInfo().price"
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
          v-model="productInfo().stock"
          placeholder="Enter Stocky Qty in pcs"
        ></b-form-input>
      </b-form-group>

      <div class="btn-bars">
        <b-button type="submit" variant="primary">Edit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
// import Navbar from '../components/Navbar.vue'
// const URL = 'http://localhost:3000'
export default {
  name: 'AddProductForm',
  data () {
    return {
    //   product: null,
    //   form: {
    //     name: '',
    //     image_url: '',
    //     price: 0,
    //     stock: 0
    //   },
      categories: [{ text: 'Select One', value: null }, 'food', 'medicine', 'supplements']
      // show: true
    }
  },
  components: {
    // Navbar
  },
  methods: {

    productInfo () {
      console.log('THIS IS EDIT PRODUCT FORM')

      return this.$store.state.productInfo
    },

    editProduct () {
      console.log('CHECKLIST BEFORE UPDATE PRODUCT FOR REAL')
      console.log(this.productInfo())
      const payload = {
        id: this.productInfo().id,
        name: this.productInfo().name,
        category: this.productInfo().category,
        price: this.productInfo().price,
        stock: this.productInfo().stock
      }
      console.log('WHATS PAYLOAD TO SEND?')
      console.log(payload)
      this.$store.dispatch('updateProduct', payload)
        .then(response => {
          console.log('EDIT PRODUCT SUCCESS')
          // console.log(response)
          this.product = response.data
          console.log(this.product)
          this.$toasted.success((this.product.data[0].name + 'HAS BEEN EDITED'), {
            position: 'bottom-center'
          })
          this.$router.push({ path: '/products' })
        })
        .catch(err => {
          console.log('ERROR CATCHED:')
          // console.log('ERR RESPONSE IS')
          // console.log(error.response.data.error);
          this.$toasted.error(err.response.data.error, {
            position: 'bottom-center'
          })
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
  computed: {},
  created () {
    this.$route.params.id = this.productInfo.id
  }
}
</script>
<style>
  .forms {
    text-align: center;
    justify-content: center;
    width: 50%;
    margin-left: 25%;
  }

  .btn-bars {
    margin: 2vh;
    padding: 2vh;
  }

  b-button {
    margin: 2vh;
    padding: 2vh;
  }
</style>
