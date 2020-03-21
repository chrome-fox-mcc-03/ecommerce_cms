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
  </div>
</template>

<script>
export default {
  name: 'EditCategory',
  data () {
    return {
      name: '',
      id: this.$route.params.id
    }
  },
  created () {
    this.$store.dispatch('getCategory', this.id)
      .then(category => {
        this.name = category.name
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    submitEditCategory () {
      const data = {
        id: this.id,
        name: this.name
      }
      this.$store.dispatch('editCategories', data)
      this.$router.push('/dashboard/category')
    }
  }
}
</script>
