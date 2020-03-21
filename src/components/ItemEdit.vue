<template>
  <transition name="slide">
  <div id="edit-item" class="row">
    <div class="col s12">
      <div class="card z-depth-3 brown lighten-4">
        <div class="card-content">
          <span class="card-title">Edit Item</span>
          <form id="create-item-form" @submit.prevent="editItem">
            <div class="row">
              <div class="input-field col s12">
                <input v-model="form.name" id="name" type="text" class="validate" required>
                <label for="name" class="active">Item name</label>
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
                <label for="name" class="active">Image url</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <select id="category" class="browser-default" v-model="form.CategoryId">
                  <option disabled selected>Select a category</option>
                  <option
                    v-for="(category, i) in categories" :key="i"
                    :value="i+1"
                  >{{ category }}</option>
                </select>
                <label for="category" class="active">Category Select</label>
              </div>
            </div>

            <div class="row">
              <div class="col s12 center">
                <button type="submit" class="waves-effect waves-light btn-large">Edit Item</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'ItemEdit',
  props: {
    item: Object
  },
  data () {
    return {
      form: {
        id: this.item.id,
        name: this.item.name,
        imageUrl: this.item.imageUrl,
        price: this.item.price,
        stock: this.item.stock,
        CategoryId: this.item.Category.id
      },
      categories: ['rice', 'noodle and pasta', 'meat', 'pastry', 'beverage']
    }
  },
  methods: {
    editItem () {
      this.$store.commit('LOADING')
      this.$store.dispatch('editItem', this.form)
        .then(({ data }) => {
          this.$store.dispatch('fetchOneItem', { itemId: this.item.id })
          this.$router.push(`/admin/${this.item.id}`)
          this.$store.commit('SUCCESS', data.message)
        })
        .catch(err => this.$store.commit('ERROR', err))
        .finally(() => this.$store.commit('LOADING'))
    }
  },
  created () {
    M.AutoInit()
    const elems = document.querySelectorAll('select')
    M.FormSelect.init(elems)
  }
}
</script>

<style>

</style>
