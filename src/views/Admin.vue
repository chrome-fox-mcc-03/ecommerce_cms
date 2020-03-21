<template>
  <div class="admin">
    <Navbar />
    <Sidebar />
    <div id="content" class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
// import Items from '../components/Items'

export default {
  components: {
    Navbar,
    Sidebar
    // Items
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
