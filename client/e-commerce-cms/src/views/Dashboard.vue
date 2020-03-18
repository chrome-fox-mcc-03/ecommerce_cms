<template>
  <div>
    <div class='d-flex' style="width: 100vw; height: 80vh">
      <div id="cont1">
        <router-link to="/products" class="button btn btn-primary" >Products</router-link>
        <router-link to="/products/add" class="button btn btn-primary" >Add Products</router-link>
      </div>
      <div id="cont2">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style>
#cont1{
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#cont2{
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}
.button{
  margin: 20px;
}
</style>
