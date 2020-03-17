<template>
  <section class="navbar">
    <button  uk-toggle="target: #login-canvas" class="uk-button uk-button-default">Login</button>
    <button  @click.prevent class="uk-button uk-button-default">Logout</button>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      token: localStorage.getItem('token')
    }
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
