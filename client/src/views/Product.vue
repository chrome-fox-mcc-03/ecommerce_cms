<template>
    <div data-app>
      <loading-overlay v-if="isLoading"></loading-overlay>
      <v-data-table
        :headers="headers"
        :items="products"
        :search="search"
        sort-by="name"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Products</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="70vw">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-row>
                    <v-col cols="4">
                    <v-img :src="editedItem.imageUrl" contain></v-img>
                    </v-col>
                    <v-col cols="8">
                      <v-row>
                        <v-col cols="12">
                          <v-text-field v-model="editedItem.name" label="Product Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="6">
                          <v-text-field v-model="editedItem.stock" label="Stock Qty."></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="6">
                          <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-textarea v-model="editedItem.description" label="Product Description" rows="2"  hide-details no-resize></v-textarea>
                        </v-col>
                        <v-col cols="12">
                          <!-- <v-text-field v-model="editedItem.imageUrl" label="Image"></v-text-field> -->

                        </v-col>
                        <v-col cols="12">
                          <v-checkbox v-model="editedItem.isActive" :label="`Product is active?`"></v-checkbox>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.price="{ item }">
          <span>{{getFormattedNumber(item.price)}}</span>
        </template>
        <template v-slot:item.stock="{ item }">
          <span>{{getFormattedNumber(item.stock)}}</span>
        </template>
        <template v-slot:item.isActive="{ item }">
          <span>{{item.isActive ? 'Active' : 'Inactive'}}</span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="confirmDelete(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
      <v-dialog v-model="delDialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Are you sure?</v-card-title>
          <v-card-text>You won't be able to revert this!</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="deleteItem(false)">Cancel</v-btn>
            <v-btn color="green darken-1" text @click="deleteItem(true)">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
import LoadingOverlay from '../components/LoadingOverlay'
import Axios from 'axios'
export default {
  components: {
    LoadingOverlay
  },
  data: () => ({
    absolute: true,
    isLoading: false,
    search: '',
    dialog: false,
    delDialog: false,
    delObj: {
      index: 0,
      item: {}
    },
    headers: [
      { text: 'Name', align: 'start', sortable: true, value: 'name' },
      { text: 'Stock', value: 'stock' },
      { text: 'Price', value: 'price' },
      { text: 'Product Status', value: 'isActive' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    products: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      name: '',
      stock: 0,
      price: 0,
      isActive: false,
      description: '',
      imageUrl: ''
    },
    defaultItem: {
      id: 0,
      name: '',
      stock: 0,
      price: 0,
      isActive: false,
      description: '',
      imageUrl: ''
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.isLoading = true
      Axios({
        method: 'GET',
        url: 'http://localhost:3000/products'
      })
        .then(response => {
          this.products = response.data.products.map(product => {
            const { id, name, description, stock, price, imageUrl, isActive } = product
            return { id, name, description, stock, price, imageUrl, isActive }
          })
        })
        .catch(err => {
          this.$store.commit('SET_ERROROBJ', err.response.data)
          console.log('something is error', err)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    editItem (item) {
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (confirm) {
      this.delDialog = false
      if (confirm) {
        this.isLoading = true
        const token = localStorage.getItem('token')
        const { id } = this.delObj.item

        Axios({
          method: 'DELETE',
          url: `http://localhost:3000/products/${id}`,
          headers: { token }
        })
          .then(response => {
            this.products.splice(this.delObj.index, 1)
            this.$store.commit('SET_SUCCESSOBJ', response.data)
          })
          .catch(err => {
            this.$store.commit('SET_ERROROBJ', err.response.data)
          })
          .finally(() => {
            this.isLoading = false
          })
      } else {
        this.delObj = {
          index: 0,
          item: {}
        }
      }
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save () {
      this.isLoading = true
      if (this.editedIndex > -1) {
        const token = localStorage.getItem('token')
        const { id, name, description, stock, price, imageUrl, isActive } = this.editedItem

        Axios({
          method: 'PUT',
          url: `http://localhost:3000/products/${id}`,
          headers: { token },
          data: { name, description, stock, price, imageUrl, isActive }
        })
          .then(response => {
            Object.assign(this.products[this.editedIndex], {
              name,
              description,
              stock,
              price,
              imageUrl,
              isActive
            })
            this.$store.commit('SET_SUCCESSOBJ', response.data)
          })
          .catch(err => {
            this.$store.commit('SET_ERROROBJ', err.response.data)
          })
          .finally(() => {
            this.isLoading = false
          })
      } else {
        const token = localStorage.getItem('token')
        const { name, description, stock, price, imageUrl, isActive } = this.editedItem

        Axios({
          method: 'POST',
          url: 'http://localhost:3000/products/',
          headers: { token },
          data: { name, description, stock, price, imageUrl, isActive }
        })
          .then(response => {
            const created = response.data.product
            this.products.push({
              id: created.id,
              name,
              description,
              stock,
              price,
              imageUrl,
              isActive
            })
            this.$store.commit('SET_SUCCESSOBJ', response.data)
          })
          .catch(err => {
            this.$store.commit('SET_ERROROBJ', err.response.data)
          })
          .finally(() => {
            this.isLoading = false
          })
      }
      this.close()
    },
    confirmDelete (item) {
      this.delDialog = true

      this.delObj.index = this.products.indexOf(item)
      this.delObj.item = Object.assign({}, item)
    },
    getFormattedNumber (value) {
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  }
}
</script>

<style scoped>
tbody tr:nth-of-type(even) {
  background-color: rgba(236, 237, 237);
}

tbody tr:nth-of-type(odd) {
  background-color: rgb(250 ,250, 250);
}

.v-data-table-header {
  background-color: rgba(182, 183, 187);
  color: white;
}

.v-data-footer {
  background-color: rgb(250 ,250, 250);
}

.theme--light.v-data-table thead tr th {
  color: white;
}
</style>
