<template>
  <div class="row bg-dark">
    <div class="col-md-3">
      <div class="container m-1 bg-light">
        <ul class="list-group">
          <li class="list-group-item">
            <router-link to="/dashboard/products" class="btn btn-sm btn-outline-danger">Show All Product</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/dashboard/create" class="btn btn-sm btn-outline-danger">Add New Product</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-9">
      <div class="container m-1 bg-light">
        <router-view :products="products"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    fetchProducts () {
      // from db then get items
      const items = [
        { id: 1, name: 'product01', price: '0', stock: '0', UserId: 1 },
        { id: 2, name: 'product02', price: '0', stock: '0', UserId: 1 },
        { id: 3, name: 'product03', price: '0', stock: '0', UserId: 1 }
      ]
      items.forEach(item => {
        this.products.push(item)
      })
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
