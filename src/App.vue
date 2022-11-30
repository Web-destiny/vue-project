<template>
  <div id="app">

      <input type="text" v-model="title">
      <h1>{{ title }}</h1>

      <textarea v-model="paragraph">{{ paragraph }}</textarea>
      <p class="par">{{paragraph}}</p>

    <label>
    <input type="checkbox" value="vk" v-model="socialCheckBox"> VK
  </label>
    <label>
      <input type="checkbox" value="facebook" v-model="socialCheckBox"> FACEBOOK
    </label>
    <label>
      <input type="checkbox" value="tg" v-model="socialCheckBox"> TELEGRAM
    </label>

    <ul>
      <li v-for="s in socialCheckBox">{{ s }}</li>
    </ul>


    <label>
      <input type="radio" value="vk" v-model="socialRadio"> VK
    </label>
    <label>
      <input type="radio" value="facebook" v-model="socialRadio"> FACEBOOK
    </label>
    <label>
      <input type="radio" value="tg" v-model="socialRadio"> TELEGRAM
    </label>

      <p>{{ socialRadio }}</p>

    <select v-model="selectedDrink">
      <option v-for="d in drinks">{{ d }}</option>
    </select>

    <p>{{ selectedDrink }}</p>

    <input type="text" v-model.number="age">
    <p>{{ age }}</p>

    <app-onoff v-model="switched"></app-onoff>

    <div>
      <h3 v-if="switched">Контрол включен</h3>
      <h3 v-else>Контрол выключен</h3>
    </div>




  </div>
</template>

<script>

import Onoff from "./Onoff";

export default {
  name: 'app',
  data () {
    return {
      title: 'Hello, i am Vue!',
      paragraph: 'Какой-то параграф..',
      socialCheckBox: ['vk'],
      socialRadio: '',
      drinks: ['Coca', 'Sprite', 'Pepsi', 'Fanta'],
      selectedDrink: 'Coca',
      age: 24,

      switched: false,
    }
  },
  components: {
    appOnoff: Onoff
  },
  watch: {
      age(value){
        console.log(value)
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
.par{
  white-space: pre;
}


</style>
