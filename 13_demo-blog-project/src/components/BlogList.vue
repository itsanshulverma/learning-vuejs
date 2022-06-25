<template>
  <div v-for="post in posts" :key="post.id">
    <Blog :post="post" />
  </div>
</template>

<script>
import Blog from './Blog'

export default {
  name: 'BlogList',
  props: ['posts'],
  components: { Blog }
}
</script>