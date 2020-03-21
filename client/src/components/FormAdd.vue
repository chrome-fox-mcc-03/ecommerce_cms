<template>
  <div class="board-addproduct">
    <div class="up">
      <h2>Add Product</h2>
    </div>
    <div class="down">
      <div class="form-add">
        <a class="title">Sweat<span>Al</span>er<span>t</span>.Inc</a>
        <p>Add Product</p>
        <form @submit.prevent="addProduct">
            <label for="name">Name</label>
            <input type="text" class="form-control" v-model="name">
            <label for="image-url">Image URL</label>
            <input type="text" class="form-control" v-model="image_url" placeholder="paste image address from internet in here">
            <label for="description">Description</label>
            <input type="text" class="form-control" v-model="description">
            <label for="category">Category ID</label>
            <!-- <input type="number" class="form-control" v-model="CategoryId"> -->
            <select name="status" v-model="CategoryId" class="form-control">
                <option v-for="category in categories" v-bind:key="category.id" v-bind:value="category.id">{{category.name}}</option>
            </select>
            <label for="price">Price</label>
            <input type="number" class="form-control" v-model="price">
            <label for="stock">Stock</label>
            <input type="number" class="form-control" v-model="stock">
            <br>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="mirror-new-product">
        <div class="card">
          <div class="product-image">
            <img :src="image_url">
          </div>
          <div class="details">
            <div class="attribute">
              <h5>Name</h5>
              <p>{{name}}</p>
            </div>
            <div class="attribute">
              <h5>Description</h5>
              <p>{{description}}</p>
            </div>
            <div class="attribute">
              <h5>Category</h5>
              <p>{{CategoryId}}</p>
            </div>
            <div class="attribute">
              <h5>Price</h5>
              <p>Rp. {{price}}</p>
            </div>
            <div class="attribute">
              <h5>Stock</h5>
              <p>{{stock}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormAdd',
  data () {
    return {
      name: '',
      image_url: '',
      description: '',
      CategoryId: null,
      price: null,
      stock: null
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        description: this.description,
        CategoryId: this.CategoryId,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
        .then(({ data }) => {
          this.$router.push('/dashboard/products')
          this.$vToastify.success(`${data.name} with id ${data.id} is successfully added`)
        })
        .catch(err => {
          this.$vToastify.error(err.response.data.errObj[0])
        })
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
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
