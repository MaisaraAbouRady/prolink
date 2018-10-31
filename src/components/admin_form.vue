<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <form>

      <label for="make">Make</label>
      <input type="text" id="make" v-model="form.make" />

      <br /><br />

      <label for="model"Model</label>
      <input type="text" id="model" v-model="form.model" />

      <br /><br />

      <label for="Category">Category</label>
      <input type="text" id="category" v-model="form.category" />

      <br /><br />

      <label for="subcategory">Subcategory</label>
      <input type="text" id="subcategory" v-model="form.subcategory" />

      <br /><br />

      <label for="thumbnail">Photo</label>
      <input type="image" id="thumbnail" v-model="form.thumbnail" />

      <br /><br />

      <label for="stock_availability">Available in stock?</label>
      <input type="radio" name="yes" id="stock_availability" value="yes" v-model="form.stock_availability" />
      <input type="radio" name="no" id="stock_availability" value="no" v-model="form.stock_availability" />

      <br /><br />

      <label for="description">Product Description</label>
      <textarea id="description" v-model="form.description"></textarea>

      <br /><br />

      <button type="submit">Submit</button>
  
    </form>
  </div>
</template>

<script>

import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Test Form',
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

    submit() {
      this.sendFormData();
    },

    sendFormData() {
      axios.post(Vue.config.formApiUrl, this.form)
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
