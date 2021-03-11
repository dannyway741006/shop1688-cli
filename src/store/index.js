import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    isControlClose: false,

  },


  mutations: {
    isLoadingChangeTrue(state) {
      state.isLoading = !state.isLoading
    },
    isControlCloseChangeTrue(state) {
      state.isControlClose = !state.isControlClose
    },


  },
  getters: {},
  actions: {},
  modules: {}
});