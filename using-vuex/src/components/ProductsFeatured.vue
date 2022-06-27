<template>
  <h2>Featured Products</h2>
  <div class="products-featured">
    <div v-for="product in featured" :key="product.id" class="product">
      <div>
        <h3>{{ product.title }}</h3>
        <img :src=product.image />
        <p>Price: ${{ product.price }}</p>
      </div>
      <div>
        <h4>Description</h4>
        <p>{{ product.description }}</p>
        <div class="rating">
          Rating({{ product.rating.count }}): {{ product.rating.rate }} ⭐
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    featured() {
      return this.$store.getters.featuredProducts
    }
  }
}
</script>

<style>
.products-featured {
  width: 720px;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
}
.products-featured .product {
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #ddd;
  text-align: left;
  padding: 20px 60px;
  margin: 10px;
}
.product img {
  height: 100px;
}
</style>