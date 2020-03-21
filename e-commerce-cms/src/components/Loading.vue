<template>
    <div class="loading">
        <lottie-player
            src="https://assets4.lottiefiles.com/datafiles/WKqC5QWz9GiZnlm/data.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay >
        </lottie-player>
    </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style>
.loading {
    background-color: rgba(0, 0, 0, .5);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
</style>
