<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h2>&#9996;</h2>
    <h1>Sup Cam!</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 50px;
}
h2 {
  font-size: 80px;
}
</style>

<script>
import axios from 'axios'
export default {
  mounted() {
    console.log(axios)
    axios.get('/.netlify/functions/vue-ssr').then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>
