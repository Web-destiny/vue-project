<template>
  <div class="container pt-5">
    <app-counter></app-counter>
    <app-actions></app-actions>
  </div>
</template>

<script>
import Actions from "./Actions"
import Counter from "./Counter"

export default {
  data () {
    return {

    }
  },
  components: {
    appActions: Actions,
    appCounter: Counter
  }
}
</script>

<style scoped>

</style>
