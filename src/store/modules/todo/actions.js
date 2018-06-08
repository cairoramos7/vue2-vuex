export default {
  storeNewItem (context, payload) {
    context.commit('STORE_ITEM', payload)
  },
  destroyItem (context, payload) {
    context.commit('DESTROY_ITEM', payload)
  }
}
