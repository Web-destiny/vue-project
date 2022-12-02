<template>
  <div id="app">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      title: 'Hello Vue',
    }
  },
}
</script>

<style scoped>
 .container{
   padding-top: 30px;
 }
</style>
