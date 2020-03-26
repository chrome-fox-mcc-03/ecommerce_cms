<template>
  <div id="landing-page">
    <div class="container-fluid d-flex px-0" id="back">
      <div id="left">
        <div
          id="left-masking"
          class="d-flex justify-content-center align-items-center flex-column"
        >
          <h1>TCG Content Management Service</h1>
          <h4>Your one stop destination for managing all things card games</h4>
          <p>
            Join one of the most helpful web app for your stores. Enjoy these
            awesome features:
          </p>
          <div class="text-left px-5 mx-5">
            <ul>
              <li>
                Tired of incomplete data? Our CMS storage is already directly
                connected with Scryfall API, one of the best database for every
                kinds of cardgames
              </li>
              <li>
                Can't keep track of what's in your store? We made an easy to use
                interface so that you can manage your items more easily
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="right" class="d-flex justify-content-center align-items-center">
        <div v-if="isLoading">
          <Loading></Loading>
        </div>
        <div v-else>
          <h2>Welcome TCG Store Owners</h2>
          <div>
            <img
              src="../assets/playcard.png"
              alt="landing-image"
              class="img-fluid"
            />
          </div>
          <LandingRegister
            v-if="isRegistering"
            @change-to-login="changeToLogin"
            @register-user="registerUser"
          ></LandingRegister>
          <LandingLogin
            v-else
            @change-to-register="changeToRegister"
            @login-user="loginUser"
          ></LandingLogin>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LandingRegister from "@/components/LandingRegister";
import LandingLogin from "@/components/LandingLogin";
import Loading from "@/components/Loading";
import Swal from "sweetalert2";
import { hitAPI } from "../helpers/axios";

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});

export default {
  name: "LandingPage",
  components: {
    LandingRegister,
    LandingLogin,
    Loading
  },
  data() {
    return {
      isRegistering: true
    };
  },
  methods: {
    changeToLogin() {
      this.isRegistering = false;
    },
    changeToRegister() {
      this.isRegistering = true;
    },
    registerUser(data) {
      this.$store.commit("SET_LOADING", true);
      let { email, password, username } = data;
      this.$store.commit("SET_LOADING", true);
      hitAPI
        .post("/register", {
          email,
          password,
          username
        })
        .then(() => {
          this.loginUser({
            email,
            password
          });
        })
        .catch(({ response }) => {
          response.data.msg.forEach(el => {
            Toast.fire({
              icon: "error",
              title: el
            });
          });
        })
        .finally(() => {
          this.$store.commit("SET_LOADING", false);
        });
    },
    loginUser(data) {
      this.$store.commit("SET_LOADING", true);
      let { email, password } = data;
      hitAPI
        .post("/login", {
          email,
          password
        })
        .then(({ data }) => {
          localStorage.setItem("token", data.data.token);
          this.$store.commit("SET_USER", {
            email,
            password,
            username: data.data.username,
            role: data.data.role
          });
          this.$store.commit("SET_IS_LOGGED_IN", true);
          this.$router.push({ path: "/products" });
          Toast.fire({
            icon: "success",
            title: "Logged in successfully"
          });
        })
        .catch(({ response }) => {
          Toast.fire({
            icon: "error",
            title: response.data.msg
          });
        })
        .finally(() => {
          this.$store.commit("SET_LOADING", false);
        });
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>

<style scoped>
#landing-page {
  height: 100vh;
}

#left {
  background-image: url("https://media.magic.wizards.com/images/featured/EN_WorldMagicCupQualifier_Header_0.jpg");
  width: 70%;
}

#left-masking {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  color: white;
}

#right {
  background-color: white;
  width: 30%;
  height: 100%;
}

#back {
  height: 100%;
}

#left-board {
  color: white;
}
</style>
