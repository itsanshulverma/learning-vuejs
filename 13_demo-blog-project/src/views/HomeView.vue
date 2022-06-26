<template>
  <div class="home">
    <p v-if="error">{{ error }}</p>
    <div v-if="!error && posts.length" class="blogs">
      <BlogList :posts="posts" />
    </div>
    <div v-else>
      <p v-if="!error">Loading...</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogList from '@/components/BlogList.vue'
import getPosts from '@/composables/getPosts'

export default {
  name: 'HomeView',
  components: {
    BlogList
  },
  setup() {
    
    const [ posts, error, load ] = getPosts()
    load()

    return { posts, error }
  }
}
</script>

<style>
.blogs {
  display: inline-block;
  max-width: 720px;
  margin-bottom: 30px;
}
</style>
