<template>
  <div class="signin-page container">
    <form>
    <h2>SIGN IN AS ADMIN</h2>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <router-link to="/" type="submit" class="btn btn-primary">Submit</router-link>
  </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
