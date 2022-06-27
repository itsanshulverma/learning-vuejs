<template>
  <h1>StoreX</h1>
  <ProductsFeatured />
  <ProductsAll />
</template>

<script>
import ProductsFeatured from './components/ProductsFeatured.vue'
import ProductsAll from './components/ProductsAll.vue'

export default {
  name: 'App',
  components: {
    ProductsFeatured,
    ProductsAll
  }
}
</script>

<style>
body {
  background-color: #eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  margin-bottom: 60px;
}
.products-all, .products-featured {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  max-width: 1020px;
  margin: 30px auto;
}
</style>
