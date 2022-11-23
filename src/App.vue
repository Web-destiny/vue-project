<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Parent Car Name: {{ carName }}</h1>
    <app-counter></app-counter>
    <app-car
      :carName="carName"
      :carYear="carYear"
      :changeFromParent="changeOnAudi"
      @changedCarName="carName = $event"
    ></app-car>
  </div>
</template>

<script>

import Car from './Car.vue'
import Counter from './Counter.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      carYear: 1994,
      carName: 'MARK2',
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  },
  methods: {
    changeOnAudi(){
      return this.carName = 'Audi'
    }
  }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
