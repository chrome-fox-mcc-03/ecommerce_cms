<template>
    <div class="card mr-md-3" style="width: 18rem;">
        <img class="card-img-top" :src="product.image_url" :alt="product.name">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <router-link :to="`/products/${product.id}`" class="btn btn-primary">View Detail</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['product']
}
</script>
