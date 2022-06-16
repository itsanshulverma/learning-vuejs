const app = Vue.createApp({
  data() {
    return {
      url: 'https://itsanshulverma.github.io/',
      showBooks: true,
      books: [
      { title: "Harry Potter: Prisoner of Azkaban", author: "J.K. Rowling", img: "assets/hp3.jpg" },
      { title: "Think and Grow Rich", author: "Napolean Hill", img: "assets/tagr.jpg" },
      { title: "Gone Girl", author: "Gillian Flynn", img: "assets/gonegirl.jpg" },
      { title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle", img: "assets/sherlock.jpg" },
      { title: "The Diary of A Young Girl", author: "Anne Frank", img: "assets/thediary.jpg" },
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    }
  }
})

app.mount('#app')