import { createStore } from 'vuex'
import { ref } from 'vue'

// Create a new store instance.
const store = createStore({
  state () {
		const products = ref([])

		const loadData = async () => {
      let data = await fetch('http://localhost:3000/products')
      data = await data.json()
      products.value = data
    }

    loadData()

    return {
      products
    }
  },
	getters: {
		featuredProducts: state => {
			return state.products.filter(product => product.featured)
		}
	}
})

export default store