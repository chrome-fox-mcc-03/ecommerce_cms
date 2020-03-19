<template>
  <div id="login-canvas" uk-offcanvas>
    <div class="uk-offcanvas-bar">

      <button class="uk-offcanvas-close" type="button" uk-close></button>

      <fieldset class="uk-fieldset">
        <form action='' id="login-form">
          <div class="uk-margin">
            <input v-model="loginEmail" class="uk-input" type="text" placeholder="Email">
          </div>
          <div class="uk-margin">
            <input v-model="loginPassword" class="uk-input" type="password" placeholder="Password">
          </div>
          <div class="uk-margin">
            <button @click.prevent="login()" class="uk-button-text uk-button">Login</button>
          </div>
        </form>
      </fieldset>
    </div>
  </div>
</template>

<script>
import UIkit from 'uikit'
export default {
  name: 'UserLogin',
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
            pos: 'top-right',
            timeout: 1500
          })
        })
    }
  }
}

</script>

<style>
.uk-offcanvas-bar.uk-offcanvas-bar-animation.uk-offcanvas-slide {
  background: rgb(27,38,44);
  background: linear-gradient(180deg, rgba(27,38,44,1) 0%, rgba(15,76,117,1) 100%);
}

#login-form{
  margin-top: 15rem;
}

</style>
