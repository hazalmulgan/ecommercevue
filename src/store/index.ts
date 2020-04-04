
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: [] as any
  },

  mutations: {
    ADD_TO_CART: (state, product) => {
      state.dataList.push(product)
    },
    DELETE_FROM_CART: (state, product) => {
      state.dataList.splice(product,1)
    },
  
  },

  actions: {
    addDataAction(vuexContent, data) {
      vuexContent.commit("addDataMutation", data)
    }

  },

  getters: {
    mycartList: state => {
      return state.dataList
    }

  },

  modules: {
  }
})
