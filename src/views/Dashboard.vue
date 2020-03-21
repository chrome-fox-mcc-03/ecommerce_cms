<template>
<div>
  <div class="d-flex" id="wrapper">
    <div class="border-right" id="sidebar-wrapper" style="background-color: #0063ff">
      <div class="sidebar-heading text-white">ADMIN</div>
      <div class="list-group list-group-flush">
        <router-link to="/dashboard/products" class="list-group-item list-group-item-action text-white mb-2" style="background-color: #0063ff">Products</router-link>
        <router-link to="/dashboard/create" class="list-group-item list-group-item-action text-white mb-2" style="background-color: #0063ff">Add Product</router-link>
        <router-link to="/dashboard/profile" class="list-group-item list-group-item-action text-white mb-2" style="background-color: #0063ff">Profile</router-link>
        <a style="cursor: pointer; background-color: #0063ff;" @click="logout" class="list-group-item list-group-item-action text-white">Logout</a>
      </div>
    </div>
    <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light border-bottom" style="background-color: #a8d8ea">
        <button class="btn btn-primary" id="menu-toggle">Menu</button>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
export default {
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('SET_LOGIN', false)
      this.$router.push('/login')
      this.$toasted.success('Thanks for coming Admin!!')
    }
  },
  mounted () {
    $('#menu-toggle').click(function (e) {
      e.preventDefault()
      $('#wrapper').toggleClass('toggled')
    })
  }
}

</script>

<style scoped>
body {
  overflow-x: hidden;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>
