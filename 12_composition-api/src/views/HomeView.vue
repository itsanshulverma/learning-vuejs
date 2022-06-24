<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">{{ name }} - {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'

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
    console.log(this) // undefined

    const p = ref(null)
    console.log(p.value) // undefined

    let name = 'dexter'
    let age = '24'

    const handleClick = () => {
      console.log(p, p.value) // <p>dexter - 24</p>
    }

    return { name: name, age, handleClick, p }
  }
}
</script>
