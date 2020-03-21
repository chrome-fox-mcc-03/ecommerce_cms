<template>
  <div class="row">
    <div class="col-lg-3">
     <div class="nav flex-column nav-pills" aria-orientation="vertical">
      <router-link tag="a" to="/dashboard/product" :class="[currentPage.includes('product') ? 'active' : '', 'nav-link']" role="tab">Product</router-link>
      <router-link tag="a" to="/dashboard/category" :class="[currentPage.includes('category') ? 'active' : '', 'nav-link']" role="tab">Category</router-link>
    </div>
    </div>
    <div class="col-lg-9">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  computed: {
    currentPage () {
      return this.$route.path
    }
  }
}
</script>
