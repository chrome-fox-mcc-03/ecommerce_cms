<template>
  <div>
    <loading v-if="pageLoading"></loading>
    <div v-else-if="!pageLoading && products.length === 0">PRODUCTS DASHBOARD IS EMPTY</div>
    <div v-else-if="!pageLoading && products.length > 0">
      <b-table striped hover :items="$store.getters.productsTable" :fields="fields">
        <template v-slot:cell(actions)="items">
          <div class="btn btn-info mx-1" @click="showEdit(items.item.id)">
            Edit {{ items.item.ID }}
          </div>
          <div class="btn btn-info mx-1" @click="confirmDel(items.item.id)">
            Delete
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import Loading from './Loading'
import { mapState, mapActions, mapMutations } from 'vuex'
import { BTable } from 'bootstrap-vue'

export default {
  data () {
    return {
      fields: ['id', 'name', 'price', 'stock', 'actions'],
      errorMsg: ''
    }
  },
  computed: {
    ...mapState({
      pageLoading: state => state._pageLoading,
      products: state => state.products
    })
  },
  components: {
    Loading,
    BTable
  },
  methods: {
    showEdit (id) {
      this.$router.push({ path: `/dashboard/edit/${id}` })
    },
    confirmDel (id) {
      this.$router.push({ path: `/dashboard/delete/${id}` })
    },
    confirmDialog () {},
    ...mapMutations({
      startLoading: 'startLoading',
      stopLoading: 'stopLoading',
      emptyProducts: 'emptyProducts',
      appendProduct: 'appendProduct'
    }),
    ...mapActions({
      fetch: 'fetchProduct'
    })
  },
  mounted () {
    // store fetch
    this.startLoading()
    this.emptyProducts()
    this.fetch()
      .then(result => {
        const items = result.data.products
        items.forEach(item => {
          this.appendProduct({ id: item.id, name: item.name, price: item.price, stock: item.stock, image_url: item.image_url })
        })
      })
      .catch(err => {
        this.errorMsg = err.response.data
      })
      .finally(_ => {
        setTimeout(() => {
          this.stopLoading()
        }, 500)
      })
  }
}
</script>
