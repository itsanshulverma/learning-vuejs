<template>
	<p class="result">
		Reaction Time - {{ score }}
		<br />
		<span>{{ rank }}</span>
	</p>
</template>

<script>
export default {
	name : 'Result',
	props: ['score'],
	data() {
		return {
			rank: null
		}
	},
	mounted() {
		if(this.score < 250) {
			this.rank = 'man of culture, bruh'
		} else if(this.score < 500){
			this.rank = 'you are fast, bruh'
		} else {
			this.rank = 'meh! work on your fingers bruh'
		}
	}
}
</script>

<style>
.result {
	display: inline-block;
	margin: 40px auto;
	color: #222;
	text-align: center;
}
.result span{
	display: inline-block;
	margin-top: 20px;
	font-size: 1.5rem;
	font-weight: bold;
	color: #2c5031;
}
</style>