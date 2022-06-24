<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <p ref="p">{{ name }} - {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <input type="text" v-model="name" />
    <button @click="age++">Increment age</button> -->

    <!-- <h2>Refs</h2>
    <p>{{ userOne.name }} - {{ userOne.age }}</p>
    <button @click="updateUserOne">Update user one</button>
    <h2>Reactive</h2>
    <p>{{ userTwo.name }} - {{ userTwo.age }}</p>
    <button @click="updateUserTwo">Update user two</button> -->

    <input type="text" v-model="search">
    <div v-for="name in searchedNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { computed, ref, reactive } from 'vue'

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
    // console.log(this) // undefined

    // const p = ref(null)
    // console.log(p.value) // undefined

    // let name = 'dexter'
    // let age = 24

    // const handleClick = () => {
    //   console.log(p, p.value) // <p>dexter - 24</p>
    //   name = 'new name' // no change
    // }

    // Using ref to make values reactive
    /* ----------------------------------------------- */
    // const name = ref('dexter')
    // const age =  ref(24)

    // const handleClick = () => {
    //   name.value = 'mario'
    //   age.value = 25
    // }

    // return { name: name, age, handleClick }
    /* ----------------------------------------------- */

    // Refs vs Reactive
    /* ----------------------------------------------------- */
    // const userOne = ref({ name: 'dexter', age: 24 })
    // const updateUserOne = () => {
    //   userOne.value.age = 29
    // }

    // const userTwo = reactive({ name: 'mario', age: 26 })
    // const updateUserTwo = () => {
    //   userTwo.age = 36
    // }

    // return { userOne, userTwo, updateUserOne, updateUserTwo }
    
    /*
      Reactive doesn't make primitive type values reactive,
      so using ref is preferred.
      e.g. reactive('mario') can not be updated later on.
    */
    /* ------------------------------------------------------- */

    // Using computed
    /* ------------------------------------- */
    const search = ref('')
    const names = ref(['dexter', 'kingpin', 'fargo', 'killmonger', 'punisher', 'killgrave'])
    const searchedNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return { search, searchedNames }

  }
}
</script>
