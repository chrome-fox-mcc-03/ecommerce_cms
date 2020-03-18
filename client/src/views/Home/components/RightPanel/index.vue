<template>
  <sui-grid-column stretched :width="12">
    <sui-segment>
      <router-view />
    </sui-segment>
  </sui-grid-column>
</template>

<script>
export default {
  name: 'RightPanel'
}
</script>
