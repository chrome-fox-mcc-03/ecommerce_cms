<template>
  <div id="page-container">
    <div v-if="isLoading">
      <Loading> </Loading>
    </div>
    <div id="card_container">
      <div class="card" style="width: 18rem;" v-for="el in products" :key="el.id">
        <img
          :src="`${el.image_url}`"
          class="card-img-top"
          alt="product-image"
        />
        <div class="card-body">
          <div class="card-title">{{ el.name }} | <a id="edit-button" @click.prevent="editPage(el.id)">EDIT</a><a id="delete-button" @click.prevent="deleteProductById(el.id)">DELETE</a></div>
          <p class="card-text">PRICE: {{ el.price }}</p>
          <p class="card-text">STOCK: {{ el.stock }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from './Loading'

export default {
  name: 'Product',
  components: {
    Loading
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    isLoading: function () {
      return this.$store.state.isLoading
    }
  },
  methods: {
    editPage: function (id) {
      this.$router.push(`/mainpage/editproduct/${id}`)
    },
    deleteProductById: function (id) {
      this.$store.dispatch('deleteProductById', id)
        .then(({ data }) => {
          this.$store.dispatch('getProducts')
          this.$toasted.success('item has been successfuly deleted')
        })
        .catch(error => {
          this.$toasted.success(error.response.data)
        })
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style scoped>
#card_container {
  display: flex;
  width: 100%;
  height: 95vh;
  flex-wrap: wrap;
  padding: 5vh;
  overflow: scroll;
}

.card {
  margin-left: 2vw;
  margin-bottom: 5vh;
  height: 43vh;
  font-size: 1.7vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.card-title {
  display: flex;
  width: 100%;
  color: black;
  font-weight: bolder;
  font-size: 4vh;
  background-color: #ee6f44;
  flex-wrap:wrap;
}

.card-body {
  background-color: #ee6f44;
}

.button-container {
  display: flex;
  width: 100%;
  justify-content: flex-start;
}

#delete-button, #edit-button {
  border-radius: 0;
  font-weight: bolder;
  background-color: #ee6f44;
  margin-bottom: 1vh;
  border: transparent;
  transition: 0.3s;
  display: flex;
  align-items: flex-end;
  color: white;
  font-size: 2vh;
  cursor: pointer;
  margin-left: 1vh;
  padding: 0vh;
}

#delete-button:hover, #edit-button:hover{
  color: black;
}

#delete-button {
  /* background-color: red; */
  border:transparent;
}

.card-img-top {
  height: 23vh;
  width: auto;
}

</style>
