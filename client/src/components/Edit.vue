<template>
  <div>
    <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <Error></Error>
      <h1>Edit Book</h1>
        <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="Product Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="item.name"
            type="text"
            required
            placeholder="Enter name product"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Url Image:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="item.image_url"
            required
            placeholder="Enter url image"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Price:" label-for="input-3">
          <b-form-input id="input-3" v-model="item.price" required placeholder="Enter price" type="number"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Stock:" label-for="input-4">
          <b-form-input id="input-4" v-model="item.stock" required placeholder="Enter stock" type="number"></b-form-input>
        </b-form-group>

          <b-button type="submit" variant="secondary mr-2">Submit</b-button>
          <b-button type="submit" variant="primary" @click="back">Back</b-button>
        </b-form>
    </div>
    <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import Error from './Error'

export default {
  name: 'Edit',
  components: {
    Error
  },
  methods: {
    ...mapActions(['editProduct', 'fetchProduct']),
    ...mapMutations(['SET_LOADING', 'SHOW_ERROR']),
    onSubmit (evt) {
      this.SET_LOADING(true)
      evt.preventDefault()
      this.formSubmit()
    },
    formSubmit () {
      const payload = {
        id: this.id,
        data: this.item
      }
      this.editProduct(payload)
        .then(() => {
          this.fetchProduct()
          this.SET_LOADING(false)
          this.$router.go(-1) // go back by one record
        })
        .catch(err => {
          this.SHOW_ERROR(err.response.data.error)
          this.SET_LOADING(false)
        })
    },
    back () {
      this.$router.push('/products')
    }
  },
  computed: {
    ...mapState(['item', 'id'])
  }
}
</script>

<style>

</style>
