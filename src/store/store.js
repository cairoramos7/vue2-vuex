import Vue from 'vue'
import Vuex from 'vuex'

import Notify from './modules/notify/index'
import Todo from './modules/todo/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Notify,
    Todo
  }
})
