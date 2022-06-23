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
      jobs: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then(res => res.json())
      .then(data => this.jobs = data)
      .catch(err => console.log(err.message))
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