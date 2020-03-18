<template>
  <div>
    <NavbarDashboard />
    <div class="container-fluid">
      <div class="row">
        <NavbarSide />
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
