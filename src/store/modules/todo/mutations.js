export default {
  'STORE_ITEM' (state, payload) {
    state.list.push(payload)
  },
  'DESTROY_ITEM' (state, payload) {
    state.list.splice(state.list.indexOf(payload), 1)
  }
}
