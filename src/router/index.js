import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import RegistrationForm from '../views/RegistrationForm.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/about',
        name: 'About',
        component: About
    },

    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/registration',
        name: 'RegistrationForm',
        component: RegistrationForm
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router