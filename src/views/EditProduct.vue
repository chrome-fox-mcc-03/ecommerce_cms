<template>
    <div>
        <h2>Edit Product</h2>
        <form @submit.prevent="editProduct">
            <label for="name">Name:</label><br>
            <input v-model="product.name" type="text" id="name" name="name"><br>
            <label for="image_url">Image:</label><br>
            <input v-model="product.image_url" type="url" id="image_url" name="image_url"><br>
            <label for="price">Price:</label><br>
            <input v-model="product.price" type="number" id="price" name="price"><br>
            <label for="stock">Stock:</label><br>
            <input v-model="product.stock" type="number" id="stock" name="stock"><br><br>
            <input type="submit" class="btn btn-success" value="Edit">
        </form>
    </div>
</template>

<script>
export default {
  name: 'EditProduct',
  props: ['product'],
  data () {
    return {
    }
  },
  methods: {
    editProduct () {
      const payload = {
        id: this.$route.params.id,
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price,
        stock: this.product.stock
      }
      this.$store.dispatch('editProduct', payload)
    }
  }
}
</script>
