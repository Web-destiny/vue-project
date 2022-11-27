<template>
  <div id="app">
    <div class="searchBox">
      <h1 class="searchBox-title">Поиск пива:</h1>
      <input type="text" v-model="searchBeer" class="search-input" placeholder="Искать по названию пива..">
    </div>
    <div class="beerBox">
      <div v-for="beer of sortedBeers" class="beerCard">
        <div style="display: flex;flex-direction: column;gap: 3px;height: 140px;">
          <div>Бренд пива:</div>
          <div style="font-size: 18px;font-weight: bold;color: #a51409;">{{ beer.name }}</div>
          <div style="display: flex;align-items: flex-end;justify-content: space-between;">
            <div>Рейтинг:</div>
            <div style="font-size: 25px;color: rgb(255 229 0);font-weight: bold;">{{ Math.round(beer.rating.average * 100)/100 }}</div>
          </div>
          <div style="display: flex;align-items: flex-end;justify-content: space-between;">
            <div>Цена:</div>
            <div style="font-size: 25px;color: #e81000;font-weight: bold;">{{ beer.price }}</div>
          </div>
        </div>
        <img :src="beer.image" alt="Картинка ушла нахуй))">
      </div>
    </div>
    <app-list></app-list>

  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      title: 'Hello, i am Vue!',
      beers: [],
      searchBeer: ''
    }
  },
  computed: {
    sortedBeers(){
      return this.beers.filter((beer) => {
        let nameBeer = beer.name.toLowerCase()
        return nameBeer.indexOf(this.searchBeer.toLowerCase()) !== -1
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


.beerBox{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 10px;
}

.beerCard {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border: 1px solid #adb9ff;
  border-radius: 20px;
  padding: 20px;
  width: 235px;
  height: 280px;
  background: linear-gradient(to top left,#0030ff, #a7b7ff, #bcc5ff);
  box-shadow: 4px 2px 8px;
  cursor: pointer;
  font-family: monospace;
  font-size: 16px;
}

.beerCard img{
  max-width: 90px;
  max-height: 130px;
}
.searchBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}
.searchBox-title {
  font-size: 50px;
  font-family: fantasy;
  color: royalblue;
}

.search-input {
  border-radius: 20px;
  width: 300px;
  height: 30px;
  padding: 5px 15px;
  font-size: 18px;
  border: 2px solid royalblue;
  font-family: fangsong;
  box-shadow: 1px 1px 1px royalblue;
}
</style>
