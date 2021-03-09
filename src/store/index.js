import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false
  },


  mutations: {
    isLoadingChangeTrue(state) {
      state.isLoading = true
    },
    isLoadingChangeFalse(state) {
      state.isLoading = false
    }
  },
  getters: {},
  actions: {},
  modules: {}
});