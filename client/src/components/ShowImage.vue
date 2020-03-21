<template>
  <div>
    <div class="mb-5">
      <b-img :src="imageLink" fluid alt="Responsive image"></b-img>
    </div>
    <div class="mr-auto flex-row">
      <b-button @click="closeImage" variant="danger float-right">Close</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowImage',
  props: {
    imageLink: String
  },
  methods: {
    closeImage() {
      this.$emit('closeModal');
    }
  }
}
</script>