import Vue from 'vue'
import Vuex from 'vuex'
import shoppinglist from './modules/shoppinglist'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
   modules: {
      shoppinglist
   },
   strict: debug
})