<template>
  <h2>All Products</h2>
  <div class="products-all">
    <div v-for="product in products" :key="product.id" class="product">
      <h3>{{ product.title }}</h3>
      <img :src=product.image />
      <p>Price: ${{ product.price }}</p>
      <div class="rating">
        Rating({{ product.rating.count }}): {{ product.rating.rate }} ⭐
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products
    }
  }
}
</script>

<style>
.products-all .product {
  display: inline-block;
  border-radius: 10px;
  background-color: #fff;
  width: 250px;
  padding: 30px;
  margin: 10px;
}
.product:hover {
  box-shadow: 8px 8px 10px #ddd;
}
.product img {
  max-width: 200px;
  height: 150px;
}
</style>