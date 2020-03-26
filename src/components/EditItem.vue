<template>
  <div class="container d-flex justify-content-center align-items-center">
    <loading v-if="$store.state._pageLoading"></loading>
    <form v-else class="mt-4">
      <h4 class="title">Edit Product {{ $route.params.id }}</h4>
      <div class="form-group">
        Name
        <input v-model="name" type="text" class="form-control" placeholder="Enter Product Name">
      </div>
      <div class="form-group">
        Price
        <input v-model="price" type="number" class="form-control" placeholder="Enter Product Price">
      </div>
      <div class="form-group">
        Stock
        <input v-model="stock" type="number" class="form-control" placeholder="Enter Product Stock">
      </div>
      <div class="form-group">
        Image URL
        <input v-model="image_url" type="text" class="form-control" placeholder="Enter Product Image URL">
      </div>
      <div class="d-flex flex-start form-group align-items-center">
        <input @click.prevent="edit" type="submit" class="btn btn-success" value="Edit">
        <input @click.prevent="toDashboard" type="submit" class="btn btn-warning ml-4" value="Back">
        <div class="ml-2">
          <small :class="$store.state.notification.color">{{ $store.state.notification.msg}}</small>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Loading from './Loading'
export default {
  data () {
    return {
      name: '',
      price: '',
      stock: '',
      image_url: ''
    }
  },
  methods: {
    edit () {
      const id = this.$route.params.id
      const item = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url
      }
      const payload = {
        id,
        item
      }
      this.$store.dispatch('editProduct', payload)
    },
    getEditedDetails () {
      const id = Number(this.$route.params.id)
      this.$store.state.products.forEach(item => {
        if (item.id === id) {
          this.name = item.name
          this.price = item.price
          this.stock = item.stock
          this.image_url = item.image_url
        }
      })
    },
    toDashboard () {
      this.$router.push({ path: '/dashboard/products' })
    }
  },
  mounted () {
    this.getEditedDetails()
  },
  components: {
    Loading
  }
}
</script>
