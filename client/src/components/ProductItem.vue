<template>
<div class="col-md-3">
  <div class="card mb-3 shadow-sm text-center">
    <div class="p-3">
      <img class="img-fluid" :src="data.image_url" alt="">
    </div>
    <div class="card-body">
      <h5 class="text-capitalize mt-0 mb-0">{{data.name}}</h5> <br>
      <span class="text-capitalize">Rp {{data.price}}</span> <br>
      <span class="text-capitalize">Stock: {{data.stock}}</span> <br>
      <div class="mt-3">
        <router-link class="btn btn-primary btn-sm mr-3" to="/product/edit" :data="data">Update</router-link>
        <button class="btn btn-primary btn-sm" @click="deleteProduct(data.id)">Delete</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      token: localStorage.getItem('token')
    }
  },
  props: ['data'],
  methods: {
    deleteProduct (id) {
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/product/${id}`,
        headers: {
          token: this.token
        }
      })
        .then((result) => {
          this.$router.push('/product')
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  .img-fluid {
    max-width:100%;
    height: 200px;
  }
</style>
