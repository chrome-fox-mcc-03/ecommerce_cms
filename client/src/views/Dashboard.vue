<template>
  <div class="dashboard-page">
    <Header></Header>
    <div class="content">
      <div class="side-bar">
        <div class="navigation-product">
          <h5>product</h5>
          <ul>
            <li @click="moveProduct">Products</li>
            <li @click="moveAddProduct">Add Product</li>
          </ul>
        </div>
        <div class="navigation-chart">
          <h5>Chart</h5>
          <ul>
            <li @click="moveCartPrice">Price</li>
            <li @click="moveCartStock">Stock</li>
          </ul>
        </div>
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
  }

  h5 {
    color: orangered;
  }

  li {
    cursor: pointer;
    color: white;
  }
</style>
