<template>
  <nav class="navbar navbar-light d-flex justify-content-between">
      <h3 class="navbar-brand">SHOPPINGKUY</h3>
      <router-link to="/login">
          <a class="btn btn-link sign-in-btn mr-4 pr-4 pl-4 pt-2 pb-2 shadow">Log In</a>
      </router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
    h3 {
        font-size: 36px !important;
    }
    .navbar {
        width: 85vw;
        background-color: rgb(130, 178, 233);
        padding-right: 12vw;
        padding-left: 12vw;
    }
    .sign-in-btn {
        background-color: rgb(26, 92, 167) !important;
        border-radius: 5px;
        color: white !important;
        cursor: pointer;
    }
    a{
        cursor: pointer;
        text-decoration: none !important;
    }
    a:hover{
        text-decoration: none !important;
    }
</style>
