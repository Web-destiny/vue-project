<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
  </div>

</template>

<script>
import {EventEmitter} from "./main";

export default {
 data(){
   return {
     counter: 0
   }
 },
  created() {
   EventEmitter.$on('counterUpdated', (value) => {
     this.counter += value
   })
  }
}
</script>

<style scoped>

</style>
