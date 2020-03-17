<template>
  <div id="cont3">
    <h1>Product List</h1>
    <div id="product">
      <div id="product-content">
        Image
      </div>
      <div id="product-option">
        <a href="">delete</a>
        <a href="">edit</a>
      </div>
    </div>
    <div id="product">
      <div id="product-content">
        Image
      </div>
      <div id="product-option">
        <a href="">delete</a>
        <a href="">edit</a>
      </div>
    </div>
    <div id="product">
      <div id="product-content">
        Image
      </div>
      <div id="product-option">
        <a href="">delete</a>
        <a href="">edit</a>
      </div>
    </div>
    <div id="product">
      <div id="product-content">
        Image
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
