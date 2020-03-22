<template>
    <div id="login-page">
        <h1 class="logo">JualOnline-CMS</h1><br><br>
        <div class="regist-form"><br>
        <h2>Login for Admin</h2><br><br>
        <form id="login/register">
            <input type="text" id="email" v-model="email" placeholder="E-mail"><br>
            <input type="password" id="password" v-model="password" placeholder="Password"><br><br>
            <button v-on:click.prevent="login()">Login</button>
        </form><br><br>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
      // .then(() => {
      //   this.$router.push({ path: '/' })
      // })
    }
  }
}
</script>

<style>
    #login-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>
