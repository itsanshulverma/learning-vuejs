<template>
	<div class="jobs" v-for="job in jobs" :key="job.id">
    <h3>{{ job.title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'JobsView',
  data() {
    return {
      jobs: [
        { title: 'Front-end Developer', id: 1, details: 'lorem ipsum dolar' },
        { title: 'Back-end Developer', id: 2, details: 'lorem ipsum dolar' },
        { title: 'Database Engineer', id: 3, details: 'lorem ipsum dolar' },
        { title: 'Mobile Developer', id: 4, details: 'lorem ipsum dolar' },
      ]
    }
  }
}
</script>