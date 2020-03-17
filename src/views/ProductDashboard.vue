<template>
  <div class='product-list'>
    <div class="admin-panel">
      <div class="admin-navigation">
          <router-link :to="'/products'" class="uk-button uk-button-primary admin-button">All Products</router-link>
          <router-link :to="'/products/add'" class="uk-button uk-button-primary admin-button"> Add Product</router-link>
      </div>
      <div class="admin-display">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProducts'
}
</script>

<style scoped>
.product-list{
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  width: 100vw;
}

.admin-navigation{
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 15%;
  max-width: 15%;
  border: #3282b8 1px solid;
  padding: 5px;
  border-radius: 15px;
}

.admin-navigation .admin-button{
  margin-bottom: 25px;
  margin-top: 25px;
  border-radius: 15px;
}

.admin-display{
  border-radius: 15px;
  border: #3282b8 1px solid;
  min-width: 85%;
  margin-left: 0.5%;
  border: gray 1px solid;
  min-height: 85%;
  overflow: hidden;
}

.admin-display .product-card{
  margin: 25px;
}

.admin-panel{
  display: flex;
  justify-content: space-between;
  margin: 3rem;
  max-height: 85%;
  height: 85%;
}

  .router-link-exact-active.router-link-active{
    color: #1b262c;
    background-color: #bbe1fa;
    font-weight: bold;
  }

</style>
