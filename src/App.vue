<template>
  <div id="app">

    <h1>Поиск по списку:</h1>
    <input type="text" v-model="search">
    <ul>
      <li v-for="name of sortedNames">{{ name }}</li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      title: 'Hello, i am Vue!',
      names: ['Миша', 'Даша', 'Иван', 'Данил', 'Николай', 'Наталия'],
      search: ''
    }
  },
  computed: {
      sortedNames(){
        return this.names.filter((name) => {
          return name.indexOf(this.search) != -1
        })
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
