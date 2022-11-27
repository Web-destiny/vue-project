<template>
  <div id="app">

      <h1>{{ title }}</h1>


  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      title: 'Hello, i am Vue!',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-left: 20px;
  color: #2c3e50;
  background-color: #ffffff;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
}

li {
}

a {
  color: #42b983;
}


</style>
