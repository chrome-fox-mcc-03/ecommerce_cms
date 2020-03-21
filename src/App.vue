<template>
  <div id="app bg-light">
      <!-- <LandingPage></LandingPage> -->
      <!-- <Home></Home> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <router-view/>
  </div>
</template>
<script>
// import Home from './views/Home'
// import LandingPage from './components/LandingPage'
export default {
  name: 'App',
  data () {
    return {
      testUser: {
        email: 'testadmin@mail.com',
        password: 'iamadmin',
        role: 'admin'
      }

    }
  },
  components: {
    // Home,
    // LandingPage
  },
  methods: {}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
