<template>
  <div id="app">
    <div id="nav">
          <navbar @logout="logout" />
    </div>
    <router-view @login="login" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  data: function () {
    return {
      dummyUser: {
        name: 'naufal',
        email: 'naufalyunan45@gmail.com',
        password: '12345',
        role: 'admin'
      }
    }
  },
  components: {
    Navbar
  },
  methods: {
    logout: function () {
      localStorage.clear()
      console.log('afasdfasdf')
      console.log(this)
      this.$router.push({ path: 'login' })
    },
    login: function (loginData) {
      const emailInput = loginData.email
      const passwordInput = loginData.password
      if (emailInput === this.dummyUser.email) {
        if (passwordInput === this.dummyUser.password) {
          const token = 'selamat-anda-sudah-login'
          localStorage.setItem('token', token)
          this.$router.push({ path: 'products' })
        } else {
          this.$router.push({ path: 'login' })
        }
      } else {
        this.$router.push({ path: 'login' })
      }
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
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
