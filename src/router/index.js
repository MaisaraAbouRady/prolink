//Importing necessary Vue files

import Vue from 'vue'
import Router from 'vue-router'

//Importing the Vue Components

import AdminLogin from '../components/admin_login.vue'
import AdminForm from '../components/admin_form.vue'

//Putting the router in use:

Vue.use(Router)

export default new Router ({
	routes: [
		{
			path: '/login',
			name: AdminLogin,
			component: AdminLogin
		},
		{
			path: '/admin',
			name: AdminForm,
			component: AdminForm
		}
	]
})

