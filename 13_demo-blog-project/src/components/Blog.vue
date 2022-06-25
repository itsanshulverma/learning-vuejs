<template>
  <div class="blog">
    <h3>{{ post.title }}</h3>
    <img :src=post.displayImg />
    <p>{{ content }}<b>...</b></p>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Blog',
  props: ['post'],
  setup(props) {
    const content = computed(() => props.post.body.substring(0, 250))
    return { content }
  }
}
</script>

<style>
.blog {
  padding: 20px;
  margin: 20px;
  background-color: #eee;
  border-radius: 10px;
}
.blog:hover {
  background-color: #ddd;
}
.blog img {
  height: 200px;
}
</style>