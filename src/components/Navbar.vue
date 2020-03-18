<template>
  <div v-if="render" class="navbar navbar-expand bg-dark row">
    <div class="col-md-2 text-white d-flex">
      <router-link class="nav-link" to="/">brand</router-link>
      <div v-if="(isLogin || hasToken)" class="mx-2 nav-item active">
        <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
      </div>
    </div>
    <div class="col-md-6 text-white d-flex justify-content-start">
    </div>
    <div class="col-md-4 text-white  d-flex justify-content-center">
      <div v-if="!(isLogin || hasToken)" class="mx-2 nav-item active">
        <router-link class="nav-link" to="/login">Login</router-link>
      </div>
      <div v-if="!(isLogin || hasToken)" class="mx-2 nav-item">
        <router-link class="nav-link" to="/register">Register</router-link>
      </div>
      <div v-if="(isLogin || hasToken)" class="mx-2 nav-item">
        <a href="/logout" class="nav-link" @click.prevent="logout">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      render: true,
      hasToken: false
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state._isLogin,
      appName: state => state.appName
    })
  },
  methods: {
    logout () {
      localStorage.removeItem(this.appName)
      this.hasToken = false
      this.appLogout()
    },
    ...mapActions({
      appLogout: 'logout',
      loginToken: 'loginToken'
    })
  },
  created () {
    const storage = JSON.parse(localStorage.getItem(this.appName))
    // console.log(this.appName, storage, 'navbar')
    if (storage) {
      const { token } = storage
      console.log('tokennya ada')
      this.render = false
      this.loginToken(token)
        .then(_ => {
          console.log(this.$store.state._isLogin)
          this.hasToken = true
          this.render = true
        })
    }
    console.log('navbar created')
  }
}
</script>
