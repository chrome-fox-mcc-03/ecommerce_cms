<template>
  <div class="pt-3 mt-3" id="base">
    <div id="product-list">
      <h1>This is all the product(s) you currently has</h1>
    </div>
    <hr />
    <div class="row">
      <ProductCard
        v-for="product in productList"
        :key="product.id"
        :product="product"
        @delete-product="deleteProduct"
        @edit-product="editProduct"
      >
      </ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  name: "ProductList",
  components: {
    ProductCard
  },
  data() {
    return {};
  },
  created() {
    this.$emit("fetch-data");
  },
  props: ["productList"],
  methods: {
    deleteProduct(payload) {
      this.$emit("delete-product", payload);
    },
    editProduct(payload) {
      this.$emit("edit-product", payload)
    }
  }
};
</script>

<style scoped>
#product-list {
  background-color: white;
}

#base {
  background-color: #ffcbcb;
}

</style>
