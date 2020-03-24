<template>
  <div class="container">
    <b-table
      small
      :fields="fields"
      :items="products"
      responsive="sm"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <!-- A virtual column -->
      <template v-slot:cell(index)="data">{{ data.index + 1 }}</template>

      <!-- A virtual composite column -->
      <template v-slot:cell(image_url)="data" align-v="center">
        <b-img :src="data.value" alt="Right image" thumbnail fluid width="100px"  @error="imageLoadError"></b-img>
      </template>

      <!-- A virtual composite column -->
      <template v-slot:cell(id)="data">
        <b-button
          v-if="role === 'admin'"
          v-b-modal.modal-edit
          @click="updateProduct(data.value)"
          size="sm"
          variant="dark"
        >
          Edit
        </b-button>
        <hr>
        <b-button
          v-if="role === 'admin'"
          v-b-modal.modal-1
          size="sm"
          variant="danger"
          @click.prevent="selectDelete(data.value)"
        >
          Remove
        </b-button>
      </template>
      <!-- Optional default data cell scoped slot -->
      <template v-slot:cell()="data">
        <i>{{ data.value }}</i>
      </template>
    </b-table>
     <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      size="lg"
      align="center"
    ></b-pagination>
    <b-modal id="modal-1" title="Delete this product?" @ok="handleDelete">
      <Error></Error>
      <p class="my-4">This product will be deleted</p>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Error from './Error'

export default {
  name: 'ProductsTable',
  components: {
    Error
  },
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      role: '',
      fields: [
        'index',
        { key: 'image_url', label: 'Image' },
        { key: 'name', label: 'Full Name', sortable: true },
        { key: 'price', sortable: true },
        { key: 'stock', sortable: true },
        { key: 'id', label: 'Action' }
      ],
      form: {},
      deleteId: Number
    }
  },
  methods: {
    ...mapMutations(['SET_LOADING', 'SET_ISLOGIN', 'SHOW_ERROR']),
    ...mapActions(['deleteProduct', 'fetchProduct', 'findOne']),
    selectDelete (id) {
      this.deleteId = id
    },
    handleDelete (bvModalEvt) {
      this.loading = true
      bvModalEvt.preventDefault()
      this.deleteBook(this.deleteId)
    },
    deleteBook (id) {
      this.deleteProduct(id)
        .then(() => {
          this.fetchProduct()
          this.$nextTick(() => {
            this.$bvModal.hide('modal-1')
          })
          this.SET_LOADING(false)
        })
        .catch(err => {
          this.SHOW_ERROR(err.response.data.error)
          this.SET_LOADING(false)
        })
    },
    updateProduct (id) {
      this.findOne(id)
      this.$router.push(`/edit/${id}`)
    },
    imageLoadError (event) {
      event.target.src = 'https://img.icons8.com/carbon-copy/2x/book.png'
    }
  },
  computed: {
    ...mapState(['products', 'item']),
    rows () {
      return this.products.length
    }
  },
  created () {
    this.fetchProduct()
    this.SHOW_ERROR('')
    this.role = localStorage.getItem('role')
  }
}
</script>

<style>

</style>
