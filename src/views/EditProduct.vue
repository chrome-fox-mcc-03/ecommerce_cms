<template>
  <div class="card">
    <div class="card-header">
      Edit Product
    </div>
    <div class="card-body">
      <form @submit.prevent="submitEditProduct" enctype="multipart/form-data">
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
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      name: null,
      image: null,
      price: null,
      stock: null,
      CategoryId: 0,
      id: this.$route.params.id
    }
  },
  created () {
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getProduct', this.id)
      .then(product => {
        this.name = product.name
        this.price = product.price
        this.stock = product.stock
        this.CategoryId = product.CategoryId
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    onChangeImage () {
      const file = this.$refs.file.files[0]
      this.image = file
    },
    submitEditProduct () {
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('name', this.name)
      formData.append('price', this.price)
      formData.append('stock', this.stock)
      formData.append('CategoryId', this.CategoryId)
      const data = {
        formData,
        id: this.id
      }
      this.$store.dispatch('editProduct', data)
      this.$router.push('/dashboard/product')
    }
  }
}
</script>
