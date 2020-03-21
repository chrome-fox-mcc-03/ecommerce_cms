<template>
  <div id="login-page">
    <div id="login">
      <h1>LOGIN</h1>
      <form id="form-login" @submit.prevent="login">
        <div class="form-group">
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email-login"
            aria-describedby="emailHelp"
            placeholder="Input your email here"
            required
          />
        </div>
        <div class="form-group">
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password-login"
            placeholder="Password"
            required
          />
        </div>
        <p>
          Need account?
          <router-link id="register-btn" to="/register">Register</router-link>
        </p>
        <div id="button">
          <input type="submit" class="btn btn-primary" value="Submit" />
        </div>
      </form>
    </div>
    <div id="quotes"></div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const loginData = {
        email: this.email,
        password: this.password
      }
      this.$store
        .dispatch('login', loginData)
        .then(result => {
          // state notification harus diubah
          // cara ngubah state pake mutation
          // commit
          localStorage.setItem('token', result.data.token)
          this.$store.commit('SET_NOTIFICATION', {
            msg: 'loggin success',
            color: 'bg-success'
          })
          this.$router.push({ path: 'product' })
        })
        .catch(err => {
          // biasanya lo ngubah state notification di store
          this.$store.commit('SET_NOTIFICATION', {
            msg: 'loggin failed',
            color: 'bg-success'
          })
          console.log(err)
        })
    }
  },
  created () {
    // intinya ada this.$router.push << buat navigasi sama this.$route << buat ngambil params this.$route.params.id
  }
}
</script>

<style scoped>
#login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../assets/steel.jpg');
}

#login {
  border: 1px solid gray;
  padding: 50px;
  border-radius: 20px;
  background-color: rgb(34, 34, 34);
  text-align: center;
  box-shadow: 0 0 20px black;
  color: rgb(255, 251, 251);
  opacity: .8;
}

#login p {
  margin-top: 20px;
}

#button {
  text-align: center;
}
</style>
