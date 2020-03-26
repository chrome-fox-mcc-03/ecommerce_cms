<template>
  <div id="app">
    <!-- <div v-if="notification">
      {{notification.msg}}
    </div> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  // computed itu getter
  // caching, cache? compute functionnya disimpan di cache
  computed: {
  },
  // lifecycle ada created mounted
  // dijalankan ketika komponen di render
  created () {
    const token = localStorage.getItem('token')
    if (token) {
      this.$router.push({ path: 'product' })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Barlow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
