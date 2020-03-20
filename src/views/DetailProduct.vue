<template>
    <div>
      <h2>Detail Product</h2>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <img class="card-img-top" :src="getImage" :alt="product.name">
          </div>
          <div class="col-3">
            <h5>Name : {{ product.name }}</h5>
            <h5>Price : {{ product.price | currency }}</h5>
            <h5>Stock : {{ product.stock }}</h5>
          </div>
          <div class="col-3">
            <router-link :to="`/products/${product.id}/edit`" class="btn btn-info">Edit</router-link><br>
            <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
      <router-view :product="product" ></router-view>
    </div>
</template>

<script>
export default {
  name: 'DetailProduct',
  data () {
    return {
    }
  },
  methods: {
    getDetailProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('getDetailProduct', id)
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  },
  computed: {
    getImage () {
      if (!this.product.image_url) {
        return require('../assets/empty.svg')
      } else {
        return this.product.image_url
      }
    },
    product () {
      return this.$store.state.product
    }
  },
  created () {
    this.getDetailProduct()
  }
}
</script>
