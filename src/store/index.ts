import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist'
import { pageTypes } from "../constants";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'destiny',
  storage: window.localStorage
})

// const successes: string[] = [];
// const inventory: any[] = [];
const finishedCharacters: string[] = [];

const initialState = {
  character: "",
  activeTool: "",
  successes: [],
  inventory: [],
}

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state:{...initialState,
    currentPage: pageTypes.CHOOSE,
    finishedCharacters
  },
  getters: {
    getCharacter: state => {
      return state.character;
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
      return state.inventory;
    },
    getFinishedCharacters: state => {
      return state.finishedCharacters;
    },
    canClaim: state => {
      return state.successes.length === 3;
    }
  },
  mutations: {
    setCharacter (state, characterObject) {
      console.log('setting character to ', characterObject);
      state.character = characterObject.name;
      state.inventory = characterObject.tools;
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
    },
    endGameForCharacter (state) {
      state.finishedCharacters.push(state.character);
      state = Object.assign(state, initialState);
      state.currentPage = pageTypes.CHOOSE;
      console.log("state reassigned", state);
    } 
  },
  actions: {},
  modules: {}
});
