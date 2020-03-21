<template>
  <div class="container d-flex justify-content-center align-items-center">
    <b-card
      :title="name"
      :img-src="image_url"
      img-alt="Product Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        Price : {{ price }}
      </b-card-text>
      <b-card-text>
        Stock : {{ stock }}
      </b-card-text>
      <b-card-text>
        Confirm delete item?
      </b-card-text>

      <b-button @click="confirmDelete" variant="danger">Yes</b-button>
      <b-button @click="toDashboard" variant="warning" class="ml-4">Cancel</b-button>
    </b-card>
  </div>
</template>

<script>
import { BCard, BCardText, BButton } from 'bootstrap-vue'

export default {
  data () {
    return {
      name: '',
      price: '',
      stock: '',
      image_url: ''
    }
  },
  methods: {
    getDeletedDetails () {
      const id = Number(this.$route.params.id)
      this.$store.state.products.forEach(item => {
        if (item.id === id) {
          this.name = item.name
          this.price = item.price
          this.stock = item.stock
          this.image_url = item.image_url
        }
      })
    },
    toDashboard () {
      this.$router.push({ path: '/dashboard/products' })
    },
    confirmDelete () {
      const id = Number(this.$route.params.id)
      const payload = {
        id
      }
      this.$store.dispatch('deleteProduct', payload)
    }
  },
  components: {
    BCard,
    BCardText,
    BButton
  },
  created () {
    this.getDeletedDetails()
  }
}
</script>
