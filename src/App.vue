<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">Car name</label>
      <input id="name" class="form-control" type="text" v-model.trim="carName">
    </div>
    <div class="form-group">
      <label for="year">Car year</label>
      <input id="year" class="form-control" type="text" v-model.number="carYear">
    </div>

    <button class="btn btn-success mt-3" @click="createCar">Create car</button>
    <button class="btn btn-primary mt-3" @click="loadCars">Load cars</button>

    <div class="list-group mt-5">
      <li
        class="list-group-item"
        v-for="car of cars"
        :key="car.id"
      >
        <strong>{{ car.name }}</strong> - {{ car.year }}
      </li>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      carName: '',
      carYear: '',
      cars: [],
      resource: null
    }
  },
  methods: {
    createCar(){
      const car = {
        name: this.carName,
        year: this.carYear,
      }
      this.resource.save( {}, car )
    },
    loadCars(){
      this.resource.get()
        .then(response => response.json())
        .then(cars => this.cars = cars)
    }
  },
  created() {
    this.resource = this.$resource( 'http://localhost:3000/cars' )
  }
}
</script>

<style scoped>

</style>
