<template>
  <div id="container-login">
    <h1>Login</h1>
    <form id="loginForm" @submit.prevent="login">
      <input v-model="email" class="form-login" type="text" placeholder="Email" />
      <input v-model="password" class="form-login" type="text" placeholder="Password" />
      <input type="submit" value="submit" />
    </form>
    <router-link to="/register">Doesn't have an account? Register Here</router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const loginData = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', loginData)
        .then(result => {
          const condition = {
            icon: 'success',
            title: 'Login Succesfull'
          }
          this.$store.dispatch('notification', condition)
          const token = result.data.token
          localStorage.setItem('token', token)
          this.$store.commit('SET_LOGIN', true)
          this.$router.push({ path: 'products' })
        })
        .catch(err => {
          const condition = {
            icon: 'error',
            title: err.response.data.message
          }
          this.$store.dispatch('notification', condition)
          console.log(err.response.data)
          this.$router.push({ path: 'login' })
        })
        .finally(_ => {
          this.$store.commit('SET_ISLOADING', false)
        })
    }
  }
}

</script>

<style>
#container-login{
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#loginForm{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.form-login{
  margin: 5px
}
</style>
