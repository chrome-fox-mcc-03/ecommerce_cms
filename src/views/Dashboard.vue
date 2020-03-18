<template>
  <div class="row bg-dark">
    <div class="col-md-3">
      <div class="container m-1 bg-light">
        <ul class="list-group">
          <li class="list-group-item">
            <router-link to="/dashboard/products" class="btn btn-sm btn-outline-danger">Show All Product</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/dashboard/create" class="btn btn-sm btn-outline-danger">Add New Product</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-9">
      <div class="container m-1 bg-light">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>
