import Vue from "vue";
import Vuex from "vuex";
import { pageTypes, toolTypes, characterTypes } from "../constants";

Vue.use(Vuex);

const successes : string[] = [];

export default new Vuex.Store({
  state: {
    character: characterTypes.FARMHAND,
    currentPage: pageTypes.TABLEAU,
    activeTool: "",
    successes
  },
  getters: {
    getCharacter: state => {
      return state.character
    },
    getCurrentPage: state => {
      return state.currentPage
    }, 
    getActiveTool: state => {
      return state.activeTool;
    },
    getSuccesses: state => {
      return state.successes;
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
    },
    setActiveTool (state, newValue:string) {
      console.log("setting active tool to ", newValue);
      state.activeTool = newValue;
    },
    addSuccess (state, newSuccess:string) {
      console.log(`adding success ${newSuccess} to success array: ${state.successes}`)
      state.successes.push(newSuccess);
    }
  },
  actions: {},
  modules: {}
});
