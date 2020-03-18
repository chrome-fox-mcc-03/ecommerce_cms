<template>
  <div class="board">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" class="text-center id">ID</th>
          <th scope="col" class="text-center image">Image</th>
          <th scope="col" class="text-center name">Name</th>
          <th scope="col" class="text-center description">Description</th>
          <th scope="col" class="text-center category">CategoryId</th>
          <th scope="col" class="text-right price">Price</th>
          <th scope="col" class="text-right stock">Stock</th>
          <th scope="col" class="text-center action">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="product" v-for="product in products" :key="product.id">
          <th class="text-center"> {{product.id}} </th>
          <td class="text-center">
            <div class="gambarMe" >
              <img class="gambarku" :src="product.image_url">
            </div>
          </td>
          <th scope="row">{{ product.name }}</th>
          <th class="text-left">{{ product.description }}</th>
          <th class="text-center">{{ product.CategoryId}}</th>
          <th class="text-right">{{ product.price }}</th>
          <th class="text-right">{{ product.stock }}</th>
          <th class="text-center">
            <a class="edit"><i class="far fa-edit"></i></a>  |  <a class="delete"><i class="far fa-trash-alt"></i></a>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
      .then(({ data }) => {
        this.products = data
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}
</script>

<style scoped>
  .board{
    max-height: 91vh;
    padding: 20px auto;
    overflow: auto;
  }
  table thead tr .id{
    width: 5%;
  }
  table thead tr .image{
    width: 15%;
  }
   table thead tr .name{
    width: 15%;
  }
   table thead tr .description{
    width: 20%;
  }
  table thead tr .category{
    width: 10%;
  }
  table thead tr .price{
    width: 10%;
  }
  table thead tr .stock{
    width: 10%;
  }
  table thead tr .action{
    width: 15%;
  }
  .edit {
    cursor: pointer;
    color: blue;
  }
  .delete {
    cursor: pointer;
    color: red;
  }
  .gambarMe img {
    width: 200px;
    height: 200px;
  }
</style>
