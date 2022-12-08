<template>
  <div class="container pt-5">
    <h1>{{ title }}</h1>
    <hr>
    <app-counter></app-counter>
    <app-second-counter></app-second-counter>
    <hr>
    <app-actions></app-actions>
  </div>
</template>

<script>
import Actions from "./Actions"
import Counter from "./Counter"
import SecondCounter from "./SecondCounter";

export default {
  components: {
    appActions: Actions,
    appCounter: Counter,
    appSecondCounter: SecondCounter
  },
  computed: {
    title(){
      return this.$store.getters.title
    }
  }
}
</script>

<style scoped>

</style>
