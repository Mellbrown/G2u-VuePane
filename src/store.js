import Vue from 'vue'
import Vuex from 'vuex'

import Syspane from '@/g2u/store_syspane.js'
import Sysdrag from '@/g2u/store_sysdrag.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    syspane: null,
    sysdrag: null
  },
  mutations: {
    ...Syspane,
    ...Sysdrag
  },
  getters: {
    pane_activate (state) {
      if (state.syspane.activate === null) {
        for (var _id in state.syspane.lstpane) {
          state.syspane.activate = state.syspane.lstpane[_id]
          break
        }
      }

      return state.syspane.activate
    }
  }
})
