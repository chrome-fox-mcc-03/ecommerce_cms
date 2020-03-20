<template>
  <div class="sidebar-sticky
          w-100
          pt-5
          bg-secondary
          navbar-dark d-flex
          flex-column
          justify-content-start
          align-items-center
          shadow">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/dashboard/products" class="btn btn-primary text-white">Show Product</router-link>
      </li>
      <li class="nav-item">
         <router-link to="/dashboard/addProduct" class="btn btn-primary text-white mt-3">Add Product</router-link>
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
  height: 90vh;
  width: 15vw;
}
</style>
