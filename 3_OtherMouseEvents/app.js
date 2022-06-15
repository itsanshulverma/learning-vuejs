const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "Harry Potter: Prisoner of Azkaban",
      author: "J.K. Rowling",
      x: 0,
      y: 0
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvents(event, data) {
      console.log(event)
      if(data) {
        console.log(data)
      }
    },
    handleMouseMove(event) {
      this.x = event.offsetX
      this.y = event.offsetY
    }
  }
})

app.mount('#app')