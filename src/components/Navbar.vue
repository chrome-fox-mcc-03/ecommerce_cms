<template>
  <section class="navbar">
    <button uk-toggle="target: #login-canvas" class="uk-button uk-button-default">Login</button>
  </section>
</template>

<script>
export default {
  name: 'Navbar'
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
</style>
