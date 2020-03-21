<template>
  <div id="add-form-container">
    <form id="add-form" @submit.prevent="createProduct">
      <h1 id="add-heading">Add Product</h1>
      <div class="form-group">
        Product's Name:
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Product's Name"
            v-model="name"
          />
        </div>
        <div class="form-group">
        Price:
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Price" v-model="price"/>
        </div>
        <div class="form-group">
        Image URL:
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Product's Image Url"
            v-model="img_url"
          />
        </div>
        <div class="form-group">
          Stock:
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Stock" v-model="stock"/>
        </div>
      </div>
      <button type="submit" id="submit-button" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data: function () {
    return {
      name: '',
      price: '',
      stock: '',
      img_url: ''
    }
  },
  methods: {
    createProduct: function () {
      this.$store.dispatch('createProduct', {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.img_url
      })
        .then(({ data }) => {
          this.$router.push('/mainpage')
          this.$toasted.success('item successfully added')
        })
        .catch(error => {
          this.$toasted.error(error.response.data.message)
        })
    }
  }
}
</script>

<style>
#add-form-container {
  height: 95vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

#add-form {
  background-color: white;
  height: 70vh;
  width: 30vw;
  padding: 5vh 5vw 0 5vw;
}

#add-heading {
  margin-bottom: 5vh;
  font-family: 'Aleo', serif;
  font-weight: bold
}

.form-group {
  background-color: white;
  border: transparent;
}

#submit-button {
  cursor: pointer;
  background-color: #4000ff;
  padding: 0.5vh 1.5vh 0.5vh 1.5vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;
  border-radius: 0;
}

#submit-button:hover {
  background-color: black;
}

</style>
