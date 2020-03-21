<template>
  <div id="form-container">
    <div id="form-left">
      <h1>E-COMMERCE CMS  <span> |</span> <span id="login-text"> admin's login</span> </h1>
      <br>
      <br>
      <span id="login-text2">For admins who are not registered yet please contact our <a id="customer-support" href="#">customer support</a> for further information</span>
      <div id="bottom-line"></div>
    </div>
    <form @submit.prevent="adminLogin" id="form-right">
      <div class="form-group" id="form-background">
        <label for="exampleInputEmail1">EMAIL:</label><br>
        <input
          type="email"
          id="email-input"
          v-model="email"
        />
      </div>
      <div class="form-group" id="form-background">
        <label for="exampleInputPassword1">PASSWORD:</label> <br>
        <input type="password" id="password-input" v-model="password" />
      </div>
      <button type="submit" id="btn">SUBMIT</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    adminLogin: function () {
      this.$store
        .dispatch('login', { email: this.email, password: this.password })
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          this.$router.push('/mainpage')
          this.$toasted.success('youve been successfully logged in')
        })
        .catch(error => {
          this.$toasted.error(error.response.data)
        })
    }
  },
  created () {
    console.log(this.$store)
  }
}
</script>

<style>
#form-container {
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: 20vh;
  overflow: hidden;
}

#form-left {
  width: 30vw;
  height: 80vh;
  background-color: #ee6f44;
  margin-right: 2vw;
  padding: 2vh;
}

#form-left h1 {
  color: white;
  font-weight: bolder;
  font-size: 7vh;
}

#form-left span {
  color: black
}

#login-text {
  font-style: italic;
  font-size: 5vh;
}

#login-text2 {
  font-size: 3vh;
  color: white;
}

#form-right {
  width: 20vw;
  height: 80vh;
  padding-top: 7vh;
}

#email-input, #password-input {
  width: 15vw;
  height: 5vh;
  background-color: #eeeeee;
  border: transparent;
  border-bottom: solid 2px;
}

label {
  background-color: #eeeeee;
}

#btn {
  background-color: #4000ff;
  color: white;
  padding: 1vh;
  box-shadow: transparent;
  font-family: Arial, Helvetica, sans-serif;
  border: transparent;
  font-weight: bolder;
  transition:0.5s ease-in-out;
}

#btn:hover {
  background-color: black;
}

#bottom-line {
  border-bottom: solid 1px;
}

#customer-support {
  color: #4000ff;
}

form {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

#form-background {
  background-color: #eeeeee;
}
</style>
