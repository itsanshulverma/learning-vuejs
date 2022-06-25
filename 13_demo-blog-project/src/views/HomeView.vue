<template>
  <div class="home">
    <BlogList/>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogList from '@/components/BlogList.vue'

export default {
  name: 'HomeView',
  components: {
    BlogList
  }
}
</script>
