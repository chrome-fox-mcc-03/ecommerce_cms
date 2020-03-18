<template>
  <div>
    <NavbarDashboard />
    <div class="container-fluid">
      <div class="row">
        <NavbarSide />
        <main class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'
import NavbarSide from '../components/NavbarSideDashboard'
export default {
  components: {
    NavbarDashboard,
    NavbarSide
  }
}
</script>

<style>

</style>
