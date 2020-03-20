<template>
  <div class="container form-space pt-5">
    <Loading v-if="isLoading" />
    <form @submit.prevent="updateProduct" class="mt-5">
    <h2 class="mb-5">Edit Product</h2>
    <div class="form-group">
      <label for="product-name">Name</label>
      <input v-model="name" type="text" class="form-control" id="product-name" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="product-price">Price</label>
      <input v-model="price" type="text" class="form-control" id="product-price">
    </div>
    <div class="form-group">
      <label for="product-stock">Stock</label>
      <input v-model="stock" type="text" class="form-control" id="product-stock">
    </div>
    <div class="form-group">
      <label for="product-category">Category</label>
      <select v-model="category" class="form-control" id="product-category">
        <option>Men</option>
        <option>Women</option>
      </select>
    </div>
    <div class="form-group">
      <label for="product-image">Image</label>
      <input v-model="image_url" type="text" class="form-control" id="product-image">
    </div>
    <button type="submit" class="btn btn-primary">Save Changes</button>
  </form>
  </div>
</template>

<script>
import Loading from './Loading'
export default {
  name: 'EditForm',
  components: {
    Loading
  },
  data: function () {
    return {
      name: '',
      price: '',
      stock: '',
      image_url: '',
      category: ''
    }
  },
  methods: {
    updateProduct: function () {
      this.$store.dispatch('updateProduct', {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url,
        category: this.category,
        id: this.$route.params.id
      })
        .then(({ data }) => {
          console.log('updated successfully', data)
          this.$router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          this.$store.commit('SET_ISLOADING', false)
        })
    }
  },
  created () {
    this.$store.dispatch('getProductById', this.$route.params.id)
      .then(({ data }) => {
        this.name = data.name
        this.price = data.price
        this.stock = data.stock
        this.image_url = data.image_url
        this.category = data.category
      })
      .catch(err => {
        console.log(err)
      })
      .finally(_ => {
        this.$store.commit('SET_ISLOADING', false)
      })
  },
  computed: {
    isLoading: function () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style>

</style>
