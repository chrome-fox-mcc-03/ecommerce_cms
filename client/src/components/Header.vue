<template>
  <nav id="navbar-land">
    <div class="right-nav-land">
      <a class="title">Sweat<span>Al</span>er<span>t</span>.Inc</a>
    </div>
    <div class="left-nav-land">
      <!-- <button
        v-if="!isLogin"
        >Login</button> -->
      <div v-if="isLogin" class="nav-dashboard-new">
        <h7
          class="dash-new"
          @click="moveDashboard"
          >Dashboard</h7>
        <a
        @click="logoutProcess"
        ><i class="fas fa-sign-out-alt"></i></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isLogin: localStorage.access_token || null
    }
  },
  methods: {
    logoutProcess () {
      localStorage.clear()
      this.$store.commit('SET_IS_LOGIN', false)
      this.$router.push('/')
      this.$vToastify.success('Logout successfully')
    },
    moveDashboard () {
      this.$router.push('/dashboard/products')
    }
  }

}
</script>

<style scoped>
#navbar-land {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: baseline;
  padding: 15px;
  background-color: black;
  margin: 0;
}

#navbar-land .right-nav-land .title{
  margin-right: 30px;
  font-size: 30px;
  font-family: 'UnifrakturMaguntia', Georgia, 'Times New Roman', Times, serif;
  color: white;
}

#navbar-land .right-nav-land span {
  font-size: 25px;
  color: coral;
}

#navbar-land .right-nav-land a, #navbar-land .left-nav-land a {
  font-size: 20px;
  font-family: 'Corben', Georgia, 'Times New Roman', Times, serif;
  color: #191970;
  cursor: pointer;
}

#navbar-land .left-nav-land button {
  padding: 5px 15px;
  font-size: 15px;
  margin-left: 15px;
  background-color: orangered;
  border: none;
  color: white;
  font-family: 'Corben', Georgia, 'Times New Roman', Times, serif;
  cursor: pointer;
  border-radius: 10px;
}

#navbar-land .left-nav-land {
  width: 83%;
}

#navbar-land .left-nav-land a {
  color: white;
}

.nav-dashboard-new {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 20px;
  align-items: center;
}

.dash-new {
  font-size: 18px;
  margin-top: 8px;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  cursor: pointer;
}

.dash-new:active {
  color: aqua;
}
</style>
