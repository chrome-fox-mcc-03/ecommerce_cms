<template>
  <div id="side-nav">
    <ul id="sidenav-content" class="sidenav sidenav-fixed brown lighten-4">
      <li>
        <div class="user-view">
          <div id="nav-logo">
            <img src="../assets/logo.png">
            <span></span>
          </div>
        </div>
      </li>
      <li><div class="divider"></div></li>
      <li class="no-padding">
        <ul class="collapsible collapsible-accordion">
          <li class=" brown lighten-4">
            <a class="collapsible-header">Categories<i class="material-icons right">arrow_drop_down</i></a>
            <div class="collapsible-body">
              <ul class="brown lighten-4">
                <li @click="filterItem(null)"><router-link to="/admin">All Items</router-link></li>
                <li
                  v-for="category in categories"
                  :key="category.id"
                  @click="filterItem(category.id)"
                >
                  <router-link to="/admin">{{ category.name }}</router-link>
                </li>
                <li><div class="divider"></div></li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
      <li><router-link :to="{ name: 'ItemCreate' }">Add Item</router-link></li>
    </ul>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'Sidebar',
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    filterItem (CategoryId) {
      this.$store.commit('SET_FILTERID', CategoryId)
    }
  },
  mounted () {
    M.AutoInit()
    this.$store.dispatch('fetchCategories')
  }
}
</script>

<style>

</style>
