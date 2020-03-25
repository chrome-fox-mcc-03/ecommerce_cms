<template>
  <div class="card">
    <div class="card-header">
      Add Category
    </div>
    <div class="card-body">
      <form @submit.prevent="submitCategory">
      <div class="form-group">
        <label>Name : </label>
        <input v-model="name" type="text" class="form-control" placeholder="enter category name" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
     <loading :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="true"></loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
export default {
  name: 'AddCategory',
  components: {
    Loading
  },
  data () {
    return {
      name: '',
      isLoading: false
    }
  },
  methods: {
    submitCategory () {
      this.isLoading = true
      this.$store.dispatch('addCategories', this.name)
        .then(result => {
          this.isLoading = false
          this.$router.push(result)
        })
        .catch(_ => {
          this.isLoading = false
        })
    }
  }
}
</script>
