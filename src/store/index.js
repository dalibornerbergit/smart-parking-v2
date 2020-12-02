import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import reservations from './modules/reservations'
import parkingSpaces from './modules/parkingSpaces'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        parkingSpaces,
        users,
        reservations
    }
})