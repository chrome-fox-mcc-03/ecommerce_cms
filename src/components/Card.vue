<template>
<div class="card">
  <!-- {{ product.image_url }} -->
  <b-card
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  <b-card-img
    :src="`${product.image_url}`"
    :alt="`${product.name}`"
    ></b-card-img>
    <b-card-text>
      <h5> {{ product.name }}  </h5>
      <h6> {{ product.category }} </h6>
      <p>
        <ul style="list-style-type:none">
          <li>IDR {{ product.price }}</li>
          <li>{{ product.stock }} PCS</li>
        </ul>
      </p>
    </b-card-text>

    <!-- <div class="d-flex">
                <div @click="redirToEditPage(product.id)"><i class="mr-3 fas fa-pen-square fa-2x clickable-div"></i></div>
                <div @click="deleteProduct(product.id)"><i class="fas fa-trash fa-2x clickable-div"></i></div>
              </div> -->

    <b-button class="btn" @click="showEditForm(product.id)" variant="warning">EDIT</b-button>
    <b-button  class="btn" @click="deleteItem(product.id)" variant="danger">DELETE</b-button>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {}
  },
  props: ['product'],
  components: {},
  methods: {
    showEditForm (id) {
      console.log('>>> PREPPING EDIT FORM')
      this.$store.dispatch('productInfo', id)
      this.$route.params.id = id
      this.$router.push({ name: 'EditProductForm' })
    },

    deleteItem (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(_ => {
          this.$toasted.success(('PRODUCT ' + id + ' HAS BEEN DELETED'), {
            position: 'bottom-center'
          })
          this.$store.dispatch('getProducts')
        })
        .catch(err => {
          console.log('ERROR CATCHED:')
          // console.log('ERR RESPONSE IS')
          // console.log(error.response.data.error);
          this.$toasted.error(err.response.data.error, {
            position: 'bottom-center'
          })
        })
        .finally(_ => {
          this.$store.commit('SET_LOADING', false)
        })

      // this.$router.push({ name: 'ListProducts' })
    }
  },
  computed: {}
}
</script>

<style>

  .card {
    margin: 0 auto;
  }

  .btn {
    margin: 0.5vh;
    padding: 0.5vh;
  }
</style>
