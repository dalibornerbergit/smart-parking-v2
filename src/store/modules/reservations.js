import axios from 'axios'

const allReservationsURL = 'http://localhost:4000/api/reservations'
const userReservationsURL = 'http://localhost:4000/api/user/myreservations'

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
        const response = await axios.get(allReservationsURL, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        })

        context.commit('setAllReservations', response.data.data)
    },
    // ONLY CURRENT USER RESEREVATIONS
    async fetchUserReservations(context) {
        const response = await axios.get(userReservationsURL, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        })

        context.commit('setUserReservations', response.data.data)
    },
}

const mutations = {
    setAllReservations: (state, allReservations) => state.allReservations = allReservations,
    setUserReservations: (state, userReservations) => state.userReservations = userReservations
}

export default {
    state, getters, actions, mutations
}