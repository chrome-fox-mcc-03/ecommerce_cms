<template>
  <div class="d-flex flex-column pt-3 pb-2 mb-3 border-bottom">
    <div>
      <v-data-table
      :headers="headers"
      :items="products"
      :search="search"
      sort-by="name"
      class="elevation-1"
      data-app>
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
                  <v-container>
                    <v-row>
                      <v-col sm="12" md="4">
                        <v-text-field v-model="editedItem.name" label="Product Name"></v-text-field>
                      </v-col>
                      <v-col sm="12" md="4">
                        <v-text-field v-model="editedItem.stock" label="Stock Qty."></v-text-field>
                      </v-col>
                      <v-col sm="12" md="4">
                        <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
                      </v-col>
                      <v-col sm="12" md="8">
                        <v-textarea v-model="editedItem.description" label="Product Description"></v-textarea>
                      </v-col>
                      <v-col sm="12" md="4">
                        <v-col sm="12">
                          <v-text-field v-model="editedItem.imageUrl" label="Image"></v-text-field>
                        </v-col>
                        <v-col sm="12">
                          <v-checkbox v-model="editedItem.isActive" :label="`Product is active?`"></v-checkbox>
                        </v-col>
                      </v-col>
                    </v-row>
                  </v-container>
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
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data: () => ({
    search: '',
    dialog: false,
    headers: [
      { text: 'Name', align: 'start', sortable: true, value: 'name' },
      { text: 'Stock', value: 'stock' },
      { text: 'Price', value: 'price' },
      { text: 'IsActive', value: 'isActive' },
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
      Axios({
        method: 'GET',
        url: 'http://localhost:3000/products'
      })
        .then(response => {
          // const { name, description, stock, price, imageUrl, isActive } = response.data.products
          this.products = response.data.products.map(product => {
            const { id, name, description, stock, price, imageUrl, isActive } = product
            return { id, name, description, stock, price, imageUrl, isActive }
          })
        })
        .catch(err => {
          console.log('something is error', err)
        })
        .finally(() => {
        })
    },
    editItem (item) {
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      const index = this.products.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.products.splice(index, 1)
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save () {
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
          })
          .catch(err => {
            console.log('something is wrong', err.response.data)
          })
          .finally(() => {

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
          })
          .catch(err => {
            console.log('something is wrong', err.response.data)
          })
          .finally(() => {

          })
      }
      this.close()
    }
  }
}
</script>

<style>

</style>
