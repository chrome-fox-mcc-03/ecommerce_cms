<template>
 <div class="d-flex align-items-center flex-column pt-5" style="width:100vw;height:100vh">
   <h1 class="display-4 mb-5">SHOPPINGKUY</h1>
  <div class="d-flex container" style="width:30vw;height:50vh">
    <form>
      <h1 class="display-6">Sign In</h1>
      <small class="form-text text-muted  mb-4">Manage your store now</small>
      <div class="form-group">
        <input type="email" class="form-control pt-4 pb-4" placeholder="Email">
        <small class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <input type="password" class="form-control pt-4 pb-4" placeholder="Password">
      </div>
      <div class="d-flex">
        <button type="submit" class="btn btn-primary pt-3 pb-3 pr-4 pl-4 ">Log In</button>
        <button class='btn btn-link'>Sign Up Here</button>
      </div>
    </form>
  </div>
  <footer>SHOPPINGKUY &copy; Adam Primarizki</footer>
 </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
form{
  width: 100%;
}
.btn-primary{
  background-color: rgb(26, 92, 167) !important;
}
</style>
