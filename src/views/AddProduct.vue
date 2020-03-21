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
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image: '',
      price: 0,
      stock: 0,
      CategoryId: 0
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
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('name', this.name)
      formData.append('price', this.price)
      formData.append('stock', this.stock)
      formData.append('CategoryId', this.CategoryId)
      this.$store.dispatch('addProduct', formData)
      this.$router.push('/dashboard/product')
    }
  }
}

</script>
