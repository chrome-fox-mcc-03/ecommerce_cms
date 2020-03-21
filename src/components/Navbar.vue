<template>
  <div>
    <div class="navbar-fixed">
      <nav class="brown lighten-4">
        <div class="nav-wrapper">
          <a href="#" data-target="sidenav-content" class="sidenav-trigger left" @click.prevent=""><i class="material-icons">menu</i></a>
          <a href="#!" class="brand-logo" @click.prevent="">Vood App</a>
          <ul class="right">
            <li>
              <a class="dropdown-trigger" href="#!" data-target="logout-dropdown" @click.prevent="">
                {{ username }}
                <i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <li><a href="#" disable></a></li>
          </ul>
        </div>
      </nav>
    </div>

    <div id="logout-content">
      <ul id="logout-dropdown" class="dropdown-content">
        <li class="divider"></li>
        <li><a href="#!" @click.prevent="logout">Logout</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'Navbar',
  methods: {
    logout () {
      const username = localStorage.getItem('username')
      localStorage.clear()
      this.$router.push('/')
      this.$store.commit('SUCCESS', `Logout successful. Goodbye ${username}`)
    }
  },
  computed: {
    username () {
      return localStorage.getItem('username')
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

<style>

</style>
