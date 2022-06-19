<template>
  <h1>{{ title }}</h1>
  <div v-show="showModal">
    <!-- <Modal :title="header_title" :content="content" theme="bruh" @close="toggleModal" /> -->
    <Modal theme="bruh" @close="toggleModal">
      <!-- default slot -->
      <h1 class="modal-title">{{ header_title }}</h1>
      <p class="modal-content">{{ content }}</p>
      <!-- named slot -->
      <template v-slot:links>
        <a href="#">Sign up Bruh</a>
        <a href="#">Wanna know more bruh?</a>
      </template>
    </Modal>
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
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac sollicitudin sapien. Proin convallis auctor arcu id cursus. Praesent aliquet feugiat tincidunt. Donec convallis diam nec sem mattis, ac volutpat leo fringilla. In semper lacus at erat maximus ornare. Nam tincidunt metus lorem, et sagittis lectus pharetra eget. Donec egestas.",
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
