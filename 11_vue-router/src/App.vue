<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> | 
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #fff;
  background-color: #2c3e50;
}
</style>
