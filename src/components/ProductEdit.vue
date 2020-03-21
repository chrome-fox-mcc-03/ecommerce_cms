<template>
  <div class="container d-flex justify-content-center align-items-center">
    <form @submit.prevent="editProduct" class="mt-5">
    <h4 class="title">Edit Product</h4>
    <div class="form-group mt-5">
      Name
      <input v-model="newProduct.name" type="text" class="form-control" placeholder="Enter Product Name" >
    </div>
    <div class="form-group">
      Image Url
      <input v-model="newProduct.image_url" type="text" class="form-control" placeholder="Enter Product Image Link">
    </div>
    <div class="form-group">
      Price
      <input v-model="newProduct.price" type="number" class="form-control" placeholder="Enter Product Price">
    </div>
    <div class="form-group">
      Stock
      <input v-model="newProduct.stock" type="number" class="form-control" placeholder="Enter Product Stock">
    </div>
    <input type="submit" class="btn btn-success mr-5" value="Save">
    <router-link to="/dashboard" class="btn btn-danger">Cancel</router-link>
    <small class="form-text text-danger"></small>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    editProduct () {
      const id = this.$route.params.id
      this.$store.commit('SET_LOADING', true)
      this.$store.dispatch('editProduct', { id, data: this.newProduct })
        .then(response => {
          this.$router.push('/dashboard')
          this.$toasted.success(`Success Edit ${response.data.data[1].name}`)
        })
        .catch(err => {
          err.response.data.errors.map(el => {
            this.$toasted.error(el, {
              position: 'bottom-center'
            })
          })
        })
        .finally(_ => {
          this.$store.commit('SET_LOADING', false)
        })
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  created () {
    const id = this.$route.params.id
    this.$store.commit('SET_LOADING', true)
    this.$store.dispatch('detailProduct', id)
      .then(response => {
        this.newProduct.name = response.data.data.name
        this.newProduct.image_url = response.data.data.image_url
        this.newProduct.price = response.data.data.price
        this.newProduct.stock = response.data.data.stock
      })
      .catch(err => {
        this.$toasted.error(err.response.data.message, {
          position: 'bottom-center'
        })
      })
      .finally(_ => {
        this.$store.commit('SET_LOADING', false)
      })
  }
}
</script>
