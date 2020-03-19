<template>
  <tr>
    <td><img class="uk-preserve-width uk-border-circle"
        :src="product.image_url" width="45"></td>
    <td class="uk-text-nowrap">{{ product.name }}</td>
    <td class="uk-text-truncate">{{  product.description }}</td>
    <td class="uk-text-truncate"> {{ priceRupiah }} </td>
    <td class="uk-text-nowrap">{{ product.stock }}</td>
    <td>
      <div class="uk-button-group">
        <router-link class="uk-button uk-button-primary" :to="`/products/edit/${id}`">Edit</router-link>
        <button @click.prevent="deleteProduct" class="uk-button uk-button-danger">Delete</button>
      </div>
    </td>
    <img :src="product.url" alt="" srcset="">
  </tr>
</template>

<script>
export default {
  data () {
    return {
      priceRupiah: ''
    }
  },
  methods: {
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.id)
        .then(response => {
          this.$store.dispatch('getProducts')
        })
        .catch(err => {
          console.log(err.response, 'error dari index delete')
        })
    }
  },
  props: ['product', 'id'],
  computed: {
    getRupiah () {
      let rupiah = ''
      const pricerev = this.product.price.toString().split('').reverse().join('')
      for (let i = 0; i < pricerev.length; i++) if (i % 3 === 0) rupiah += pricerev.substr(i, 3) + '.'
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('')
    }
  },
  created () {
    this.priceRupiah = this.getRupiah
  }
}

</script>

<style scoped>
  .uk-table-hover tbody tr:hover {
    background-color: #bbe1fa;
  }
</style>
