<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> | 
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
  </nav>
   <router-view/>

  <button @click="back">Go Back</button>
  <button @click="redirect">Redirect</button>
  <button @click="forward">Go Forward</button>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    },
    redirect() {
      this.$router.push({ name: 'home' })
    },
    forward() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* centering */
  max-width: 720px;
  margin: auto auto;
}

nav {
  padding: 30px;
  margin-bottom: 20px;
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

button {
  padding: 10px 30px;
  margin: 20px  10px;
  background-color: #ddd;
  border-radius: 5px;
  border: none;
  color: #2c3e50;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #ccc;
}
</style>
