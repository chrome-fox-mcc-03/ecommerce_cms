<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h2>New Product</h2>
            <form @submit.prevent="createProduct">
                <label for="name">Name:</label><br>
                <input v-model="product.name" type="text" id="name" name="name"><br>
                <label for="image_url">Image (max. 2 MB):</label><br>
                <input @change="handleFileUpload" type="file"><br>
                <label for="price">Price:</label><br>
                <input v-model="product.price" type="number" id="price" name="price"><br>
                <label for="stock">Stock:</label><br>
                <input v-model="product.stock" type="number" id="stock" name="stock"><br>
                <label for="category">Category:</label><br>
                <select v-model="product.category">
                  <option disabled value="">Please select one</option>
                  <option value="fashion">Fashion</option>
                  <option value="food and beverages">Food and Beverages</option>
                  <option value="electronic">Electronic</option>
                  <option value="hobby">Hobby</option>
                  <option value="automotive">Automotive</option>
                  <option value="others">Others</option>
                </select><br><br>
                <input type="submit" class="btn btn-success" value="Submit">
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
  name: 'CreateProduct',
  components: {
    Uploading
  },
  data () {
    return {
      product: {
        name: '',
        image_url: null,
        price: 0,
        stock: 0,
        category: ''
      }
    }
  },
  methods: {
    createProduct () {
      const formData = new FormData()
      formData.append('name', this.product.name)
      formData.append('image_url', this.product.image_url)
      formData.append('price', this.product.price)
      formData.append('stock', this.product.stock)
      formData.append('category', this.product.category)
      this.$store.dispatch('createProduct', formData)
    },
    handleFileUpload (event) {
      this.product.image_url = event.target.files[0]
    }
  },
  computed: {
    isUploading () {
      return this.$store.state.isUploading
    }
  }
}
</script>
