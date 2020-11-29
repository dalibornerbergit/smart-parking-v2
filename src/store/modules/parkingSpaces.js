import axios from 'axios'

const state = {
    parkingSpaces: []
}

const getters = {
    allParkingSpaces: (state) => state.parkingSpaces
}

const actions = {
    async fetchParkingSpaces({ commit }, id) {
        const response = await axios.get(`https://demo.smart.sum.ba/parking/${id}`)

        commit('setParkingSpaces', response.data)
    }
}

const mutations = {
    setParkingSpaces: (state, parkingSpaces) => state.parkingSpaces.push(parkingSpaces)
}

export default {
    state, getters, actions, mutations
}