<template>
  <div>
    <button
      class="btn btn-success"
      @click="updateCounter(1)"
    >
      Add
    </button>
    <button
      class="btn btn-primary"
      @click="updateCounter(-1)"
    >
      Sub
    </button>
  </div>

</template>

<script>
import {EventEmitter} from "./main";

export default {
  methods: {
    updateCounter(value){
      EventEmitter.$emit('counterUpdated', value)
    }
  }
}
</script>

<style scoped>

</style>
