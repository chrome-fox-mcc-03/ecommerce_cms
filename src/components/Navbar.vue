<template>
  <section class="navbar">
    <button v-if="!isLogin" uk-toggle="target: #login-canvas" class="uk-button uk-button-default">Login</button>
    <button v-if="isLogin" @click.prevent="logout()" class="uk-button uk-button-default">Logout</button>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  methods: {
    logout () {
      this.$emit('logout')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  created () {
  }
}

</script>

<style scoped>
  .navbar{
    background-color: #1b262c;
    height: 40px;
    width: 100vw;
  }
  .uk-button{
    border: none;
    color: white;
    height: 40px
  }

  button.uk-button.uk-button-default:focus{
    color: white;
    background-color: #1b262c;
  }

  button.uk-button.uk-button-default:focus:hover{
    background-color: white;
    color: #1b262c;
  }

  .uk-button:hover{
    background-color: white;
    color: #1b262c;
  }
  .router-link-exact-active.router-link-active{
    color: white;
    background-color: #1b262c;
    font-weight: bold;
  }
</style>
