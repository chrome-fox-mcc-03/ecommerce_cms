<template>
  <div class="pt-3 mt-3" id="base">
    <div
      id="product-list"
      class="d-flex justify-content-between align-items-center"
    >
      <div>
        <h1>This is all the Magic TCG product(s)</h1>
      </div>
      <div class="d-flex rounded" id="page-control">
        <button type="button" class="btn btn-info mr-4" @click="previousPage">
          <i class="fas fa-angle-double-left"></i>
        </button>
        <button
          type="button"
          class="btn btn-primary mr-4"
          @click="toggleManual"
        >
          Manual
        </button>
        <div id="jump-page">
          <div v-show="!manualChanging">
            <h3>current page : {{ currentPage }}</h3>
          </div>
          <div v-show="manualChanging">
            <form class="form-inline" @submit.prevent="jumpPage">
              <button class="btn btn-primary" type="submit">to:</button>
              <input
                type="number"
                id="page"
                name="page"
                min="1"
                max="1528"
                placeholder="target page"
                v-model="targetPage"
              />
            </form>
          </div>
        </div>
        <button type="button" class="btn btn-info ml-4" @click="nextPage">
          <i class="fas fa-angle-double-right"></i>
        </button>
      </div>
    </div>
    <hr />
    <div v-if="isLoading">
      <Loading></Loading>
    </div>
    <div class="row" v-else>
      <MagicTCGCard
        v-for="(card, i) in cards"
        :key="i"
        :data="card"
        @add-card="addCard"
      ></MagicTCGCard>
    </div>
  </div>
</template>

<script>
import { hitScryfall, hitAPI } from "../helpers/axios";
import { mapMutations, mapState } from "vuex";
import Loading from "./Loading";
import MagicTCGCard from "./MagicTCGCard";
import Swal from "sweetalert2";

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
  name: "ProductMagicTCG",
  data() {
    return {
      cards: [],
      currentPage: 1,
      manualChanging: false,
      targetPage: 1
    };
  },
  components: {
    Loading,
    MagicTCGCard
  },
  methods: {
    fetchCards() {
      this.SET_LOADING(true);
      hitScryfall
        .get(`/cards?page=${this.currentPage}`)
        .then(({ data }) => {
          this.cards = data.data;
        })
        .catch(() => {})
        .finally(() => {
          this.SET_LOADING(false);
        });
    },
    ...mapMutations(["SET_LOADING"]),
    nextPage() {
      if (this.currentPage < 1528) {
        this.currentPage += 1;
        this.fetchCards();
      } else {
        Toast.fire({
          icon: "error",
          title: "Already reached the last page"
        });
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.fetchCards();
      } else {
        Toast.fire({
          icon: "error",
          title: "Already reached the first page"
        });
      }
    },
    toggleManual() {
      this.manualChanging = !this.manualChanging;
    },
    jumpPage() {
      this.currentPage = this.targetPage;
      this.fetchCards();
    },
    addCard(payload) {
      this.SET_LOADING(true);
      let { name, image_url, price, stock } = payload;
      hitAPI
        .post(
          "/products",
          {
            name,
            image_url,
            price,
            stock
          },
          {
            headers: {
              token: localStorage.getItem("token")
            }
          }
        )
        .then(({ data }) => {
          Toast.fire({
            icon: "success",
            title: `Successfully added ${data.data.name}`
          });
        })
        .catch(({ response }) => {
          // conditional to check for admin
          if (this.$store.state.user.role === "admin") {
            response.data.msg.forEach(el => {
              Toast.fire({
                icon: "error",
                title: el
              });
            });
          } else {
            Toast.fire({
              icon: "error",
              title: response.data.msg
            });
          }
        })
        .finally(() => {
          this.SET_LOADING(false);
        });
    }
  },
  computed: mapState(["isLoading"]),
  created() {
    this.fetchCards();
  }
};
</script>

<style scoped>
#product-list {
  background-color: white;
}

#base {
  background-color: #ffcbcb;
}

#page-control {
  border: solid black 3px;
}

#jump-page {
  cursor: pointer;
}
</style>
