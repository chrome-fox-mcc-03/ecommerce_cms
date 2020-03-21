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
          <div id="modal-body-container" class="d-flex flex-row justify-content-center align-items-center">
            <div id="image-container" class="d-flex justify-content-center align-items-center">
              <img id="image" :src="productDetail.image_url" :alt="productDetail.name">
            </div>
            <div id="info-container" class="d-flex justify-content-center align-items-center flex-column">
              <p aria-hidden="true">Price: Rp {{ productDetail.price }}</p>
              <p aria-hidden="true">Stock: {{ productDetail.stock }}</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button id="modal-btn" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
#modal-body-container{
  width: 100%;
  height: 100%
}
#image-container{
  width: 60%;
  height: 100%;
}
#info-container{
  height: 100%;
  width: 40%;
}
#image{
  width: 100%;
  height: auto;
  border-radius: 5px;
  border: 2px solid #272e4f;
}
.modal-body{
  padding: 0px;
  height: auto;
  width: auto;
  background-color: #eeeeee;
  font-weight: bold;
}
#modal-btn{
  background-color: #393e46;
}
#modal-btn:hover{
  color: #f8b500;
}
.modal-header, .modal-footer{
  background-color: #2c365d;
  color: #f2f2f0;
}
</style>
