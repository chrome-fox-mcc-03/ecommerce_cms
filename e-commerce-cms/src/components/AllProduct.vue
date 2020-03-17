<template>
<div class="container">
<div class="row mt-5">
  <router-link v-for="product in products" :key="product.id" :to="`/dashboard/edit/${product.id}`" class="card col-12 col-lg-6 mb-3 mr-auto shadow-sm" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081" class="card-img" alt="image">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">Price: {{ product.price }}</p>
          <p class="card-text">Stock: {{ product.stock }}</p>
        </div>
      </div>
    </div>
  </router-link>
</div>
</div>
</template>

<script>
export default {
  name: 'AllProduct',
  data: function () {
    return {
      products: [
        { id: 1, name: 'Adidas Ultraboost 20', price: 500000, stock: 300 },
        { id: 2, name: 'Puma RS-X Super Men', price: 550000, stock: 40 },
        { id: 3, name: 'Nike React Vision', price: 1200000, stock: 120 },
        { id: 4, name: 'Nike Joyride Run Flyknit', price: 940000, stock: 120 },
        { id: 5, name: 'Onitsuka Tiger Black', price: 1425000, stock: 19 }
      ]
    }
  }
}
</script>

<style>
.clickable-div {
  text-decoration: none;
}
</style>
