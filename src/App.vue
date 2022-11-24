<template>
  <div id="app">

    <h1 v-colored:background.font="'green'">{{ title }}</h1>
    <h1 v-colored:color.delay="'blue'">{{ title }}</h1>
    <h2>{{ title | lowercase }}</h2>
    <h2>{{ title | uppercase }}</h2>
    <h2>{{ title | uppercase | lowercase }}</h2>

    <h3 v-font>Local font directive</h3>

  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      title: 'Hello, i am Vue!'
    }
  },
  directives: {
    font: {
      bind(el, bindings, vnode){
        el.style.fontSize = '40px'
      }
    }
  },
  filters: {
    lowercase(value){
      return value.toLowerCase()
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
