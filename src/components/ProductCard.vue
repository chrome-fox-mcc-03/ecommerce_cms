<template>
  <tr>
    <td><img class="uk-preserve-width uk-border-circle"
        :src="product.image_url" width="45"></td>
    <td class="uk-text-nowrap">{{ product.name }}</td>
    <td class="uk-text-truncate">{{  product.description }}</td>
    <td class="uk-text-truncate">{{  product.price }}</td>
    <td class="uk-text-nowrap">{{ product.stock }}</td>
    <td>
      <div class="uk-button-group">
        <router-link class="uk-button uk-button-primary" :to="`/products/edit/${id}`">Edit</router-link>
        <button @click.prevent class="uk-button uk-button-danger">Delete</button>
      </div>
    </td>
    <img :src="product.url" alt="" srcset="">
  </tr>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  props: ['product', 'id'],
  computed: {
  }
}

</script>

<style scoped>
  .uk-table-hover tbody tr:hover {
    background-color: #bbe1fa;
  }
</style>
