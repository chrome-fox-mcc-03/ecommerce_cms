<template>
    <div class="card ml-4 mr-2 mt-2 mb-2 pt-2 pb-2 shadow d-flex flex-column align-items-center">
        <div class="image shadow">
          <img :src="product.image_url" alt="" class="img-thumbnail img-fluid">
        </div>
        <div class="productName">
          <h5>{{product.name}}</h5>
        </div>
        <div class="productDetails">
          <h6>price : {{product.price}}</h6>
          <h6>stock : {{product.stock}}</h6>
        </div>
        <div class="action">
          <span>
            <router-link to="/dashboard/products/edit">Edit</router-link>
            |
            <router-link to="/dashboard/products/delete">Delete</router-link>
          </span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product']
}
</script>

<style>

.image {
  max-width: 50%;
}

.card {
  max-width: 30%;
}

</style>
