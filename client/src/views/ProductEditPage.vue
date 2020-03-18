<template>
<div class="container">
  <form class="mt-5">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label>Name</label>
        <input type="text" class="form-control" placeholder="Name" v-model="name">
      </div>
      <div class="form-group col-md-6">
        <label>Image</label>
        <input type="text" class="form-control" placeholder="Image" v-model="image">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label>Price</label>
        <input type="text" class="form-control" placeholder="Price" v-model="price">
      </div>
      <div class="form-group col-md-6">
        <label>Stock</label>
        <input type="text" class="form-control" placeholder="Stock" v-model="stock">
      </div>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="editProduct()">Update</button>
  </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      image: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    editProduct () {
      const { id } = this.$route.params
      const name = this.name
      const image = this.image
      const price = this.price
      const stock = this.stock
      this.$store.dispatch('editProduct', {
        id,
        name,
        image,
        price,
        stock
      })
        .then((result) => {
          this.$notify({
            group: 'foo',
            title: 'Hello',
            text: 'Success Edit Product'
          })
          this.$router.push('/product')
        }).catch((err) => {
          this.$notify({
            group: 'foo',
            title: 'Hello',
            text: err.response.data.message,
            type: 'error'
          })
        })
        .finally(() => {
          this.$store.commit('SET_ISLOADING', false)
        })
    }
  },
  created () {
    const { id } = this.$route.params
    this.$store.dispatch('getProductEdit', id)
      .then((result) => {
        const { name, price, stock } = result.data
        this.name = name
        this.image = result.data.image_url
        this.price = price
        this.stock = stock
      }).catch((err) => {
        console.log(err)
      })
      .finally(() => {
        this.$notify({
          group: 'foo',
          clean: true
        })
        this.$store.commit('SET_ISLOADING', false)
      })
  }
}
</script>
