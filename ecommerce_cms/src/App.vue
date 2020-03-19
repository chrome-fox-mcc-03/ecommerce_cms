<template>
  <div id="app">
    <nav class="nav">
        <div class="container">
            <div class="logo">
                <router-link to="/">Home</router-link>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul class="navlinks">
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/">Product</router-link></li>
                    <li><router-link to="/">Contact</router-link></li>
                </ul>
            </div>
            <span class="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
    width: 100%;
    height: 65px;
    position: fixed;
    line-height: 65px;
    text-align: center;
}

.nav div.logo {
    float: left;
    width: auto;
    height: auto;
}

.nav div.logo a {
    text-decoration: none;
    color: silver;
    font-size: 2.5rem;
}

.nav div.logo a.router-link-exact-active {
    color: black;
}

.nav div.main_list {
    height: 65px;
    float: right;
}

.nav div.main_list ul {
    width: 100%;
    height: 65px;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav div.main_list ul li {
    width: auto;
    height: 65px;
    padding: 0;
    padding-right: 3rem;
}

.nav div.main_list ul li a {
    text-decoration: none;
    color: silver;
    line-height: 65px;
    font-size: 1rem;
    font-weight: bolder;
}

.nav div.main_list ul li a.router-link-exact-active {
    color: black;
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
