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
import { mapState, mapActions, mapMutations } from 'vuex'
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
    ...mapMutations({
      userLogin: 'userLogin',
      stopLoading: 'stopLoading',
      startLoading: 'startLoading'
    }),
    ...mapActions({
      appLogout: 'logout',
      loginToken: 'loginToken'
    })
  },
  mounted () {
    const storage = JSON.parse(localStorage.getItem(this.appName))
    // console.log(this.appName, storage, 'navbar')
    if (storage) {
      const { token } = storage
      if (token) {
        console.log('tokennya ada')
        this.render = false
        this.loginToken({ token })
          .then(result => {
            this.userLogin({ payload: { id: result.data.id, email: result.data.email, token: result.data.access_token } })
            this.hasToken = true
          })
          .catch(err => {
            console.log(err.response.data)
          })
          .finally(_ => {
            this.stopLoading()
            this.render = true
          })
      }
    }
    // console.log('navbar created')
  }
}
</script>
