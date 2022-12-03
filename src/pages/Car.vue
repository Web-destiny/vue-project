<template>
  <div>
    <h1>Car id: {{ id }}</h1>
<!--    <router-link-->
<!--      class="btn btn-sm btn-info"-->
<!--      tag="button"-->
<!--      :to="'/car/' + id + '/full'"-->
<!--    >-->
<!--      Детали-->
<!--    </router-link>-->
    <router-link
      class="btn btn-sm btn-info"
      tag="button"
      :to="{ name: 'carFull', params: {id: id}}"
    >
      Детали
    </router-link>
    <button
      class="btn btn-sm btn-secondary"
      @click="goBackToCars">
      Назад
    </button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id: this.$route.params['id']
    }
  },
  methods: {
    goBackToCars() {
      this.$router.push('/cars')
    }
  },
  watch: {
    $route( toR, fromR ){
      this.id = toR.params['id']
    }
  }
}
</script>

<style scoped>

</style>
