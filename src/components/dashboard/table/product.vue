<template>
  <div class="card shadow">
    <v-dialog></v-dialog>
    <div class="card-header py-3">
      <p class="text-primary m-0 font-weight-bold">Product info</p>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6 text-nowrap">
          <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable">
            <label>Show&nbsp;<select
                class="form-control form-control-sm custom-select custom-select-sm">
                <option value="10" selected="">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>&nbsp;</label></div>
        </div>
        <div class="col-md-6">
          <div class="text-md-right dataTables_filter" id="dataTable_filter"><label><input
                type="search" class="form-control form-control-sm" aria-controls="dataTable"
                placeholder="Search"></label></div>
        </div>
      </div>
      <div class="table-responsive table mt-2" id="dataTable" role="grid"
        aria-describedby="dataTable_info">
        <table class="table dataTable my-0" id="dataTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Image URL</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th class="text-center">Action</th>
            </tr>
          </thead>

          <tbody v-for="product in products" :key="product.id">
            <tr>
              <td>{{ product.name }}</td>
              <td style="white-space: pre">{{ product.description }}</td>
              <td>
                <a :href="product.image_url">Image Link</a>
              </td>
              <td>{{ currency(product.price) }}</td>
              <td>{{ product.stock }}</td>
              <td>{{ product.Category.name }}</td>
              <td>
                <div class="d-flex justify-content-around">
                  <router-link :to="{ name: 'editproduct', params: { product: product }}">
                    <a href="#"><i class="far fa-edit"></i></a>
                  </router-link>
                  <div>
                    <p>|</p>
                  </div>
                  <a href="#" @click="deleteProduct(product.id)"><i
                      class="far fa-trash-alt"></i></a>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td><strong>Name</strong></td>
              <td><strong>Description</strong></td>
              <td><strong>Image URL</strong></td>
              <td><strong>Price</strong></td>
              <td><strong>Stock</strong></td>
              <td><strong>Category</strong></td>
              <td><strong>Action</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="row">
        <div class="col-md-6 align-self-center">
          <p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">Showing 1
            to 10 of {{ products.length }}</p>
        </div>
        <div class="col-md-6">
          <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
            <!-- <ul class="pagination">
              <li class="page-item disabled"><a class="page-link" href="#"
                  aria-label="Previous"><span aria-hidden="true">«</span></a></li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span
                    aria-hidden="true">»</span></a></li>
            </ul> -->
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    getProduct() {
      this.$store.dispatch('getProduct');
    },
    currency(num) {
      return num.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
    },
    deleteProduct(id) {
      this.$modal.show('dialog', {
        title: 'Delete confirmation',
        text: 'Are you sure to delete this task?',
        buttons: [{
          title: 'Cancel',
          handler: () => {
            this.$modal.hide('dialog');
          },
        },
        {
          title: 'Delete',
          handler: () => {
            this.$store.dispatch('deleteProduct', id)
              .then(() => {
                // taruh notifikasi nanti
                this.$modal.hide('dialog');
                this.getProduct();
              })
              .catch((err) => {
                this.$modal.hide('dialog');
                this.$toasted.show(err.response.data.errors[0], {
                  theme: 'bubble',
                  position: 'top-right',
                  duration: 3000,
                });
              });
          },
        },
        ],
      });
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style>

</style>
