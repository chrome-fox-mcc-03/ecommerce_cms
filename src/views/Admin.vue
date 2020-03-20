<template>
  <div class="admin">
    <Navbar />
    <Sidebar />

    <div id="content" class="container">
      <div class="row">
        <div class="col s12">
          <h3 class="brown-text text-darken-2">Item List</h3>
          <ItemCard
            v-for="(item, i) in 12" :key="i"
            @click.native="itemDetails(i)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ItemCard from '../components/ItemCard'
export default {
  components: {
    Navbar,
    Sidebar,
    ItemCard
  },
  methods: {
    itemDetails (id) {
      console.log('detiilll', id)
    }
  },
  mounted () {
    M.AutoInit()
    const elems = document.querySelectorAll('.dropdown-trigger')
    M.Dropdown.init(elems, {
      coverTrigger: false
    })
  }
}
</script>

<style scoped>
  #content {
    padding-left: 200px;
  }

  @media only screen and (max-width : 992px) {
    #content {
      padding-left: 0;
    }
  }
</style>
