<template>
  <div class="product-list uk-column-1-2">
    <div class="admin-panel">
      <div class="admin-navigation">
          <router-link :to="'/products'" class="uk-button uk-button-primary admin-button">All Products</router-link>
          <router-link :to="'/products/add'" class="uk-button uk-button-primary admin-button"> Add Product</router-link>
          <button @click.prevent="logout" class="uk-button uk-button-danger admin-button">Logout</button>
      </div>
      <div class="admin-display">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProducts',
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.replace({ path: '/' })
    }
  }
}
</script>

<style scoped>
.product-list{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  /* overflow: scroll; */
  /* overflow-x: hidden; */
}

.admin-navigation{
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 15%;
  max-width: 15%;
  /* border: #3282b8 1px solid; */
  padding: 5px;
  border-radius: 15px
}

.admin-navigation .admin-button{
  margin-bottom: 2%;
  margin-top: 2%;
  border-radius: 15px;
  margin-left: 15%;
  margin-right: 15%;
}
.admin-navigation .admin-button:hover{
  transform: scale(1.3, 1.3);
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07)
}

.admin-display{
  border-radius: 15px;
  border: #3282b8 1px solid;
  min-width: 85%;
  margin-left: 0.5%;
  border: gray 1px solid;
  overflow-x: hidden;
}

.admin-display .product-card{
  margin: 25px;
}

.admin-panel{
  display: flex;
  justify-content: space-between;
  margin: 3rem;
  max-height: 85%;
  height: 100%;
}

  .router-link-exact-active.router-link-active{
    color: #1b262c;
    background-color: #bbe1fa;
    font-weight: bold;
  }

</style>
