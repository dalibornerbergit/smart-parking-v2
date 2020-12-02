import axios from 'axios'

const url = 'https://demo.smart.sum.ba/parking?withParkingSpaces=1'

const state = {
    parkingSpaces: []
}

const getters = {
    allParkingSpaces: (state) => state.parkingSpaces
}

const actions = {
    async fetchParkingSpaces({ commit }) {
        const response = await axios.get(url)

        commit('setParkingSpaces', response.data)
    }
}

const mutations = {
    setParkingSpaces: (state, parkingSpaces) => state.parkingSpaces = parkingSpaces
}

export default {
    state, getters, actions, mutations
}