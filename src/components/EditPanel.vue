<template>
   <!-- <div class="modal-dialog text-center"> -->
        <!-- <div class="col-sm-20 main-section"> -->
            <div class="modal-edit">
                <!-- <div class="col-12 user-img">
                    <img src="https://i.pinimg.com/originals/6d/b9/88/6db988869c105086253a0c388796e1ea.gif" alt="" srcset="">
                </div> -->
                <div class="col-12 form-input">
                    <form @submit.prevent="edit" style="justify-content: center;">
                        <h1 style="text-align: center">Edit Task</h1>
                        <div class="form-group">
                            <input type="text" class="form-control"  v-model="name" >
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Title" v-model="image_url">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Title" v-model="price" >
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control"  placeholder="Description" v-model="stock">
                        </div>
                        <button type="submit" style="margin-left:195px; color: white;">Done!</button>
                    </form>
                </div>
            </div>
        <!-- </div> -->
    <!-- </div> -->
</template>

<script>
export default {
  name: 'EditPanel',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    setEditData () {
      this.name = this.product.name
      this.image_url = this.product.image_url
      this.price = this.product.price
      this.stock = this.product.stock
    },
    edit () {
      const id = this.product.id
      const dataEdit = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('edit', { id, dataEdit })
        .then(({ data }) => {
          console.log(dataEdit)
          console.log(data)
          this.$router.push('/products')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    product () {
      return this.$store.getters.editData
    }
  },
  created () {
    this.setEditData()
  }
}
</script>

<style>

</style>
