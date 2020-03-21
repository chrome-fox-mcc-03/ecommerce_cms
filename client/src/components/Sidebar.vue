<template>
  <div class="sidebar-sticky
          pt-5
          mt-5
          d-flex
          flex-column
          justify-content-start
          align-items-center
          border
          rounded
          bg-dark
          shadow">
    <div class="mb-2">
      <h4 class="text-white">Admin Features</h4>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/dashboard/products" class="btn btn-primary text-white"><i class="fas fa-list"> Show Product</i></router-link>
      </li>
      <li class="nav-item">
         <router-link to="/dashboard/addProduct" class="btn btn-primary text-white mt-3"><i class="fas fa-plus-square"> Add Product</i></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style>
.sidebar-sticky {
  height: 50vh;
  width: 15vw;
  margin-left: 15em;
}
</style>
