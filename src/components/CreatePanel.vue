<template>
  <div>
      <NavBarPanel/>
      <div class="modal-dialog text-center">
          <div class="col-sm-20 main-section" style="margin-top: 50px;">
              <div class="board-add">
                  <!-- <div class="col-12 user-img">
                      <img src="https://i.pinimg.com/originals/6d/b9/88/6db988869c105086253a0c388796e1ea.gif" alt="" srcset="">
                  </div> -->
                  <div class="col-12 form-input">
                      <form @submit.prevent="create">
                          <h1>Add Product</h1>
                          <div class="form-group">
                              <input type="text" class="form-control" placeholder="Name" v-model="name">
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control" placeholder="Image Url" v-model="image_url" >
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control" placeholder="Price" v-model="price">
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control" placeholder="Stock" v-model="stock">
                          </div>
                          <button type="submit" class="btn btn-success">Add</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axiosCMS from '../config/index'
import NavBarPanel from '../components/NavbarPanel'

export default {
  name: 'CreatePanel',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  components: {
    NavBarPanel
  },
  methods: {
    create () {
      const newProduct = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      axiosCMS({
        method: 'post',
        url: '/products',
        data: newProduct,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.$router.push('/products')
        })
        .catch(({ response }) => {
          console.log(response)
        })
    }
  }
}
</script>

<style>
.board-add{
  background-color: #efbac063;
  opacity: .85;
  margin: 0;
  border-radius: 20px;
  padding: 20px;
  /* padding-top: 100px; */
  height: 827px;
  border: none;

}
</style>
