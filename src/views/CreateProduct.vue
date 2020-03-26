<template>
    <div>
        <h2>New Product</h2>
        <form @submit.prevent="createProduct">
            <label for="name">Name:</label><br>
            <input v-model="product.name" type="text" id="name" name="name"><br>
            <label for="image_url">Image:</label><br>
            <input v-model="product.image_url" type="url" id="image_url" name="image_url"><br>
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
</template>

<script>
export default {
  name: 'CreateProduct',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0,
        category: ''
      }
    }
  },
  methods: {
    createProduct () {
      const payload = {
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price,
        stock: this.product.stock,
        category: this.product.category
      }
      this.$store.dispatch('createProduct', payload)
    }
  }
}
</script>
