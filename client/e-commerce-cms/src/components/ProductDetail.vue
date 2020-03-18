<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"> {{ productDetail.name }} </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <p aria-hidden="true">Price: Rp {{ productDetail.price }}</p>
          <p aria-hidden="true">Stock: {{ productDetail.stock }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  computed: {
    productDetail () {
      console.log('ini dari modal')
      console.log(this.$store.state.productDetail)
      return this.$store.state.productDetail
    }
  }
}

</script>

<style>
</style>
