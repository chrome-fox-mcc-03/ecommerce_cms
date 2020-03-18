<template>
  <div id="cont3">
    <h1>Product List</h1>
    <div id="product" v-for="product in products" :key="product.id">
      <div id="product-content">
        {{ product.name }}
      </div>
      <div id="product-option">
        <a class="option-button" @click="deleteProduct(product.id)" >delete</a>
        <a class="option-button" @click="updateProduct(product.id)">edit</a>
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
      this.$store.dispatch('productDetail', id)
      this.$router.push({ name: 'UpdateProduct' })
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(result => {
          console.log('---DELETED---')
          console.log(result.data)
          this.$store.dispatch('getProducts')
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(err => {
          console.log(err)
        })
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
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid black
}
#product-content{
  width: 80%;
}
.option-button:hover{
  cursor: pointer;
}
</style>
