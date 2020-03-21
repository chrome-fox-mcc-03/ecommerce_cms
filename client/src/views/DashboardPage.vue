<template>
  <div>
    <NavbarDashboard />
    <div class="container-fluid">
      <div class="row">
        <NavbarSide />
        <main class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <img class="img-fluid" src="../assets/undraw_warning_cyit.png" style="max-height:600px">
          <span style="position:static;left:800px;top:500px;font-size:70px">Underconstruction</span>
        </main>
      </div>
        <!-- <div class="container mt-5">
          <span>underconstruction</span>
        </div> -->
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
