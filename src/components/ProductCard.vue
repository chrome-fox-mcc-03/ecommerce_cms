<template>
  <div class="d-flex flex-column my-1">
    <div class="d-flex flex-row justify-content-around align-items-center">
      <div>{{ item.id }}</div>
      <div>{{ item.name }}</div>
      <div>{{ item.price }}</div>
      <div>{{ item.stock }}</div>
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
