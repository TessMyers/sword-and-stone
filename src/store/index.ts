import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist'
import { pageTypes } from "../constants";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'destiny',
  storage: window.sessionStorage
})

// const initialState = {
//   character: "",
//   activeTool: "",
//   successes: [],
//   inventory: [],
// }

function returnFreshCharState() {
  return {
    character: "",
    activeTool: "",
    successes: [],
    inventory: []
  };
}


export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    charState: returnFreshCharState(),
    currentPage: pageTypes.CHOOSE,
    finishedCharacters: []
  },
  getters: {
    getCharacter: state => {
      return state.charState.character;
    },
    getCurrentPage: state => {
      return state.currentPage;
    }, 
    getActiveTool: state => {
      return state.charState.activeTool;
    },
    getSuccesses: state => {
      return state.charState.successes;
    },
    getInventory: state => {
      return state.charState.inventory;
    },
    getFinishedCharacters: state => {
      return state.finishedCharacters;
    },
    canClaim: state => {
      return state.charState.successes.length === 3;
    }
  },
  mutations: {
    setCharacter (state, characterObject) {
      console.log('setting character to ', characterObject);
      state.charState.character = characterObject.name;
      state.charState.inventory = characterObject.tools;
    },
    setCurrentPage (state, newValue:string) {
      console.log('setting current page to ', newValue);
      state.currentPage = newValue;
    },
    setActiveTool (state, newValue) {
      console.log("setting active tool to ", newValue, newValue.type);
      state.charState.activeTool = newValue;
    },
    addSuccess (state, newSuccess:string) {
      console.log(`adding success ${newSuccess} to success array: ${state.charState.successes}`)
      state.charState.successes.push(newSuccess);
    },
    showHiddenTool (state, shouldShow:boolean) {
      state.charState.inventory.forEach(tool => {
        if (Object.prototype.hasOwnProperty.call(tool, "isHidden")) {
          tool.isHidden = !shouldShow;
        }
      });
    },
    endGameForCharacter (state) {
      state.finishedCharacters.push(state.charState.character);
      state.charState = returnFreshCharState();
      state.currentPage = pageTypes.CHOOSE;
      console.log("state reassigned", state);
    },
    newGame (state) {
      state.charState = returnFreshCharState();
      state.currentPage = pageTypes.CHOOSE,
      state.finishedCharacters = []; 
    }
  },
  actions: {},
  modules: {}
});
