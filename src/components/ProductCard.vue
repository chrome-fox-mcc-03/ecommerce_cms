<template>
  <div class="col-3 my-3 " id="product-card">
    <div v-if="isLoading">
      <Loading></Loading>
    </div>
    <div v-else>
      <div class="card" id="real-card" v-if="!isEditing">
        <span class="text-capitalize pt-2 px-2">
          <h4>
            {{ product.name }}
          </h4>
        </span>
        <div class="p" style="height:300px">
          <img
            :src="product.image_url"
            alt="card image"
            class="img-fluid"
            style="max-height:100%"
          />
        </div>
        <div class="card-body pt-1 pb-2 ">
          <p class="card-text my-1">
            <strong>Price :</strong>
            $
            {{ product.price }}
          </p>
          <p class="card-text my-1">
            <strong>Stock : </strong> {{ product.stock }}
          </p>
        </div>
        <div class="btn-group mb-0" role="group">
          <button type="button" class="btn btn-warning" @click="showEdit">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="btn btn-danger" @click="deleteProduct">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
      <div class="card" id="edit-card" v-else>
        <div
          class="card-header d-flex justify-content-between align-items-center py-0 "
        >
          <div><strong>EDIT MODE</strong></div>
          <div>
            <button type="button" class="btn" @click="closeEdit">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <form class="pt-2 mt-0" @submit.prevent="editProduct">
          <div class="pb-2">
            <input type="text" v-model="edited.name" required />
          </div>
          <div style="height:300px">
            <img
              :src="product.image_url"
              alt="card image"
              class="img-fluid"
              style="max-height:100%"
            />
          </div>
          <div class="card-body pt-1 pb-2 ">
            <div class="d-flex justify-content-center align-items-center">
              <div class="mr-1">
                <strong>Image url:</strong>
              </div>
              <div>
                <input type="text" v-model="edited.image_url" size="12" />
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="mr-1">
                <strong>Price: $</strong>
              </div>
              <div>
                <input type="text" v-model="edited.price" size="5" required />
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="mr-1">
                <strong>Stock:</strong>
              </div>
              <div>
                <input type="number" v-model="edited.stock" size="5" required />
              </div>
            </div>
          </div>
          <div class="btn-group mb-0" role="group" style="width:100%">
            <button class="btn btn-warning" style="width:50%" type="submit">
              <i class="fas fa-edit"></i>
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteProduct"
              style="width:50%"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "../components/Loading";

export default {
  name: "ProductCard",
  props: ["product"],
  data() {
    return {
      isEditing: false,
      edited: {
        name: this.product.name,
        price: this.product.price,
        stock: this.product.stock,
        image_url: this.product.image_url
      }
    };
  },
  methods: {
    deleteProduct() {
      this.$emit("delete-product", {
        id: this.product.id
      });
    },
    showEdit() {
      this.isEditing = true;
    },
    closeEdit() {
      this.isEditing = false;
    },
    editProduct() {
      this.$emit("edit-product", {
        id: this.product.id,
        name: this.edited.name,
        price: this.edited.price,
        stock: this.edited.stock,
        image_url: this.edited.image_url
      });
      this.isEditing = false;
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
#product-card {
  min-height: 450px;
  width: 300px;
}
</style>
