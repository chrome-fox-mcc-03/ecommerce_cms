<template>
  <div>
      <h3>Add New Item</h3>
      <br>
      <form>
          <input type="text" v-model="name" placeholder="Item name here"><br><br>
          <input type="text" v-model="image_url" placeholder="link to image"><br><br>
          <input type="number" v-model="price" placeholder="price"><br><br>
          <input type="number" v-model="stock" placeholder="available stock..."><br><br>
          <button v-on:click.prevent="submit">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'AddProuct',
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
      const item = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('createItem', item)
    }
  }
}
</script>

<style>

</style>
