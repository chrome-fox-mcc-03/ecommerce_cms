<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h2>Edit Product</h2>
          <form @submit.prevent="editProduct">
            <label for="name">Name:</label><br>
            <input v-model="product.name" type="text" id="name" name="name"><br>
            <label for="image_url">Image (max. 2 MB):</label><br>
            <input @change="handleFileUpload" type="file"><br>
            <p style="font-size: 12px" >If you do not wish to change the image, please do not upload anything</p>
            <label for="price">Price:</label><br>
            <input v-model="product.price" type="number" id="price" name="price"><br>
            <label for="stock">Stock:</label><br>
            <input v-model="product.stock" type="number" id="stock" name="stock"><br><br>
            <input type="submit" class="btn btn-success" value="Edit">
          </form>
        </div>
        <div class="col-sm">
          <Uploading v-if="isUploading"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Uploading from '../components/Uploading'
export default {
  name: 'EditProduct',
  props: ['product'],
  components: {
    Uploading
  },
  data () {
    return {
      image_url: null
    }
  },
  methods: {
    editProduct () {
      const formData = new FormData()
      formData.append('name', this.product.name)
      formData.append('image_url', this.image_url)
      formData.append('price', this.product.price)
      formData.append('stock', this.product.stock)
      formData.append('category', this.product.category)
      const payload = {
        id: this.$route.params.id,
        formData: formData
      }
      this.$store.dispatch('editProduct', payload)
    },
    handleFileUpload (event) {
      this.image_url = event.target.files[0]
    }
  },
  computed: {
    isUploading () {
      return this.$store.state.isUploading
    }
  }
}
</script>
