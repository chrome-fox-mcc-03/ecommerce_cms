<template>
  <div class="dashboard-page">
    <Header></Header>
    <div class="content">
      <div class="side-bar">
        <div class="navigation-product">
          <h5>product</h5>
          <ul class="product-list">
            <li @click="moveProduct">Products</li>
              <ul>
                <li @click="moveSweater(1)">Sweater</li>
                <li @click="moveSweater(2)">Polo</li>
                <li @click="moveSweater(3)">Jas</li>
                <li @click="moveSweater(4)">Shirt</li>
              </ul>
            <br>
            <li @click="moveAddProduct">Add Product</li>
          </ul>
        </div>
        <!-- <div class="navigation-chart">
          <h5>Chart</h5>
          <ul>
            <li>Price</li>
            <li>Stock</li>
          </ul>
        </div> -->
      </div>
      <div class="content-route">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Dashboard',
  components: {
    Header
  },
  methods: {
    moveProduct () {
      this.$router.push('/dashboard/products')
    },
    moveAddProduct () {
      this.$router.push('/dashboard/addproduct')
    },
    moveSweater (categoryId) {
      this.$router.push(`/categories/${categoryId}`)
    }
  },
  created () {
    // this.startLoad()
    this.$store.dispatch('fetchCategories')
  },
  beforeRouteEnter (to, from, next) {
    if (!localStorage.access_token) {
      next('/')
    } else {
      next()
    }
  }
}
</script>

<style scoped>
  .dashboardPage {
    display: flex;
    flex-direction: column;;
  }
  .content {
    display: flex;
    flex-direction: row;
    min-height: 91vh;
  }
  .side-bar {
    width: 17%;
    background-color: black;
    padding: 20px;
  }
  .content-route {
    width: 83%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* align-items: center; */
    padding: 0;
  }

  h5 {
    color: orangered;
  }

  li {
    cursor: pointer;
    color: white;
  }

  .product-list {
    list-style: none;
    padding-left: 10px !important;
  }
</style>
