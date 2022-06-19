<template>
  <h1>{{ title }}</h1>
  <teleport v-if="showModal" to=".modals">
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
  </teleport>
  <teleport v-if="showModal2" to=".modals">
    <Modal @close="toggleModal2">
      <!-- default slot -->
      <h1 class="modal-title">{{ header_title }}</h1>
      <p class="modal-content">{{ content }}</p>
    </Modal>
  </teleport>
  <br />
  <!-- Event Modifiers - alt -->
  <button @click.alt="toggleModal">Open Modal (Alt + Click)</button>
  <button @click="toggleModal2">Open Modal 2</button>
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
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app, .modals {
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
button {
  padding: 10px;
  margin: 10px;
}
</style>
