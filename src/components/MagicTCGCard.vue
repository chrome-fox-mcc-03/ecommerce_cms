<template>
  <div class="col-3 my-3 " id="product-card">
    <form @submit.prevent="addCard">
      <div class="card" id="real-card">
        <span class="text-capitalize pt-2 px-2">
          <h4>
            {{ data.name }}
          </h4>
        </span>
        <div class="p" style="height:300px">
          <img
            :src="data.image_uris.normal"
            alt="card image"
            class="img-fluid"
            style="max-height:100%"
          />
        </div>
        <div class="card-body pt-1 pb-2 ">
          <p class="card-text my-1">
            <strong>Price :</strong>
            $ {{ cardPrice }}
          </p>
          <div>
            <input
              type="number"
              placeholder="select quantity"
              v-model="stock"
              style="text-align:center"
            />
          </div>
        </div>
        <div class="btn-group mb-0" role="group">
          <button class="btn btn-success" type="submit">
            Add to inventory
            <i class="fas fa-boxes"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});

export default {
  name: "MagicTCGCard",
  props: ["data"],
  computed: {
    cardPrice() {
      if (this.data.prices.usd && this.data.prices.usd >= 1) {
        return this.data.prices.usd;
      } else {
        return 1;
      }
    }
  },
  data() {
    return {
      stock: 0
    };
  },
  methods: {
    addCard() {
      if (this.stock > 0) {
        this.$emit("add-card", {
          name: this.data.name,
          image_url: this.data.image_uris.normal,
          price: this.cardPrice,
          stock: this.stock
        });
        this.stock = 0;
      } else {
        Toast.fire({
          icon: "error",
          title: "Stock must be bigger than 0"
        });
      }
    }
  }
};
</script>

<style scoped>
#product-card {
  min-height: 450px;
  width: 300px;
}
</style>
