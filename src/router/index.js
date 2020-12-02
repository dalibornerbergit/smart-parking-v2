import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Dashboard from '../views/Dashboard'
import Reservations from '../views/Reservations'
import AllReservations from '../views/AllReservations'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard
    },
    {
        name: 'reservations',
        path: '/reservations',
        component: Reservations
    },
    {
        name: 'all-reservations',
        path: '/all-reservations',
        component: AllReservations
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router