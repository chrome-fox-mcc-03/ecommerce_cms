<template>
  <div class="d-flex flex-column my-1">
    <div class="d-flex flex-row justify-content-around">
      <div>#: {{ item.id }}</div>
      <div>Name: {{ item.name }}</div>
      <div>Price: {{ item.price }}</div>
      <div>Stock: {{ item.stock }}</div>
      <div>
        <div class="btn btn-danger mx-1">
          Edit
        </div>
        <div class="btn btn-warning mx-1">
          Delete
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>
