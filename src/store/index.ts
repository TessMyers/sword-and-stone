import Vue from "vue";
import Vuex from "vuex";
import { pageTypes } from "../constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    character: "no one yet",
    currentPage: pageTypes.CHOOSE
  },
  getters: {
    getCharacter: state => {
      return state.character
    },
    getCurrentPage: state => {
      return state.currentPage
    }
  },
  mutations: {
    setCharacter (state, newValue:string) {
      console.log('setting character to ', newValue);
      state.character = newValue;
    },
    setCurrentPage (state, newValue:string) {
      console.log('setting current page to ', newValue);
      state.currentPage = newValue;
    }
  },
  actions: {},
  modules: {}
});
