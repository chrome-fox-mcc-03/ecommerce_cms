<template>
  <div id="app">
    <Navbar/>
    <MessageError v-if="isError" />
    <div class="container">
      <div class="row">
        <div class="col-3">
          <Sidebar v-if="isLogin" />
        </div>
        <div class="col-9">
          <router-view/>
          <Loading v-if="isLoading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Loading from './components/Loading'
import MessageError from './components/MessageError'

export default {
  name: 'EcommerceCMS',
  data () {
    return {
    }
  },
  components: {
    Navbar,
    Sidebar,
    Loading,
    MessageError
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    },
    isLoading () {
      return this.$store.state.isLoading
    },
    isError () {
      return this.$store.state.isError
    }
  },
  created () {
    const token = localStorage.getItem('access_token')
    if (!token) {
      this.$router.push('/login')
      this.$store.commit('SET_LOGIN', false)
    } else {
      this.$store.commit('SET_LOGIN', true)
      this.$store.dispatch('getProducts')
      this.$store.dispatch('getUsers')
    }
  }
}
</script>

<style scoped>
  .container {
    height: 100vh;
    max-width: 100%;
  }
</style>
