<template>
  <div class="card">
    <div class="card-header">
      Category
    </div>
    <div class="card-body">
      <button class="btn btn-primary" @click="addCategory">Add Category</button>
      <br>
      <br>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(category, index) in $store.state.categories" :key="category.id">
            <td>{{ index + 1 }}</td>
            <td>{{ category.name }}</td>
            <td>
              <button class="btn btn-primary" @click="editCategory(category.id)">Edit</button> |
              <button class="btn btn-danger" @click="deleteCategory(category.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryList',
  created () {
    this.$store.dispatch('getCategories')
  },
  methods: {
    addCategory () {
      this.$router.push('addcategory')
    },
    editCategory (id) {
      this.$router.push(`/dashboard/editcategory/${id}`)
    },
    deleteCategory (id) {
      this.$store.dispatch('deleteCategory', id)
    }
  }
}
</script>
