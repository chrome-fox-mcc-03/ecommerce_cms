<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: cadetblue;
}

.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: cadetblue; */
}
.card-logreg {
  height: 50vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-logreg form {
  width: 80%;
  margin: 10px;
}

.navbar-dashboard{
  padding: 10px 15px;
    background-color:cadetblue;
}

.body-dashboard{
  height: 100vh;
  background-color: cornsilk;
}

@media screen and (max-width: 768px) {
  .card-logreg {
    height: 50vh;
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
