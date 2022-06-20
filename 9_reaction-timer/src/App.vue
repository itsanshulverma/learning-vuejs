<template>
  <h1>Bruh Reaction Timer</h1>
  <button @click="playGame" :disabled="isPlaying">Play</button>
  <br />
  <Box v-if="isPlaying" :delay="delay" @end="endGame" />
  <Result v-if="showResults" :score="score"  />
</template>

<script>
import Box from './components/Box'
import Result from './components/Result'

export default {
  name: 'App',
  data() {
    return {
      isPlaying: false,
      delay: 0,
      score: 0,
      showResults: false
    }
  },
  components: {
    Box,
    Result
  },
  methods: {
    playGame() {
      this.isPlaying = true
      this.delay = 2000 + Math.random() * 5000
      this.showResults = false
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  background-color: #2c5031;
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 10px;
}
button:disabled {
  opacity: 0.4;
}
</style>
