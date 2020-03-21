<template>
<nav class="col-md-2 d-none d-md-block bg-light sidebar" style="max-width:14%">
  <div class="sidebar-sticky">
    <ul class="nav flex-column">
      <li class="nav-item">
        <i class="fas fa-home ml-2"></i>
        <router-link to="/dashboard" class="nav-link" style="display:inline-block">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <div class="dropdown">
          <i class="fab fa-product-hunt"></i>
          <a class="btn dropdown-toggle transparent" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Product
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <i class="fas fa-list-alt ml-2"></i><router-link to="/product" class="nav-link" style="display:inline-block">List Product</router-link> <br>
            <i class="fas fa-plus ml-2"></i><router-link to="/product/add" class="nav-link" style="display:inline-block">Add Product</router-link>
          </div>
      </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<style scoped>
  .nav-link {
    color: black;
  }
  .sidebar {
    position:fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  }
  .sidebar-sticky{
    height: calc(100vh - 48px);
    top: 0;
    padding-top: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto;
    position: sticky !important;
  }
  [role="main"] {
    padding-top: 48px
  }
</style>
