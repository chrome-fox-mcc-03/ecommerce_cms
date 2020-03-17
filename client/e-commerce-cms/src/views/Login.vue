<template>
  <div id="container-login">
    <h1>Login</h1>
    <form id="loginForm">
      <input class="form-login" type="text" placeholder="Email" />
      <input class="form-login" type="text" placeholder="Password" />
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
export default {}
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
