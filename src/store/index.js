import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    isControlClose: false,
    isMenu: false,
    isSearchType: false,
    isSearchCity: false,
    isSearchMask: false
  },

  mutations: {
    isLoadingChangeTrue(state) {
      state.isLoading = !state.isLoading
    },
    isControlCloseChangeTrue(state) {
      state.isControlClose = !state.isControlClose
    },
    isMenuChange(state) {
      state.isMenu = !state.isMenu
    },
    isSearchTypeChange(state) {
      state.isSearchType = !state.isSearchType
    },
    isSearchCityChange(state) {
      state.isSearchCity = !state.isSearchCity
    },
    isSearchMaskChange(state) {
      state.isSearchMask = !state.isSearchMask
    },
    isSearchTypeFalse(state) {
      state.isSearchType = false
      state.isSearchCity = false

    }


  },
  getters: {},
  actions: {},
  modules: {}
});