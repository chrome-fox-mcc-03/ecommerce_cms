<template>
  <div id="app">
    <Navbar />
    <!-- <ErrorInfo v-if="errors"/>
    <SuccessInfo v-else-if="success"/> -->
    <div>
      <router-view />
      <Loading v-if="loading"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loading from './components/Loading'
// import ErrorInfo from './components/ErrorInfo'
// import SuccessInfo from './components/SuccessInfo'
import { mapState } from 'vuex'

export default {
  components: {
    Navbar,
    Footer,
    Loading
    // ErrorInfo,
    // SuccessInfo
  },
  computed: {
    ...mapState(['loading', 'errors', 'success'])
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
