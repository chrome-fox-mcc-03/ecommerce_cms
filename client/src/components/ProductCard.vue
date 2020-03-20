<template>
    <div class="card
        ml-4 mr-2 mt-3 mb-2 pt-4 pb-2
        shadow
        d-flex flex-column
        align-items-center">
        <div class="image shadow">
          <img :src="product.image_url" alt="" class="img-thumbnail img-fluid">
        </div>
        <div class="productName mt-4">
          <h5>{{product.name}}</h5>
        </div>
        <div class="productDetails mb-4 ">
          <h6>{{product.price | currency}}</h6>
          <h6>stock : {{product.stock}}</h6>
        </div>
        <div class="action d-flex flex-row align-items-center">
            <button type="button" class="btn btn-primary mr-1" data-toggle="modal" data-target="#editModal">Edit</button>
            <button type="button" class="btn btn-primary ml-1" @click="deleteProduct(product.id)">Delete</button>
        </div>
        <div id="editModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalEdit" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <form @submit.prevent="updateProductProcess(product.id)"
                      class="container border border-dark mt-3
                            rounded pb-4 pt-2 px-4 w-75 shadow">
                  <h3>Update Product</h3>
                  <div class="container form-group d-flex flex-column ">
                    <label for="name"><b>Name</b></label>
                    <input v-model="product.name" type="text" placeholder="Enter product name" name="name" required>
                    <label for="imageUrl"><b>Image Url</b></label>
                    <input v-model="product.image_url" type="imageUrl" placeholder="Enter image url" name="imageUrl" required>
                    <label for="price"><b>Price</b></label>
                    <input v-model="product.price" type="price" placeholder="Enter price" name="price" required>
                    <label for="stock"><b>stock</b></label>
                    <input v-model="product.stock" type="stock" placeholder="Enter stock" name="stock" required>
                    <hr>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    ...mapActions(['onEditProduct', 'onDeleteProduct']),
    updateProductProcess () {
      this.onEditProduct({
        id: this.product.id,
        name: this.product.name,
        imageUrl: this.product.image_url,
        price: this.product.price,
        stock: this.product.stock
      })
    },
    deleteProduct (id) {
      this.onDeleteProduct({
        id
      })
    }
  }
}
</script>

<style scoped>

.image {
  max-width: 50%;
  max-height: 50%;
  transition: transform .2s;
}

.zoom {
  padding: 50px;
  background-color: green;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.image:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.5);
}

.card {
  max-width: 15vw;
}

</style>
