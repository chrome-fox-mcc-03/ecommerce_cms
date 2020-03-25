<template>
  <div class="card">
    <div class="card-header">
      Add Product
    </div>
    <div class="card-body">
      <form @submit.prevent="submitProduct" enctype="multipart/form-data">
      <div class="form-group">
        <label>Name : </label>
        <input v-model="name" type="text" class="form-control" placeholder="enter product name" />
      </div>
      <div class="form-group">
        <label>Image : </label>
        <input ref="file" @change="onChangeImage" type="file" class="form-control-file" />
      </div>
      <div class="form-group">
        <label>Price : </label>
        <input v-model="price" type="text" class="form-control" placeholder="enter product price" />
      </div>
      <div class="form-group">
        <label>Stock : </label>
        <input v-model="stock" type="text" class="form-control" placeholder="enter product stock" />
      </div>
      <div class="form-group">
        <label>Category : </label>
        <select v-model="CategoryId" class="form-control">
          <option v-for="category in $store.state.categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
    <loading :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="true"></loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'

export default {
  name: 'AddProduct',
  components: {
    Loading
  },
  data () {
    return {
      name: '',
      image: '',
      price: 0,
      stock: 0,
      CategoryId: 0,
      isLoading: false
    }
  },
  created () {
    this.$store.dispatch('getCategories')
  },
  methods: {
    onChangeImage () {
      const file = this.$refs.file.files[0]
      this.image = file
    },
    submitProduct () {
      this.isLoading = true
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('name', this.name)
      formData.append('price', this.price)
      formData.append('stock', this.stock)
      formData.append('CategoryId', this.CategoryId)
      this.$store.dispatch('addProduct', formData)
        .then(path => {
          this.isLoading = false
          const status = {
            title: 'Product Created!',
            body: 'Product successfully created.',
            type: 'success',
            canTimeout: true,
            duration: 2000
          }
          this.$vToastify.success(status)
          this.$router.push(path)
        })
        .catch(err => {
          this.isLoading = false
          const status = {
            title: 'Failed!',
            body: err.response.data.errors[0],
            type: 'error',
            canTimeout: true,
            duration: 2000
          }
          this.$vToastify.error(status)
        })
    }
  }
}

</script>
