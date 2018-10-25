const state = {
  user: {}
}

const mutations = {
  SET_USER_INFO (state, user) {
    state.user = user
  }
}

const actions = {
  getUserInfo ({commit}, vue) {
    return new Promise((reslove, reject) => {
      vue.axios.post('/user/').then(res => {
        let user = res.data.user
        commit('SET_USER_INFO', user)
        console.log('reslove')
        reslove(user)
      }).catch(err => {
        console.log('reject')
        reject(err)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}