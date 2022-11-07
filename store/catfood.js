export const state = () => ({
  list: [],
  detail: {}
})

export const mutations = {
  setList(state, payload) { state.list = payload },
  setDetail(state, payload) { state.detail = payload }
}

export const actions = {
  async getDataList({ commit }) {
    try {
      const data = await this.$axios.get(
        '/catfood',
      )
      if (data.data) {
        commit('setList', data.data)
      }
      return data
    } catch (error) {
      return error.response
    }
  },
  async getDataDetail({ commit }, id) {
    try {
      const data = await this.$axios.get(
        `/catfood/${id}`,
      )
      if (data.data) {
        commit('setDetail', data.data)
      }
      return data
    } catch (error) {
      return error.response
    }
  },
}

export const getters = {
  list: (state) => {
    return state.list
  },
  detail: (state) => {
    return state.detail
  }
}
