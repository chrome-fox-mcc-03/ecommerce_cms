<template>
  <b-modal id="createmodal" title="Add Item" cancel-disabled ok-disabled ok-variant="hidden" cancel-variant="hidden" ok-title="" cancel-title = "">
        <form @submit.prevent="CreateThis">
          Name:<br>
          <input type="text" v-model="form.Name"><br>
          Image_Url:<br>
          <input type="text" v-model="form.Image_Url"><br>
          Stock:<br>
          <input type="number" v-model="form.Stock"><br>
          Price:<br>
          <input type="number" v-model="form.Price"><br>
          <br>
          <input type="submit" value="Create">
        </form>
      </b-modal>
</template>

<script>
export default {
  props: ['form'],
  methods: {
    CreateThis () {
      this.$Progress.start()
      const payload = {
        Name: this.form.Name,
        Image_Url: this.form.Image_Url,
        Price: this.form.Price,
        Stock: this.form.Stock
      }
      console.log(payload)
      this.$store.dispatch('AddItem', payload)
        .then((result) => {
          this.$Progress.finish()
          this.$toasted.show('Create Success!!')
          this.$bvModal.hide('createmodal')
          this.$store.dispatch('FetchProducts')
        })
        .catch((err) => {
          this.$Progress.finish()
          console.log(err)
          this.$toasted.show('Create Failed')
          this.$store.dispatch('FetchProducts')
        })
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
