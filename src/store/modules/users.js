const state = {
    user: null
}

const getters = {
    getUser: (state) => state.user
}

const actions = {
    setUser: (context, user) => {
        context.commit('user', user)
    }
}

const mutations = {
    user: (state, user) => state.user = user
}

export default {
    state, getters, actions, mutations
}