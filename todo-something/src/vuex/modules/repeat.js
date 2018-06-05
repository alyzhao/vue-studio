const state = {
    improveRepeat: null
}

const mutations = {
    SET_IMPROVE(state, value) {
        state.improveRepeat = value;
    }
}

const actions = {
    setImprove({commit}, value) {
        commit('SET_IMPROVE', value)
    }
}

export default {
    state,
    mutations,
    actions
}