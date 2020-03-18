<template>
    <div>
        <div class="navbar-dashboard">
        <Navbar/>
        </div>
        <div class="container-form">
          <div class="card card-addProduct">
            <h3>Add Product</h3>
            <form v-on:submit.prevent="addProduct()">
              <div class="field">
                <div class="control">
                  <input v-model="name" class="input is-primary" type="text" placeholder="Name Product">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input v-model="image_url" class="input is-primary" type="text" placeholder="Image Url">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input v-model="price" class="input is-primary" type="text" placeholder="Price">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input v-model="stock" class="input is-primary" type="text" placeholder="Stock">
                </div>
              </div>
              <button type="submit" class="button is-primary is-outlined">Add Product</button>
            </form>
          </div>
        </div>
    </div>
</template>
<script>
import Navbar from '../components/Navbar'
import axios from 'axios'
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  components: {
    Navbar
  },
  methods: {
    addProduct () {
      axios({
        method: 'post',
        url: 'http://localhost:3000/products',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: this.name,
          image_url: this.image_url,
          price: this.price,
          stock: this.stock
        }
      })
        .then(response => {
          console.log(response.data)
          this.$toasted.success('Success add product')
          this.$router.push('/dashboard')
        })
        .catch(error => {
          const errors = error.response.data.errors
          for (let i = 0; i < errors; i++) {
            this.$toasted.error(errors[i])
          }
          this.$toasted.error(errors[0])
          console.log(errors)
        })
    }
  }
}
</script>
