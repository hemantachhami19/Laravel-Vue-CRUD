/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

window.Vue.use(VueRouter);

import EmployeesIndex from './components/Employees/EmployeesIndex.vue';
import EmployeesCreate from './components/Employees/EmployeesCreate.vue';
import EmployeesEdit from './components/Employees/EmployeesEdit.vue';

const routes = [
    {
        path: '/',
        components: {
            companiesIndex: EmployeesIndex
        }
    },
    {path: 'employees/create', component: EmployeesIndex, name: 'createEmployee'},
    {path: 'employees/edit/:id', component: EmployeesEdit, name: 'editEmployee'},
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')

