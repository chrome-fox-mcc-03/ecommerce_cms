<template>
  <div id="create-item" class="row">
    <div class="col s10 offset-s1">
      <div class="card z-depth-3 brown lighten-4">
        <div class="card-content">
          <span class="card-title">Add Item</span>
          <p v-for="category in categories" :key="category.id">{{ category.name }}</p>
          <form id="create-item-form" @submit.prevent="createItem">
            <div class="row">
              <div class="input-field col s12">
                <input v-model="form.name" id="name" type="text" class="validate" required>
                <label for="name">Item name</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s6">
                <input v-model="form.price" id="price" type="number" min="0" class="validate">
                <label for="name" class="active">Price</label>
              </div>
              <div class="input-field col s6">
                <input v-model="form.stock" id="stock" type="number" min="0" class="validate">
                <label for="name" class="active">Stock</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input v-model="form.imageUrl" id="imgaeUrl" type="url" class="validate">
                <label for="name">Image url</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <select v-model="form.CategoryId">
                  <option disabled selected>Select a category</option>
                  <option
                    v-for="(category, i) in categories" :key="i"
                    :value="i+1"
                  >{{ category }}</option>
                </select>
                <label>Category Select</label>
              </div>
            </div>

            <div class="row">
              <div class="col s12 center">
                <button type="submit" class="waves-effect waves-light btn-large">Add New Item</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'ItemCreate',
  data () {
    return {
      form: {
        name: '',
        price: 0,
        stock: 0,
        imageUrl: '',
        CategoryId: ''
      },
      categories: ['rice', 'noodle and pasta', 'meat', 'pastry', 'beverage']
    }
  },
  // computed: {
  //   categories () {
  //     console.log(this.$store.state.categories, 'dari item create')
  //     return this.$store.state.categories
  //   }
  // },
  methods: {
    createItem () {
      this.$store.commit('LOADING')
      this.$store.dispatch('createItem', this.form)
        .then(({ data }) => {
          this.emptyForm()
          this.$store.commit('SUCCESS', data.message)
        })
        .catch(err => this.$store.commit('ERROR', err))
        .finally(() => this.$store.commit('LOADING'))
    },
    emptyForm () {
      this.form.name = ''
      this.form.imageUrl = ''
      this.form.stock = ''
      this.form.price = ''
      this.form.CategoryId = ''
    }
    // fetchCategories () {
    //   Axios({
    //     url: '/categories',
    //     method: 'GET'
    //   })
    //     .then(({ data }) => {
    //       console.log(data, 'dari fetch item create')
    //       this.categories = data.categories
    //     })
    //     .catch(err => this.$store.commit('ERROR', err))
    // }
  },
  beforeCreate () {
    // M.AutoInit()
    M.updateTextFields()
    // this.$store.dispatch('fetchCategories')
    // this.fetchCategories()
  }
}
</script>

<style>

</style>
