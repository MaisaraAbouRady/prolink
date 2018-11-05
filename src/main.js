import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App.vue'
import firebase from 'firebase'

//Importing the router configuration from index.js

import router from './router'

/*Firebase Configuration*/

//const fb = require('./fbConfig.js');

const config = {
  apiKey: "AIzaSyBC3_nWM71EzSvVw2q5YOnEWuhN9xz2-JI",
  authDomain: "prolink-products.firebaseapp.com",
  databaseURL: "https://prolink-products.firebaseio.com",
  projectId: "prolink-products",
  storageBucket: "",
  messagingSenderId: "1055612346187"
};

firebase.initializeApp(config);

//Bootstrap Dependencies

import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';

//Using the Router:

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
