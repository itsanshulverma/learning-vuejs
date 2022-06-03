const app = Vue.createApp({
	data() {
		return{
			showBooks: true,
			title: "Harry Potter: Prisoner of Azkaban",
			author: "J.K. Rowling"
		}
	},
	methods: {
		toggleShowBooks() {
			this.showBooks = !this.showBooks;
		}
	}
})

app.mount('#app')