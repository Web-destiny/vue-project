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

export default {
  methods: {
    updateCounter(value){
      // this.$store.commit('changeCounter', value)
      this.$store.dispatch('asyncChangeCounter', {
        counterValue: value,
        timeoutDelay: 0
      })
    }
  }
}
</script>

<style scoped>

</style>
