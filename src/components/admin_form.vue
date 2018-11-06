<template>
  <div id="app">
    
    <h3 style="letter-spacing: 5px">Add Products</h3>

    <br/><br/>

    <div class="container">

	    <form>

	    	<div class="form-group row justify-content-center">

		    	<div class="col-xs-2" style="padding: 0px 10px 0px 10px;">

		    		<div class="inner">

		      			<label for="make">Make</label>
		      			<input type="text" id="make" v-model="form.make" class="form-control" />

		      		</div>

				</div>

	      		<div class="col-xs-2" style="padding: 0px 10px 0px 10px;">

		    		<div class="inner">

	      				<label for="model">Model</label>
	      				<input type="text" id="model" v-model="form.model" class="form-control" />

	      			</div>

	     		</div>

			</div>

	    	<div class="form-group row justify-content-center">		

				<div class="col-xs-2" style="padding: 0px 10px 0px 10px;">

					<div class="inner">

						<label for="Category">Category</label>
						<input type="text" id="category" v-model="form.category" class="form-control" />

					</div>
				
				</div>

				<div class="col-xs-2" style="padding: 0px 10px 0px 10px;">

					<div class="inner">

						<label for="subcategory">Subcategory</label>
						<input type="text" id="subcategory" v-model="form.subcategory" class="form-control" />

					</div>

				</div>

			</div>

	    	<div class="form-group row justify-content-center">

				<div class="col-5">

					<label for="thumbnail">Photo</label>
					<input type="file" id="thumbnail" v-on:change="upload" ref="thumbnail_uploader" class="form-control"/>

				</div>

			</div>

	    	<div class="form-group row justify-content-center">

				<div class="col-6">

					<div class="row justify-content-center">

						<h5 style="padding: 20px;"><i>Available in stock?</i></h5>

					</div>

					<div class="row justify-content-center">

						<div class="col-3">
							
							<label for="stock_availability_yes">Yes</label>
							<input type="radio" id="stock_availability_yes" name="stock_availability" value="yes" v-model="form.stock_availability" class="form-control" /> 
					
						</div>

						<div class="col-3">
					
							<label for="stock_availability_no">No</label>
							<input type="radio" id="stock_availability_no" name="stock_availability" value="No" v-model="form.stock_availability" class="form-control" />

						</div>

					</div>

				</div>

			</div>

	    	<div class="form-group row justify-content-center" style="padding-top: 20px;">

				<div class="col-5">

					<label for="description">Product Description</label>
					<textarea id="description" v-model="form.description" class="form-control"></textarea>

				</div>

			</div>

	    	<div class="form-group row justify-content-center">		

	    		<div class="col-3">

					<button type="submit" v-on:click="submit" class="form-control col-xs-2">Submit</button>

				</div>

			</div>

		</form>

	</div>

  </div>

</template>

<script>

import Vue from 'vue';
import firebase from 'firebase';

var productsRef = firebase.database().ref();

export default {
  name: 'AdminForm',
  data () {
    return {
      
      //Form data holder. Will be pushed to the DB.

      form: {

        category: '',
        subcategory: '',
        time_stamp: '',
        make: '',
        model: '',
        thumbnail: '',
        stock_availability: '',
        description: ''

      }
    }
  },

  methods: {

    submit: function() {

    	var vm = this;
    	firebase.auth().signInWithEmailAndPassword("dummy1@prolink.us.com", "qwertyuio").then(
    		function(firebaseUser){
    			
    			//Push to the DB

    			productsRef.push(vm.form);

    			//Reset the DB data holder

    			vm.form.category = '';
    			vm.form.subcategory = '';
    			vm.form.time_stamp = '';
    			vm.form.make = '';
    			vm.form.model = '';
    			vm.form.thumbnail = '';
    			vm.form.stock_availability = '';
    			vm.form.description = '';  			

    			alert("Successful!");

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
