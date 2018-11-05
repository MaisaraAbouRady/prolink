<template>
  <div id="app">
    
    <h3 style="letter-spacing: 5px">Admin Login</h3>

    <br/><br/>

    <div class="container">

	    <form>

	    	<div class="form-group row justify-content-center">

		    	<div class="col-5" style="padding: 0px 10px 0px 10px;">

		    		<div class="inner">

		      			<label for="make">Email</label>
		      			<input type="text" id="email" v-model="login.email" class="form-control" />

		      		</div>

				</div>

			</div>

	    	<div class="form-group row justify-content-center">

		    	<div class="col-5" style="padding: 0px 10px 0px 10px;">

		    		<div class="inner">

		      			<label for="make">Password</label>
		      			<input type="text" id="password" v-model="login.password" class="form-control" />

		      		</div>

				</div>

			</div>			

	    	<div class="form-group row justify-content-center">		

	    		<div class="col-2">

					<button type="submit" v-on:click="signIn" class="form-control col-xs-2">Login</button>

				</div>

			</div>

		</form>

	</div>

  </div>

</template>

<script>

import axios from 'axios';
import Vue from 'vue';
import firebase from 'firebase';

export default {
  name: 'AdminLogin',
  data () {
    return {
      
      login: {

        email: '',
        password: '',

      }
    }
  },

  methods: {

    signIn: function() {
    	firebase.auth().signInWithEmailAndPassword("dummy1@prolink.us.com", "qwertyuio").then(function(firebaseUser){

    		alert("Success");

    	}).catch(function(error) {
            
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } else {
              alert(errorMessage);         
            }

            console.log(error);
        });
    },

    sendFormData() {
      axios.post(Vue.config.formApiUrl, this.form);
    },

    upload() {
      this.thumbnail = this.$refs.thumbnail_uploader.value;
    }

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

</style>
