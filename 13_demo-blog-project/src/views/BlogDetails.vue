<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="blog-details">
    <h1>{{ post.title }}</h1>
    <img :src=post.displayImg />
    <br />
    <span v-for="tag in post.tags" :key="tag" class="tag">
      #{{ tag }}
    </span>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import getPost from '@/composables/getPost'

export default {
  props: ['id'],
  setup(props) {
    const [ post, error, load ] = getPost(props.id)
    load()

    return { post, error }
  }
}
</script>

<style>
.blog-details{
  margin: 0 auto;
  max-width: 720px;
}
.blog-details img {
  height: 350px;
  margin: 20px;
  border-radius: 10px;
}
.blog-details p {
  text-align: justify;
  margin-top: 30px;
  margin-bottom: 40px;
}
</style>