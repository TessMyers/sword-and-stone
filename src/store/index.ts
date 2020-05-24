import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist'
import { pageTypes } from "../constants";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'destiny',
  storage: window.sessionStorage
})

interface Tool {
  type: string,
  flavorText: string,
  imageSrc: string,
  target: string,
  isActive?: boolean,
  isHidden?: boolean
}

function returnStringArray() {
  const arr: string[] = [];
  return arr;
}

function returnFreshCharState() {
  const inventory:Tool[] = [];
  return {
    character: "",
    activeTool: "",
    successes: returnStringArray(),
    inventory: inventory,
  };
}

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    charState: returnFreshCharState(),
    currentPage: pageTypes.CHOOSE,
    finishedCharacters: returnStringArray()
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
      console.log('Setting character to (name):', characterObject.name);
      state.charState.character = characterObject.name;
      state.charState.inventory = JSON.parse(JSON.stringify(characterObject.tools));
    },
    setCurrentPage (state, newValue:string) {
      console.log('Setting current page to: ', newValue);
      state.currentPage = newValue;
    },
    setActiveTool (state, newValue) {
      console.log("Setting active tool to (type): ", newValue.type);
      state.charState.activeTool = newValue;
    },
    addSuccess (state, newSuccess:string) {
      console.log(`Adding success ${newSuccess} to success array: ${state.charState.successes}`)
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
      state.finishedCharacters = returnStringArray();
    }
  }
});
