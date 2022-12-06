import Vue from 'vue'
import VueResourсe from 'vue-resource'
import App from './App.vue'

Vue.use(VueResourсe)

new Vue({
  el: '#app',
  render: h => h(App),
})


