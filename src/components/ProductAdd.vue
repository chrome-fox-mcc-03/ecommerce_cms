<template>
  <div class="container-fluid" id="add-form">
    <div v-if="isLoading">
      <Loading></Loading>
    </div>
    <form class="pb-3" @submit.prevent="addProduct" v-else>
      <h1>Add a new Product</h1>
      <div class="form-row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Enter product name"
            required
            v-model="name"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Enter product price"
            required
            v-model="price"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="col">
          <input
            type="number"
            class="form-control"
            placeholder="Enter product stock"
            required
            v-model="stock"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Enter product image (Optional)"
            v-model="image_url"
          />
        </div>
      </div>
      <input type="submit" value="Add" class="btn btn-primary btn-block mt-3" />
    </form>
  </div>
</template>

<script>
import Loading from "../components/Loading";
export default {
  name: "ProductAdd",
  data() {
    return {
      name: null,
      image_url: null,
      price: null,
      stock: null
    };
  },
  methods: {
    addProduct() {
      this.$emit("add-product", {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      });
      this.name = null;
      this.image_url = null;
      this.price = null;
      this.stock = null;
    }
  },
  components: {
    Loading
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>

<style scoped>
#add-form {
  background-color: #ffcbcb;
  margin-top: 10px;
}

h1 {
  background-color: white;
}
</style>

// "name" : "Green Socks", // "image_url" :
"https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg", //
"price" : "10000", // "stock" : 2,
