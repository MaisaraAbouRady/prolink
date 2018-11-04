import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App.vue'

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

new Vue({
  el: '#app',
  render: h => h(App)
})
