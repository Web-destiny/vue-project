<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
<!--            <li class="nav-item">-->
<!--              <router-link class="nav-link" exact aria-current="page" to="/">Home</router-link>-->
<!--            </li>-->
<!--            <li class="nav-item">-->
<!--              <router-link class="nav-link" to="/cars">Cars</router-link>-->
<!--            </li>-->
            <router-link tag="li" exact active-class="active" to="/">
              <a class="nav-link">Home</a>
            </router-link>
            <router-link tag="li" active-class="active" to="/cars">
              <a class="nav-link">Cars</a>
            </router-link>

            <router-link tag="li" exact active-class="active" to="/car/4">
              <a class="nav-link">Cars 4</a>
            </router-link>
            <router-link tag="li" active-class="active" to="/car/5">
              <a class="nav-link">Cars 5</a>
            </router-link>


          </ul>
        </div>
      </div>
    </nav>


    <router-view></router-view>
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
 .active{
    font-weight: 500;
 }

</style>
