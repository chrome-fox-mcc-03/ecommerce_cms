<template>
  <div id="page-top">
    <div id="wrapper">
      <nav class="navbar navbar-dark align-items-start sidebar
        sidebar-dark accordion bg-gradient-primary p-0">
        <div class="container-fluid d-flex flex-column p-0">
          <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
            href="#">
            <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-drum"></i></div>
            <div class="sidebar-brand-text mx-3"><span>Lalala store</span></div>
          </a>
          <hr class="sidebar-divider my-0">
          <ul class="nav navbar-nav text-light" id="accordionSidebar">
            <li class="nav-item" role="presentation">
              <router-link to="/dashboard" class="nav-link">
                <i class="fas fa-tachometer-alt"></i><span>Dashboard</span>
              </router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link :to="{name: 'Table'}" class="nav-link">
                <i class="fas fa-table"></i><span>Table</span>
              </router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link :to="{name: 'ProductForm'}" class="nav-link">
                <i class="far fa-window-maximize"></i><span>Add Product</span>
              </router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link :to="{name: 'CategoryForm'}" class="nav-link">
                <i class="fas fa-window-maximize"></i><span>Add Category</span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
            <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle mr-3"
                id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
              <form
    class="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group"><input class="bg-light form-control border-0 small"
                    type="text" placeholder="Search for ...">
                  <div class="input-group-append"><button class="btn btn-primary py-0"
                      type="button"><i class="fas fa-search"></i></button></div>
                </div>
              </form>
              <ul class="nav navbar-nav flex-nowrap ml-auto">
                <li class="nav-item dropdown d-sm-none no-arrow"><a class="dropdown-toggle nav-link"
                    data-toggle="dropdown" aria-expanded="false" href="#"><i
                      class="fas fa-search"></i></a>
                  <div class="dropdown-menu dropdown-menu-right p-3 animated--grow-in" role="menu"
                    aria-labelledby="searchDropdown">
                    <form class="form-inline mr-auto navbar-search w-100">
                      <div class="input-group"><input class="bg-light form-control border-0 small"
                          type="text" placeholder="Search for ...">
                        <div class="input-group-append"><button class="btn btn-primary py-0"
                            type="button"><i class="fas fa-search"></i></button></div>
                      </div>
                    </form>
                  </div>
                </li>
                <div class="d-none d-sm-block topbar-divider"></div>
                <li class="nav-item dropdown no-arrow" role="presentation">
                  <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link"
                      data-toggle="dropdown" aria-expanded="false" href="#"><span
                        class="d-none d-lg-inline mr-2 text-gray-600 small">admin</span></a>
                    <div class="dropdown-menu shadow dropdown-menu-right animated--grow-in"
                      role="menu">
                      <a class="dropdown-item" @click="logout"
                        role="presentation" href="#"><i
                    class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <router-view />
        </div>
        <footer class="bg-white sticky-footer">
          <div class="container my-auto">
            <div class="text-center my-auto copyright"><span>Copyright © Hacktiv8 2020</span></div>
          </div>
        </footer>
      </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i
          class="fas fa-angle-up"></i></a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    },
  },
};
</script>

<style>

</style>
