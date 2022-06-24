<template>
  <div class="home">
    <h1>Home</h1>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  /* Setup runs before mounted or created hooks. */
  // setup() {
  //   console.log('setup')
  // },
  // created() {
  //   console.log('created')
  // },
  // mounted() {
  //   console.log('mounted')
  // }

  /* One thing to note that the name and age are not reactive
    values, while in data() function while using Options API,
    these will be reactive.
  */
  setup() {
    let name = 'dexter'
    let age = '24'

    const handleClick = () => {
      console.log('button clicked')
    }

    return { name: name, age, handleClick }
  }
}
</script>
