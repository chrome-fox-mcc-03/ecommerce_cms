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
  </div>
</template>

<script>
export default {
  name: 'AddCategory',
  data () {
    return {
      name
    }
  },
  methods: {
    submitCategory () {
      this.$store.dispatch('addCategories', this.name)
      this.$router.push('category')
    }
  }
}
</script>
