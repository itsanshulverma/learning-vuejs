<template>
  <h1>StoreX</h1>
  <button @click="discount(20)">Discount by 20%</button>
  <ProductsFeatured />
  <ProductsAll />
</template>

<script>
import ProductsFeatured from './components/ProductsFeatured.vue'
import ProductsAll from './components/ProductsAll.vue'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    ProductsFeatured,
    ProductsAll
  },
  methods: {
    // reducePrice(percent) {
    //   // Explicitly changing state: 
    //   // This will not have any effect in strict mode
    //   // this.$store.state.products.forEach(product => product.price *= 0.8)

    //   // this.$store.commit('discount')

    //   this.$store.dispatch('discount', percent)
    // }
    ...mapActions([
      'discount' //, 'nextAction'
    ])
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
