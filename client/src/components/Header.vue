<template>
  <nav id="navbar-land">
    <div class="right-nav-land">
      <a class="title">Sweat<span>Al</span>er<span>t</span>.Inc</a>
    </div>
    <div class="left-nav-land">
      <button
        v-if="isLogin === false"
        >Login</button>
      <a
        v-else
        @click="logoutProcess"
        ><i class="fas fa-sign-out-alt"></i></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logoutProcess () {
      localStorage.clear()
      this.$store.commit('SET_IS_LOGIN', false)
      this.$router.push('/')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
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

#navbar-land .left-nav-land a {
  color: white;
}
</style>
