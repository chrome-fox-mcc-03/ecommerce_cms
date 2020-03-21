<template>
  <div class='landing'>
    <img src="../assets/landing_logo.svg" alt="">
    <div class="landing-login uk-card-hover">
      <form id="login-form">
        <div class="uk-margin">
          <input v-model="loginEmail" class="uk-input" type="text" placeholder="Email">
        </div>
        <div class="uk-margin">
          <input v-model="loginPassword" class="uk-input" type="password" placeholder="Password">
        </div>
        <div class="uk-margin btn-login">
          <button @click.prevent="login()" class="uk-button-text uk-button">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import UIkit from 'uikit'
export default {
  data () {
    return {
      loginEmail: '',
      loginPassword: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.loginEmail,
        password: this.loginPassword
      }
      this.$store.dispatch('login', payload)
        .then(response => {
          localStorage.setItem('token', response.data.token)
          this.$router.push({ path: 'products' })
          this.$store.commit('SET_ISLOGIN', true)
          UIkit.offcanvas('#login-canvas').hide()
          UIkit.notification({
            message: `Welcome back ${response.data.fullname}`,
            status: 'primary',
            pos: 'top-right',
            timeout: 1500
          })
          this.loginEmail = ''
          this.loginPassword = ''
        })
        .catch(err => {
          UIkit.notification({
            message: `${err.response.data.message}`,
            status: 'danger',
            pos: 'bottom-center',
            timeout: 1500
          })
        })
    }
  }
}

</script>

<style>
.landing {
  padding-top: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 89vh;
  margin: auto;
  background-image: url('../assets/bg.svg')
}
.landing-login{
  top:10;
  margin: 0;
  display: flex;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  border: 3px solid gray;
  border-radius: 15px;
  padding: 15px;
  background-color: white;
}
.btn-login{
  width: fit-content;
  margin: auto;
}
.uk-notification-message{
  border-radius: 15px;
}
</style>
