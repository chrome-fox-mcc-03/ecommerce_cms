<template>
  <div>
    <h1 class="text-center mb-5">Home</h1>
    <div class="mb-3 d-flex">
      <!-- add -->
      <div>
        <b-button v-b-modal.modal-1>Add New Product</b-button>

        <b-modal id="modal-1" ref="modal-1-ref" title="Create New Product">
          <CreateProduct @closeModal="closeModal" />
          <template v-slot:modal-footer>
            <div class="w-100 h-auto"></div>
          </template>
        </b-modal>
      </div>
    </div>
    <TableProduct />
  </div>
</template>

<script>
import TableProduct from '@/components/TableProduct';
import CreateProduct from '@/components/CreateProduct';
export default {
  name: 'Home',
  data() {
    return {
      searchInput: '',
      update: false
    };
  },
  components: {
    TableProduct,
    CreateProduct,
  },
  methods: {
    closeModal() {
      this.$refs['modal-1-ref'].hide();
    }
  }
}
</script>

<style>
</style>