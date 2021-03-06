import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: [] as any,
    snackbar: {},
    selectedItem: [] as any,
  },

  mutations: {
    ADD_TO_CART: (state, product) => {
      const found = state.dataList.find(value => value.id == product.id);
      if (found) {
        found.amount++;
      } else {
        state.dataList.push(product)

      }

    },
    DELETE_FROM_CART: (state, product) => {
      state.dataList = state.dataList.filter(item => {
        return item.id !== product.id
      })
    },

    SET_SELECTED_ITEMS: (state, selectedItems) => {
    state.selectedItem = selectedItems

    },
    SET_SNACKBAR(state, snackbar) {
      state.snackbar = snackbar
    },

    CLEAR_ALL(state) {
      state.dataList = []
    }
  },

  actions: {
    setSnackBar({ commit }, snackbar) {
      commit('SET_SNACKBAR', snackbar);
    },

    clearCartItems({ commit }) {
      commit('CLEAR_ALL')

    },

  },

  getters: {
    mycartList: state => {
      return state.dataList
    },
    myItemList: state => {
      return state.selectedItem
    }

  },

  modules: {
  }
})
