import Vue from 'vue'
import Vuex from 'vuex'
import parkingSpaces from './modules/parkingSpaces'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        events: []
    },
    getters: {},
    actions: {},
    mutations: {
        // SOCKET_change: (state, event) => state.evets.push(event)
    },
    modules: {
        parkingSpaces
    }
})