<template>
  <div>
      <h1>Admin Pages</h1><br><br>
      <b-button class="button" variant="primary" v-b-modal.createmodal>Add Item</b-button><br><br>
      <table id="ProductTable">
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Stock</th>
          <th>Price</th>
          <th colspan="2">Options</th>
        </tr>
        <tr v-for="Product in Products" :key="Product.id" :Product="Product">
          <td>{{Product.Name}}</td>
          <td>{{Product.Image_Url}}</td>
          <td>{{Product.Stock}}</td>
          <td>{{Product.Price}}</td>
          <td><b-button class="button"  variant="success" v-b-modal="'Modal'+Product.id" :Product="Product">ShowInfo</b-button></td>
          <UpdateModal :Product="Product"></UpdateModal>
        </tr>
      </table>
      <CreateModal :form="form"></CreateModal>
  </div>
</template>

<script>
import UpdateModal from '../components/UpdateModal'
import CreateModal from '../components/CreateModal'
export default {
  name: 'Admin',
  data () {
    return {
      Products: this.$store.state.Products,
      form: {
        Name: '',
        Image_Url: '',
        Stock: 0,
        Price: 0
      },
      id: 0
    }
  },
  methods: {
    Delete () {
    }
  },
  components: {
    UpdateModal,
    CreateModal
  },
  computed: {
    ProductsRender () {
      this.$store.dispatch('FetchProducts')
      return this
    }
  },
  beforeCreate () {
    this.$store.dispatch('FetchProducts')
  },
  created () {
    this.$store.dispatch('FetchProducts')
  },
  mounted () {
    this.$store.dispatch('FetchProducts')
  },
  updated () {
    this.$store.dispatch('FetchProducts')
  }
}
</script>

<style>
#ProductTable {
  margin-left: 20%;
  margin-right: 20%;
  width: 60vw;
  padding: 10px;
  justify-content: center;
  text-align: center;
  justify-content: center;
  border-style: double;
  border-width: 10px;
  color: red;
  border-color: royalblue;
}
tr {
  margin: 5px;
  border-style: double;
  border-width: 10px;
  border-color: royalblue;
}
th {
  margin: 5px;
  border-style: double;
  border-width: 10px;
  border-color: royalblue;
}
td {
  margin: 5px;
  border-style: double;
  border-width: 10px;
  border-color: royalblue;
}
</style>
