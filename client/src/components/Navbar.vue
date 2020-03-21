<template>
  <div id="navbar">
    <div id="navbar-left">
      <router-link to="/mainpage/product" id="product-nav">PRODUCTS</router-link>
      <router-link to="/mainpage/addproduct" id="product-nav">ADD PRODUCT</router-link>
    </div>
    <div id="navbar-mid">
      E-COMMERCE-CMS
    </div>
    <div id="navbar-right">
      <a id="logout" @click.prevent="logout">LOGOUT</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout: function () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
#navbar {
  display: flex;
  width: 100%;
  height: 7vh;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.8vh;
}

#navbar-left {
  background-color: white;
}

#product-nav {
  color: black;
  margin-left: 5vw;
  transition: 0.3s;
}

#product-nav:hover {
  color: #4000ff;
  text-decoration: none;
}

#navbar-right {
  margin-right: 5vw;
}

#logout {
  cursor: pointer;
  background-color: #4000ff;
  padding: 0.5vh 1.5vh 0.5vh 1.5vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;
}

#logout:hover {
  background-color: black;
}

#navbar-mid {
  font-size: 4vh;
  background-color: white;
  margin-left: -6vw;
  font-weight: bolder;
}
</style>
