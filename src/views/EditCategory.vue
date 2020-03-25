<template>
  <div class="card">
    <div class="card-header">
      Edit Category
    </div>
    <div class="card-body">
      <form @submit.prevent="submitEditCategory">
      <div class="form-group">
        <label>Name : </label>
        <input v-model="name" type="text" class="form-control" placeholder="enter category name"/>
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
  name: 'EditCategory',
  components: {
    Loading
  },
  data () {
    return {
      name: '',
      id: this.$route.params.id,
      isLoading: false
    }
  },
  created () {
    this.$store.dispatch('getCategory', this.id)
      .then(category => {
        this.name = category.name
      })
      .catch(_ => {
      })
  },
  methods: {
    submitEditCategory () {
      this.isLoading = true
      const data = {
        id: this.id,
        name: this.name
      }
      this.$store.dispatch('editCategories', data)
        .then(result => {
          this.isLoading = false
          const status = {
            title: 'Category Edited!',
            body: 'Category successfully edited.',
            type: 'success',
            canTimeout: true,
            duration: 2000
          }
          this.$vToastify.success(status)
          this.$router.push(result)
        })
        .catch(err => {
          this.isLoading = false
          const status = {
            title: 'Failed!',
            body: err.response.data.errors[0],
            type: 'error',
            canTimeout: true,
            duration: 2000
          }
          this.$vToastify.error(status)
        })
    }
  }
}
</script>
