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
import { ref } from 'vue'

export default {
  name: 'HomeView',
  components: {
    BlogList
  },
  setup() {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        if (!data.ok) {
          throw Error(data.status + ': Data could not be loaded')
        }
        posts.value = await data.json()
      } catch (err) {
        error.value = err.message
      }
    }

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
