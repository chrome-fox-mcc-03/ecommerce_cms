<template>
  <div class="card shadow">
    <v-dialog></v-dialog>
    <div class="card-header py-3">
      <p class="text-primary m-0 font-weight-bold">Category Info</p>
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
            <tr class="text-center">
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="category in categories" :key="category.id">
            <tr>
              <td>{{ category.name }}</td>
              <td>
                <div class="d-flex justify-content-center">
                  <router-link :to="{ name: 'editcategory', params: { category: category }}">
                    <a href="#"><i class="far fa-edit"></i></a>
                  </router-link>
                  <div>
                    <p class="mr-4 ml-4">|</p>
                  </div>
                  <a href="#" @click="deleteCategory(category.id)"><i
                      class="far fa-trash-alt"></i></a>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="text-center">
              <td><strong>Name</strong></td>
              <td><strong>Action</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="row">
        <div class="col-md-6 align-self-center">
          <p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">Showing 1
            to 10 of {{ categories.length }}</p>
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
  name: 'CategoryTable',
  methods: {
    deleteCategory(id) {
      this.$modal.show('dialog', {
        title: 'Delete confirmation',
        text: 'Are you sure to delete this category? All your related products will also deleted',
        buttons: [{
          title: 'Cancel',
          handler: () => {
            this.$modal.hide('dialog');
          },
        },
        {
          title: 'Delete',
          handler: () => {
            const loader = this.$loading.show({
              // Optional parameters
              container: null,
              canCancel: true,
              onCancel: this.onCancel,
            });
            this.$store.dispatch('deleteCategory', id)
              .then(() => {
                this.$modal.hide('dialog');
                this.$store.dispatch('getCategory');
                loader.hide();
              })
              .catch((err) => {
                this.$modal.hide('dialog');
                loader.hide();
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
    categories() {
      return this.$store.state.categories;
    },
  },
  created() {
    this.$store.dispatch('getCategory');
  },
};
</script>

<style>

</style>
