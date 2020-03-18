<template>
<nav class="col-md-2 d-none d-md-block bg-light sidebar">
  <div class="sidebar-sticky">
      <ul class="nav flex-column">
          <li class="nav-item">
              <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item">
              <div class="dropdown">
                <a class="btn dropdown-toggle transparent" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Product
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <router-link to="/product" class="nav-link">List Product</router-link>
                    <router-link to="/product/add" class="nav-link">Add Product</router-link>
                </div>
            </div>
          </li>
      </ul>
  </div>
</nav>
</template>

<style scoped>
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
