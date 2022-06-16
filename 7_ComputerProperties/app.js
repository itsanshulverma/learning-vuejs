const app = Vue.createApp({
  data() {
    return {
      url: 'https://itsanshulverma.github.io/',
      showBooks: true,
      books: [
        { title: "Harry Potter: Prisoner of Azkaban", author: "J.K. Rowling", img: "assets/hp3.jpg", isFav: true },
        { title: "Think and Grow Rich", author: "Napolean Hill", img: "assets/tagr.jpg", isFav: true },
        { title: "Gone Girl", author: "Gillian Flynn", img: "assets/gonegirl.jpg", isFav: false },
        { title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle", img: "assets/sherlock.jpg", isFav: false },
        { title: "The Diary of A Young Girl", author: "Anne Frank", img: "assets/thediary.jpg", isFav: true },
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
})

app.mount('#app')