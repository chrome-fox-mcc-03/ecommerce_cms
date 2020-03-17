<template>
  <div id="containerAdd">
    <h1>Add Product</h1>
    <form id="addForm">
      <input class="form-input" type="text" placeholder="Name">
      <input class="form-input" type="text" placeholder="Image Url">
      <input class="form-input" type="number" placeholder="Price">
      <input class="form-input" type="number" placeholder="Stock">
      <input class="form-input" type="submit" value="Add Product">
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#containerAdd{
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#addForm{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.form-input{
  margin: 5px
}
</style>
