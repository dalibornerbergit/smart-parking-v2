import Api from '@/plugins/Api'

// const allReservationsURL = 'http://localhost:4000/api/reservations'
// const userReservationsURL = 'http://localhost:4000/api/user/myreservations'

const state = {
    allReservations: [],
    userReservations: []
}

const getters = {
    getAllReservations: (state) => state.allReservations,
    getUserReservations: (state) => state.userReservations
}

const actions = {
    // ALL RESERVATIONS
    async fetchAllReservations(context) {
        const response = await Api.get('reservations')

        context.commit('setAllReservations', response.data.data)
    },
    // ONLY CURRENT USER RESEREVATIONS
    async fetchUserReservations(context) {
        const response = await Api.get('user/myreservations')

        context.commit('setUserReservations', response.data.data)
    },
    // CREATE NEW RESERVATION
    async createReservation(context, reservation) {
        const response = await Api.post('reservations', reservation)

        context.commit('addReservation', response.data.data)
    },
    async deleteReservation(context, id) {
        await Api.delete(`reservations/${id}`)

        context.commit('removeReservation', id)
    }
}

const mutations = {
    setAllReservations: (state, allReservations) => state.allReservations = allReservations,
    setUserReservations: (state, userReservations) => state.userReservations = userReservations,
    addReservation(state, reservation) {
        state.allReservations.unshift(reservation)
        state.userReservations.unshift(reservation)
    },
    removeReservation(state, id) {
        state.allReservations.splice(state.allReservations.map(item => item.id).indexOf(id), 1)
        state.userReservations.splice(state.userReservations.map(item => item.id).indexOf(id), 1)

    }
}

export default {
    state, getters, actions, mutations
}