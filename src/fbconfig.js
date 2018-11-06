//Before you do the configuration:
//npm install --save firebase

import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBC3_nWM71EzSvVw2q5YOnEWuhN9xz2-JI",
  authDomain: "prolink-products.firebaseapp.com",
  databaseURL: "https://prolink-products.firebaseio.com",
  projectId: "prolink-products",
  storageBucket: "",
  messagingSenderId: "1055612346187"
};

firebase.initializeApp(config);