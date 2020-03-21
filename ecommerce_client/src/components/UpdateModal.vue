<template>
    <b-modal :id='"Modal"+Product.id' title="Update Item" cancel-disabled ok-disabled ok-variant="hidden" cancel-variant="hidden" ok-title="" cancel-title = "">
        <form>
            Name:<br>
            <input type="text" v-model="Product.Name"><br>
            Image_Url:<br>
            <input type="text" v-model="Product.Image_Url"><br>
            Stock:<br>
            <input type="number" v-model="Product.Stock"><br>
            Price:<br>
            <input type="number" v-model="Product.Price"><br>
            <br>
            <input type="submit" @click.prevent="Update" value="Update">
            <b-button class="button" @click="DeleteThis" variant="danger" :id="Product.id" >Delete</b-button>
        </form>
    </b-modal>
</template>

<script>
export default {
  props: ['Product'],
  data () {
    return {
    }
  },
  methods: {
    Update () {
      const payload = this.Product
      console.log(payload, 'This is Pyaload')
      this.$store.dispatch('UpdateItem', payload)
        .then((result) => {
          this.$toasted.show('Update Successful')
          this.$bvModal.hide(`Modal${this.Product.id}`)
        })
        .catch((err) => {
          console.log(err)
          this.$Progress.finish()
          this.$toasted.error('Update Failed')
        })
    },
    DeleteThis () {
      console.log(this.Product.id)
      const id = this.Product.id
      this.$Progress.start()
      this.$store.dispatch('DeleteItem', id)
        .then((result) => {
          this.$store.dispatch('FetchProducts')
          this.$Progress.finish()
          this.$bvModal.hide(`Modal${this.Product.id}`)
          this.$toasted.show('Delete Successful')
        })
        .catch((err) => {
          console.log(err)
          this.$store.dispatch('FetchProducts')
          this.$Progress.finish()
          this.$toasted.show('Delete Failed')
        })
    }

  }
}
</script>

<style>

</style>
