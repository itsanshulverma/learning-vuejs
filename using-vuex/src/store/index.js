import { createStore } from 'vuex'
import { ref } from 'vue'

// Create a new store instance.
const store = createStore({
  strict: true,
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
	},
  mutations: {
    discount: (state, percent) => {
      // This asynchronous task cannot be accomplished here.
      // setTimeout(function(){
      //   state.products.forEach(product => product.price *= 0.8)
      // }, 3000)
      state.products.forEach(product => product.price *= (1-(percent/100)))
    }
  },
  actions: {
    discount: (context, percent) => {
      setTimeout(function(){
        context.commit('discount', percent)
      }, 2000)
    }
  }
})

export default store