<template>
  <div>
      <h3>Update Item {{ product.name }}</h3>
      <br>
      <form>
          <input type="text" v-model="name" placeholder="Item name here"><br><br>
          <input type="text" v-model="image_url" placeholder="link to image"><br><br>
          <input type="number" v-model="price" placeholder="price"><br><br>
          <input type="number" v-model="stock" placeholder="available stock..."><br><br>
          <button v-on:click.prevent="submit">Submit</button> <router-link to="/" class="btn btn-danger">Cancel</router-link>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Update',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  methods: {
    submit: function () {
      const update = {
        id: this.product.id,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('updateItem', update)
    }
  },
  computed: {
    product: function () {
      return this.$store.state.updating
    }
  },
  created () {
    this.name = this.$store.state.updating.name
    this.image_url = this.$store.state.updating.image_url
    this.price = this.$store.state.updating.price
    this.stock = this.$store.state.updating.stock
  }
}
</script>

<style>

</style>
