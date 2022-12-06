import Vue from 'vue'
import VueResourсe from 'vue-resource'
import App from './App.vue'

Vue.use(VueResourсe)

Vue.http.options.root = 'http://localhost:3000/'

new Vue({
  el: '#app',
  render: h => h(App),
})


