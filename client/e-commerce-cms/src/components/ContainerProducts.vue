<template>
  <div id="cont3">
    <h1>Product List</h1>
    <div id="product" v-for="(el, index) in dummyData" :key="index">
      <div id="product-content">
        {{ el.name }}
      </div>
      <div id="product-option">
        <a href="">delete</a>
        <a href="">edit</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      dummyData: [
        {
          name: 'pizza',
          image_url: 'https://google.com',
          price: 120000,
          stock: 3
        },
        {
          name: 'spaghetti',
          image_url: 'https://google.com',
          price: 50000,
          stock: 2
        },
        {
          name: 'buku',
          image_url: 'https://google.com',
          price: 12000,
          stock: 20
        },
        {
          name: 'ayam',
          image_url: 'https://google.com',
          price: 13000,
          stock: 21
        },
        {
          name: 'pisang raja',
          image_url: 'https://google.com',
          price: 3000,
          stock: 8
        }
      ]
    }
  }
}
</script>

<style>
#cont3{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
</style>
