<template>
  <div id="update-page">
    <div id="update">
    <h1>Update Product</h1>
      <form @submit.prevent="updateProduct">
        <div class="form-group">
          <label for="product-name">Product Name</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
            id="product-name"
            placeholder="Product Name"
          />
        </div>
        <div class="form-group">
          <label for="product-price">Product Price</label>
          <input
            v-model="price"
            type="text"
            class="form-control"
            id="product-price"
            placeholder="Product Price"
          />
        </div>
        <div class="form-group">
          <label for="product-stock">Product Stock</label>
          <input
            v-model="stock"
            type="text"
            class="form-control"
            id="product-stock"
            placeholder="Product Stock"
          />
        </div>
        <div class="form-group">
          <label for="product-image">Product Image</label>
          <input
            v-model="image"
            type="text"
            class="form-control"
            id="product-image"
            placeholder="Product Image"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'updatePage',
  data: () => {
    return {
      name: '',
      price: '',
      stock: '',
      image: ''
    }
  },
  methods: {
    updateProduct: function () {
      this.$store.dispatch('updateProduct', {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image: this.image,
        id: this.$route.params.id
      })
        .then(_ => {
          this.$router.push('/product')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.$store.dispatch('getProduct', this.$route.params.id)
      .then(({ data }) => {
        this.name = data.name
        this.price = data.price
        this.stock = data.stock
        this.image = data.image
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>
#update-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../assets/track.jpg');
}

#update {
  color: white;
  opacity: .7;
  border: 1px solid gray;
  padding: 50px;
  border-radius: 20px;
  background-color: #3d3d3d;
  text-align: center;
}

#button {
  text-align: center;
}
</style>
