<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <form>

      <label for="make">Make</label>
      <input type="text" id="make" v-model="form.make" />

      <label for="model"Model</label>
      <input type="text" id="model" v-model="form.model" />

      <label for="Category">Category</label>
      <input type="text" id="category" v-model="form.category" />

      <label for="subcategory">Subcategory</label>
      <input type="text" id="subcategory" v-model="form.subcategory" />

      <label for="thumbnail">Photo</label>
      <input type="image" id="thumbnail" v-model="form.thumbnail" />

      <label for="stock_availability">Available in stock?</label>
      <input type="radio" name="yes" id="stock_availability" value="yes" v-model="form.stock_availability" />

      <label for="description">Product Description</label>
      <textarea id="description" v-model="form.description"></textarea>

      <button type="submit"></button>
  
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
