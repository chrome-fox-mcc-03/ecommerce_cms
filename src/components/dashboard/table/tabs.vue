<template>
<div class="container-fluid">
  <h3 class="text-dark mb-4">List</h3>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" @click="getProduct"><a class="nav-link active" role="tab"
          data-toggle="tab" href="#tab-1">Products</a></li>
      <li class="nav-item"><a class="nav-link" role="tab" data-toggle="tab"
          href="#tab-2">Categories</a></li>
      <li class="nav-item"><a class="nav-link" role="tab" data-toggle="tab" href="#tab-3">Tab 3</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active" role="tabpanel" id="tab-1">
        <product-tab />
      </div>
      <div class="tab-pane" role="tabpanel" id="tab-2">
        <category-tab />
      </div>
      <div class="tab-pane" role="tabpanel" id="tab-3">
        <p>Content for tab 3.</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ProductTab from './product.vue';
import CategoryTab from './category.vue';

export default {
  components: {
    ProductTab,
    CategoryTab,
  },
  methods: {
    getProduct() {
      this.$store.dispatch('getProduct');
    },
  },
};
</script>

<style>

</style>
