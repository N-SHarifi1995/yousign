import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/log-in'
import signup from '../components/sign-up'
import home from '../components/home'
import workspace from '../components/workspace'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/signup',
        name: 'signup',
        component: signup
    },{
        path: '/workspace/:user',
        name: 'workspace',
        component: workspace
    },

]

const router = new VueRouter({
    routes
})

export default router