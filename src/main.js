import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App.vue'

/*Bootstrap Dependencies*/

import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';

/*End of Bootstrap Dependencies*/

new Vue({
  el: '#app',
  render: h => h(App)
})
