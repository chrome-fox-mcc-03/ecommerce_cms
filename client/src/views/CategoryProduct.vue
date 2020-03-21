<template>
  <div>
    <Header></Header>
    <Loading v-if="loading"></Loading>
    <div v-else class="board">
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
            <th class="text-center">{{ product.Category.name}}</th>
            <th class="text-right">{{ product.price }}</th>
            <th class="text-right">{{ product.stock }}</th>
            <th class="text-center">
              <a class="edit" @click="showFormEditProduct(product.id)"><i class="far fa-edit"></i></a>  |  <a class="delete" @click="deleteProduct(product.id)"><i class="far fa-trash-alt"></i></a>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
import Header from '../components/Header.vue'

export default {
  name: 'Products',
  components: {
    Loading,
    Header
  },
  // props: ['choiceCategroy'],
  data () {
    return {
      products: [],
      loading: false
    }
  },
  created () {
    // this.fetchproducts()
    this.startLoad()
  },
  methods: {
    fetchproducts () {
      this.$store.dispatch('fetchProducts')
        .then(({ data }) => {
          const productSelection = []
          data.forEach(productEachCategory => {
            if (productEachCategory.CategoryId === +this.$route.params.categoryId) {
              productSelection.push(productEachCategory)
            }
          })
          this.products = productSelection
        })
        .catch(err => {
          this.$vToastify.error('error', err)
        })
    },
    showFormEditProduct (productId) {
      this.$router.push(`/dashboard/editproduct/${productId}`)
    },
    deleteProduct (productId) {
      this.$store.dispatch('deleteProduct', productId)
        .then(({ data }) => {
          this.startLoad(
            this.$vToastify.success('deleted item is successfully')
          )
        })
        .catch(err => {
          this.$vToastify.error(err.response.data.message)
        })
    },
    startLoad () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.fetchproducts()
      }, 1000)
    }
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
