const mutations = {
  notify (state, { msg, type }) {
    state.msg = msg
    state.type = type
  },
  remove (state) {
    state.msg = ''
    state.type = ''
  },
  setStatus (state, status) {
    state.status = status
  }
}

export default mutations
