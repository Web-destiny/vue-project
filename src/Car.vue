<template>
 <div class="car-box">
   <slot name="carMilage"></slot>
   <h3>Car name: {{ carName }} / {{ reverseNameCar }}</h3>
   <p>Car year: {{ carYear }}</p>
   <button style="margin-bottom: 20px" @click="changeCarName">Сменить модель</button>
   <button style="margin-bottom: 20px" @click="changeFromParent()">Сменить модель</button>
   <button style="margin-bottom: 20px" @click="updateCounter">Update Counter</button>

   <img style="width: 300px;height:450px;border: 5px solid #464750;background-size: cover" src="https://s.auto.drom.ru/photo/JNNPbnB0jlRMqOEsa1D7k_TzH8YKcCNi5lyh2kOEk-eJid3im3PqPtk8uiLGTL2PxH-6K7ub0z44dPZsSsWA60ARbaw4.jpg">
 </div>
</template>

<script>

import {eventEmitter} from './main.js'

export default {
  name: "Car.vue",
  // props: ['carName', 'carYear']
  //           или
  // props: {
  //   carName: String,
  //   carYear: Number
  // }
  //           или
  props: {
    carName: {
      type: String,
      // required: true  - означает что поле обязательно и без него компонент не заработает
      default: 'Default model'
    },
    carYear: {
      type: Number,
      // default: 'Default year',
      // required: true
      // validator: function (value) {
      //   return value >= 1991 && value < 2000
      // }
    },
    changeFromParent: Function

  },
  computed: {
    reverseNameCar(){
      return this.carName.split('').reverse().join('')
    }
  },
  methods: {
    changeCarName(){
      this.carName = 'SILVIA'
      this.$emit('changedCarName', this.carName)
    },
    updateCounter(){
      // this.$emit('counterUpdated', this.counter + 1)
      eventEmitter.$emit('counterUpdated', 3)
    }
  }
}
</script>

<style scoped>
  .car-box{
    margin: 0 auto;
    background-color: #42b983;
    width: 400px;
    padding: 10px;
    border: 10px solid #464750;
  }
</style>
