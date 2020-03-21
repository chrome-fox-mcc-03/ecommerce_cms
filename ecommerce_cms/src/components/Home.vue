<template>
  <div id="home">
    <div style="margin-left: 50px">
      <h1>
        Welcome back, {{ $store.state.name }}
      </h1>
      <h3 class="text-secondary">
        Here's what happening <br>
        with your store today.
      </h3>
      <div class="d-flex text-secondary">
        <p>Today's total sales<br><span class="font-weight-bold text-dark">Rp {{ $store.state.totalSale }}</span></p>
        <p class="col-10">Today's Visit<br><span class="font-weight-bold text-dark">{{ $store.state.totalVisit }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#home {
  background-image: url('../assets/backgroundH.png');
  height: 90vh;
}

</style>
