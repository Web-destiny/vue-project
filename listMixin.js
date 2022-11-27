export default{
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
  beforeMount() {
    fetch('https://api.sampleapis.com/beers/ale')
      .then( response => response.json() )
      .then( beers => this.beers = beers )

  }
}
