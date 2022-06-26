<template>
  <div class="blog">
    <router-link :to="{ name: 'BlogDetails', params: { slug: post.slug, id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <img :src=post.displayImg />
    <p>{{ content }}<b>...</b></p>
    <span v-for="tag in post.tags" :key="tag" class="tag">
      #{{ tag }}
    </span>
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
  border-radius: 5px;
}
.tag {
  color: #fff;
  background-color: rgb(55, 80, 64);
  padding: 5px 12px;
  margin: auto 5px;
  border-radius: 20px;
}
</style>