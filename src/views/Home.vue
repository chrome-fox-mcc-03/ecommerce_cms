<template>
  <div class="row">
    <div class="col-lg-3">
     <div class="nav flex-column nav-pills" aria-orientation="vertical">
      <a class="nav-link active" role="tab">Product</a>
      <a class="nav-link" role="tab">Category</a>
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
  name: 'Home'
}
</script>
