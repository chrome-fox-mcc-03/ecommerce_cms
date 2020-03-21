<template>
  <div class="row">
    <div class="col s12">
    <h2 class="header brown-text text-darken-2">Item Detail</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img :src="item.imageUrl">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <span class="card-title">{{ item.name }}</span>
          <h5>Rp {{ price }}</h5>
          <h6>{{ item.stock }}</h6>
          <p>{{ item.Category.name }}</p>
        </div>
          <div class="card-action">
            <router-link :to="{ name: 'ItemEdit' }" class="waves-effect waves-light btn left"><i class="material-icons">edit</i></router-link>
            <router-link :to="{ name: 'ItemDelete' }" class="waves-effect waves-light btn red right"><i class="material-icons">delete</i></router-link>
          </div>
        </div>
      </div>
    </div>
    <transition>
      <router-view :item="item" />
    </transition>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'ItemDetail',
  props: {
    itemId: String
  },
  computed: {
    item () {
      return this.$store.state.item
    },
    price () {
      return this.item.price.toLocaleString('id')
    }
  },
  created () {
    // M.AutoInit()
    const elems = document.querySelectorAll('.modal')
    M.Modal.init(elems)
    this.$store.dispatch('fetchOneItem', { itemId: +this.itemId })
  }
}
</script>

<style>

</style>
