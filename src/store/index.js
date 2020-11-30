import Vue from 'vue'
import Vuex from 'vuex'
import parkingSpaces from './modules/parkingSpaces'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        events: []
    },
    getters: {
        getUser: (state) => {
            return state.user
        }
    },
    actions: {
        getUser(context, user) {
            context.commit('user', user)
        }
    },
    mutations: {
        user(state, user) {
            state.user = user
        }
        // SOCKET_change: (state, event) => state.evets.push(event)
    },
    modules: {
        parkingSpaces
    }
})