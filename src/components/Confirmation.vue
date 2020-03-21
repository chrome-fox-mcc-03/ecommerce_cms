<template>
 <div class="row">
    <div class="col s6 offset-s3">
      <div class="card brown lighten-4">
        <div class="card-content white-text">
          <span class="card-title">Delete Confirmation</span>
          <h6>Are you sure want to delete this item?</h6>
        </div>
        <div class="card-action">
          <a href="#" class="waves-effect waves-light btn left" @click.prevent="deleteItem">YES</a>
          <a href="#" class="waves-effect waves-light btn red right" @click.prevent="$router.push(`/admin/${itemId}`)">NO</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'Confirmation',
  props: {
    itemId: String
  },
  methods: {
    deleteItem () {
      this.$store.commit('LOADING')
      this.$store.dispatch('deleteItem', { itemId: +this.itemId })
        .then(({ data }) => {
          this.$router.push('/admin')
          this.$store.commit('SUCCESS', data.message)
        })
        .catch(err => this.$store.commit('ERROR', err))
        .finally(() => this.$store.commit('LOADING'))
    }
  },
  created () {
    // M.AutoInit()
    const elems = document.querySelectorAll('.modal')
    M.Modal.init(elems)
  }
}
</script>

<style scoped>
  .card-action {
    height: 4rem;
  }
</style>
