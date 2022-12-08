<template>
  <div class="container pt-5">
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
  }
}
</script>

<style scoped>

</style>
