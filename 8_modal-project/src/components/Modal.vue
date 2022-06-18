<template>
  <!-- Event Modifiers - self -->
  <div class="backdrop"  @click.self="closeModal">
    <div class="modal" :class="{ bruh: theme === 'bruh' }">
      <h1 class="modal-title">{{ title }}</h1>
      <p class="modal-content">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['title', 'content', 'theme'],
  methods: {
    closeModal() {
      // Emitting custom events
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    z-index: 1;
  }
  .modal {
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    width: 400px;
    height: 200px;
    z-index: 2;
  }
  .modal-title {
    font-size: 1.7rem;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border: none;
  }
  .bruh {
    background-image: url('https://c.tenor.com/tqh4nwYSQj4AAAAS/kermit-kermit-the-frog.gif');
    background-size: cover;
    color: #fff;
  }

</style>