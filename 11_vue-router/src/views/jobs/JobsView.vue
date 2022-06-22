<template>
	<div class="jobs" v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'jobDetails', params: { id: job.id } }">
      <h3>{{ job.title }}</h3>
    </router-link>
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

<style>
.jobs a {
  display: inline-block;
  text-decoration: none;
  width: 420px;
  padding: 30px auto;
  background-color: #eee;
  margin: 6px auto;
  border-radius: 10px;
  color: #111;
  cursor: pointer;
}
.jobs a:hover {
  background-color: #bbb;
}

</style>