<template>
  <div class="board-addproduct">
    <div class="up">
      <h2>Edit Product</h2>
    </div>
    <div class="down">
      <div class="form-add">
        <a class="title">Sweat<span>Al</span>er<span>t</span>.Inc</a>
        <p>Edit Product</p>
        <form @submit.prevent="updateProduct(product.id)">
            <label for="name">Name</label>
            <input type="text" class="form-control" v-model="edit_product.name">
            <label for="image-url">Image URL</label>
            <input type="text" class="form-control" v-model="edit_product.image_url" placeholder="paste image address from internet in here">
            <label for="description">Description</label>
            <input type="text" class="form-control" v-model="edit_product.description">
            <label for="category">Category ID</label>
            <input type="number" class="form-control" v-model="edit_product.CategoryId">
            <label for="price">Price</label>
            <input type="number" class="form-control" v-model="edit_product.price">
            <label for="stock">Stock</label>
            <input type="number" class="form-control" v-model="edit_product.stock">
            <br>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="mirror-new-product">
        <div class="card">
          <div class="product-image">
            <img :src="product.image_url">
          </div>
          <div class="details">
            <div class="attribute">
              <h5>Id</h5>
              <p>{{product.id}}</p>
            </div>
            <div class="attribute">
              <h5>Name</h5>
              <p>{{product.name}}</p>
            </div>
            <div class="attribute">
              <h5>Description</h5>
              <p>{{product.description}}</p>
            </div>
            <div class="attribute">
              <h5>Category</h5>
              <p>{{product.CategoryId}}</p>
            </div>
            <div class="attribute">
              <h5>Price</h5>
              <p>Rp. {{product.price}}</p>
            </div>
            <div class="attribute">
              <h5>Stock</h5>
              <p>{{product.stock}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormEdit',
  data () {
    return {
      edit_product: {
        name: '',
        image_url: '',
        description: '',
        CategoryId: null,
        price: null,
        stock: null
      }
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  created () {
    this.edit_product = {
      ...this.product
    }
    this.$store.dispatch('fetchOneProduct', this.$route.params.id)
  },
  watch: {
    product (val) {
      this.edit_product = { ...this.product }
    }
  },
  methods: {
    updateProduct (productId) {
      const payload = this.edit_product
      this.$store.dispatch('editProduct', { payload, productId })
        .then(({ data }) => {
          this.$router.push('/dashboard/products')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style scoped>
  .board-addproduct {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 98%;
    padding: 10px;
    margin: 0;
  }

  .up {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 30px;
  }

  .down {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 98%;
    padding: 30px;
  }

  .form-add {
    width: 27%;
    margin-right: 20px;
  }
  .mirror-new-product {
    width: 70%;
  }
  .card {
    display: flex;
    flex-direction: row;
  }
  .product-image {
    /* width: 450px; */
    width: 60%;
    height: 500px;
    margin-right: 20px;
    max-height: 500px;
  }
  .product-image img {
    width: 100%;
    height: 100%;
    max-height: 500px;
  }

  .details {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: auto;
    max-height: 500px;
    margin-top: 10px;
  }

  .attribute {
    margin-bottom: 10px;
  }
</style>
