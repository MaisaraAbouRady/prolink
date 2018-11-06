import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'

//Firebase Configuration - Must happen before invoking firebase in any component.

//const fb = require('./fbConfig.js');

//FOR A WEIRD REASON FOR NOW, THE CONFIGURATION IS DONE IN THE ADMIN-FORM FILE. LATER ON I WILL TAKE IT TO A SEPERATE FILE THAT RUNS BEFORE ANYTHING

//Components invoke firebase

import App from './App.vue'

//Importing the router configuration from index.js

import router from './router'

//Bootstrap Dependencies

import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
