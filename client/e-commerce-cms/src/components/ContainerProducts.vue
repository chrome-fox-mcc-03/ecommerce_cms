<template>
  <div id="cont3">
    <h1>Product List</h1>
    <div id="product" v-for="product in products" :key="product.id">
      <div id="product-content">
        {{ product.name }}
      </div>
      <div id="options">
        <div id="product-option">
          <a class="option-button" @click="deleteProduct(product.id)" >delete</a>
          <a class="option-button" @click="updateProduct(product.id)">edit</a>
        </div>
        <div id="detail-button">
          <a @click="detailProduct(product)" type="button" class="btn" data-toggle="modal" data-target="#exampleModal">
            Detail
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    updateProduct (id) {
      console.log('<<<<<<>>>>>> MADSSOOOK')
      this.$store.dispatch('productUpdate', id)
      this.$route.params.id = id
      this.$router.push({ name: 'UpdateProduct' })
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(result => {
          console.log('---DELETED---')
          console.log(result.data)
          const condition = {
            icon: 'success',
            title: `Succesfully Delete ${result.data.name}`
          }
          this.$store.dispatch('notification', condition)
          this.$store.dispatch('getProducts')
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          this.$store.commit('SET_ISLOADING', false)
        })
    },
    detailProduct (product) {
      console.log(product)
      this.$store.dispatch('detailProduct', product)
    }
  },
  created: function () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style>
#cont3{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: scroll;
}
#options{
  width: 20%;
  height: 100%;
  border-left: 1px solid black;
  display: flex;
  flex-direction: row;
}
#detail-button{
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#product{
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 20px;
}
#product-option{
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#product-content{
  width: 80%;
}
.option-button:hover{
  cursor: pointer;
}
</style>
