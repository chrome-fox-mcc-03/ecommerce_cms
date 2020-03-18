<template>
    <div class="form-login">
        <a class="title">Sweat<span>Al</span>er<span>t</span>.Inc</a>
        <p>Login</p>
        <form @submit.prevent="loginProcess">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="login-email" aria-describedby="emailHelp" v-model="login.email">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="login-password" aria-describedby="emailHelp" v-model="login.password">
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <p class="notif-register">Don't have an account?</p>
        <button type="submit" class="btn btn-primary register-nav" @click="showFormRegister">Create Account</button>
      <b-modal id="register" hide-footer>
        <div class="image-modal">
        </div>
            <div class="d-block text-center">
              <center>
                  <form @submit.prevent="registerProcess">
                      <h2>Register</h2>
                      <br>
                      <div class="form-group">
                          <label for="title">Name</label>
                          <input type="text" id="name" class="form-control" v-model="register.name" required>
                      </div>
                      <div class="form-group">
                          <label for="description">Email Address</label>
                          <input type="text" id="email" class="form-control" v-model="register.email" required>
                      </div>
                      <div class="form-group">
                          <label for="description">Password</label>
                          <input type="password" id="password" class="form-control" v-model="register.password" required>
                      </div>
                      <div class="form-group">
                          <label for="description">Role</label>
                          <input type="text" id="role" class="form-control" v-model="register.role" required style="text-align:center;">
                      </div>
                      <br><br>
                      <b-button class="mt-3 btn btn-primary" block type="submit" style="background-color:blue">Submit</b-button>
                  </form>
              </center>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      register: {
        name: '',
        email: '',
        password: '',
        role: 'admin'
      },
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    showFormRegister () {
      this.$bvModal.show('register')
    },
    registerProcess () {
      const payload = {
        name: this.register.name,
        email: this.register.email,
        password: this.register.password,
        role: this.register.role
      }
      this.$store.dispatch('registerOn', payload)
        .then(({ data }) => {
          this.login.email = data.email
          this.register.name = ''
          this.register.email = ''
          this.register.password = ''
          this.$bvModal.hide('register')
        })
        .catch(err => {
          console.log(err, '>>>>>>>>>>>>>>>')
        })
    },
    loginProcess () {
      const payload = {
        email: this.login.email,
        password: this.login.password
      }
      this.$store.dispatch('loginOn', payload)
        .then(({ data }) => {
          this.login.email = ''
          this.login.password = ''
          localStorage.setItem('access_token', data.access_token)
          this.$store.commit('SET_IS_LOGIN', true)
          this.$router.push('/dashboard/products')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  watch: {
    login (val) {
      return this.login
    }
  }
}
</script>

<style>
  .form-login {
  width: 20rem;
  height: 35rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: white;
  padding: 20px;
  box-shadow: 5px 2px 20px 0px grey;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}

.form-login .title {
  text-align: center;
  font-size: 30px;
  font-family: 'UnifrakturMaguntia', Georgia, 'Times New Roman', Times, serif;
}

.form-login .title span {
  font-size: 25px;
  color: coral;
}

.form-login p {
  text-align: center;
  font-family: 'Corben', Georgia, 'Times New Roman', Times, serif;
  font-size: 30px;
}

.form-login form{
  margin-top: 10px;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-login form button {
  margin: 20px auto;
  border-radius: 15px;
  width: 60%;
}

.form-login .notif-register {
  margin-top:10px;
  font-size: 15px;
}

.form-login .register-nav {
  margin: 5px auto;
  border-radius: 15px;
  width: 80%;
}
</style>
