const app = Vue.createApp({
  // data, functions, template
  // template: '<h2>Hello Vue! :)</h2>',
  data() {
    return {
      title: "Harry Potter: Prisoner of Azkaban",
      author: "J.K. Rowling",
      counter: 0
    }
  },
  methods: {
    changeTitle() {
      this.title = "Harry Potter: Chamber of Secrets";
    },
    changeTitle2(title) {
      this.title = title;
    }
  }
})

app.mount('#app')