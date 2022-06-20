<template>
	<div class="box" v-if="showBlock" @click="stopTimer">
		hey bruh!
	</div>
</template>

<script>
export default {
	name : 'Box',
	data() {
		return {
			showBlock: false,
			timer: null,
			reactionTime: 0
		}
	},
	props: ['delay'],
	// hooks
	mounted() {
		// console.log('component unmounted')
		setTimeout(() => {
			this.showBlock = true
			this.startTimer()
		}, this.delay)
	},
	// updated() {
	// 	console.log('component updated')
	// },
	// unmounted() {
	// 	console.log('component unmounted')
	// }
	methods: {
		startTimer() {
			this.timer = setInterval(() => { 
				this.reactionTime += 10 
			}, 10)
		}, 
		stopTimer() {
			clearInterval(this.timer)
			this.$emit('end', this.reactionTime)
		}
	}
}
</script>

<style>
.box {
	width: 250px;
	margin: 40px auto;
	padding: 100px 0;
	background-color: #2c3e50;
	color: #fff;
	font-size: 1.2rem;
	font-weight: bold;
	text-align: center;
	cursor: pointer;
	border-radius: 10px;
}
</style>