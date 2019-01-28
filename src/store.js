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
  actions: {

  }
})
