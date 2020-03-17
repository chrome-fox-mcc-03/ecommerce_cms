<template>
  <div class="add-product-form">
    <form id="add-product">
      <fieldset class="uk-fieldset">

        <legend class="uk-legend">Add Product</legend>

        <div class="uk-margin">
          <div class="uk-margin">
            <input class="uk-input uk-form-width-large" type="text" placeholder="Product Name">
          </div>
          <div class="uk-margin">
            <textarea class="uk-input uk-form-width-large" type="text" rows="5" placeholder="Product Description"></textarea>
          </div>
          <div class="uk-margin">
            <input class="uk-input uk-form-width-large" type="text" placeholder="Product Stock">
          </div>
          <div class="uk-margin">
            <input class="uk-input uk-form-width-large" type="text" placeholder="Product Price">
          </div>
          <div class="uk-margin">
            <input class="uk-input uk-form-width-large" type="text" placeholder="Product Image">
          </div>
          <div class="uk-margin">
            <button class="uk-button uk-button-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.add-product-form{
  margin-top: 2rem;
  margin: 3rem;
}

.uk-input{
  margin-bottom: 1rem;
}

.uk-button-primary{
  border-radius: 10px
}
</style>
