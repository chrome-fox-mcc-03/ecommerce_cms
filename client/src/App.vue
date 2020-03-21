<template>
  <div id="app">
    <navbar/>
      <div class="container">
        <router-view/>
      </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
	components: {
		Navbar
	},
	created () {
		if (localStorage.getItem('token')) {
			this.$store.commit('SET_ISLOGIN', true)
		}
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* height: 100%; */
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
}

.container {
  padding-top: 60px !important;
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
