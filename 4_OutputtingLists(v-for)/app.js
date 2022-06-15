const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
      { title: "Harry Potter: Prisoner of Azkaban", author: "J.K. Rowling" },
      { title: "Think and Grow Rich", author: "Napolean Hill" },
      { title: "Gone Girl", author: "Gillian Flynn" },
      { title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle" },
      { title: "The Diary of A Young Girl", author: "Anne Frank" },
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