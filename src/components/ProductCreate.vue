<template>
  <div class="container d-flex justify-content-center align-items-center">
    <form @submit.prevent="addProduct" class="mt-5">
    <h4 class="title">Add New Product</h4>
    <div class="form-group mt-5">
      Name
      <input v-model="newProduct.name" type="text" class="form-control" placeholder="Enter Product Name">
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
    <input type="submit" class="btn btn-success" value="Create">
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
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.commit('SET_LOADING', true)
      this.$store.dispatch('addProd', this.newProduct)
        .then(response => {
          this.$router.push('/dashboard')
          this.$toasted.success(`Product ${response.data.data.name} has been added!`)
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
  }
}
</script>
