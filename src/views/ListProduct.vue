<template>
    <div>
        <h2>List Product</h2>
        <div class="row">
            <Card v-for="product in products" :key="product.id" :product="product"/>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card'

export default {
  name: 'ListProducts',
  props: ['products'],
  components: {
    Card
  }
}
</script>
