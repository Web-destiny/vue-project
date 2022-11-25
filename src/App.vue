<template>
  <div id="app">

    <h1>Поиск по списку:</h1>
    <input type="text" v-model="search" placeholder="Искать по названию пива..">
    <ul>
      <li v-for="beer of sortedBeers"><b>Название пива:</b> {{ beer.name }} <b>Цена:</b> {{ beer.price }}</li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      title: 'Hello, i am Vue!',
      beers: [],
      search: ''
    }
  },
  computed: {
    sortedBeers(){
      return this.beers.filter((beer) => {
        let nameBeer = beer.name.toLowerCase()
        return nameBeer.indexOf(this.search.toLowerCase()) !== -1
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
  },
  beforeMount() {
    fetch('https://api.sampleapis.com/beers/ale')
      .then( response => response.json() )
      .then( beers => this.beers = beers )
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
  margin-top: 60px;
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
