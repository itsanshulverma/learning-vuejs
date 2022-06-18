<template>
  <h1>{{ title }}</h1>
  <div v-show="showModal">
    <Modal :title="header_title" :content="content" theme="bruh" @close="toggleModal"/>
  </div>
  <br />
  <!-- Event Modifiers - alt -->
  <button @click.alt="toggleModal">Open Modal (Alt + Click)</button>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: "My First Vue App",
      header_title: "what up bruh! :)",
      content: "Bruh, this is modal content.",
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  display: inline-block;
  padding-bottom: 10px;
  border-bottom: 2px solid #555;
}
</style>
