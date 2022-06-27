<template>
  <h1>StoreX</h1>
  <ProductsFeatured :featured="featuredProducts" />
  <ProductsAll :products="products" />
</template>

<script>
import ProductsFeatured from './components/ProductsFeatured.vue'
import ProductsAll from './components/ProductsAll.vue'

import { ref, computed } from 'vue'

export default {
  name: 'App',
  components: {
    ProductsFeatured,
    ProductsAll
  },
  setup() {
    const products = ref([])

    const loadData = async () => {
      let data = await fetch('http://localhost:3000/products')
      data = await data.json()
      products.value = data
    }
    loadData()

    const featuredProducts = computed(() => {
      return products.value.filter(product => product.featured)
    })

    return { products, featuredProducts }
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
