import Vue from "vue";
import Vuex from "vuex";
import { pageTypes } from "../constants";

Vue.use(Vuex);

const successes: string[] = [];
const inventory: any[] = [];

export default new Vuex.Store({
  state: {
    character: "",
    currentPage: pageTypes.CHOOSE,
    activeTool: "",
    successes,
    inventory
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
    },
    getInventory: state => {
      return state.inventory
    }
  },
  mutations: {
    setCharacter (state, newValue) {
      console.log('setting character to ', newValue);
      state.character = newValue.name;
      state.inventory = newValue.tools;
    },
    setCurrentPage (state, newValue:string) {
      console.log('setting current page to ', newValue);
      state.currentPage = newValue;
    },
    setActiveTool (state, newValue) {
      console.log("setting active tool to ", newValue, newValue.type);
      state.activeTool = newValue;
    },
    addSuccess (state, newSuccess:string) {
      console.log(`adding success ${newSuccess} to success array: ${state.successes}`)
      state.successes.push(newSuccess);
    },
    showHiddenTool (state, shouldShow:boolean) {
      state.inventory.forEach(tool => {
        if (Object.prototype.hasOwnProperty.call(tool, "isHidden")) {
          console.log(`tool ${tool.type} was hidden, setting isHidden to ${!shouldShow}`);
          tool.isHidden = !shouldShow;
        }
      });
    }
  },
  actions: {},
  modules: {}
});
