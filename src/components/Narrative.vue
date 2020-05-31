<template>
  <div class="narrativePage">
    <div v-html="blob.bodyText"></div>
    <div v-html="blob.status"></div>
    <div class="button" v-on:click="navAway()">{{ blob.continueText }}</div>
  </div>
</template>

<script>
import store from "@/store/index";
import { pageTypes } from "@/constants";
import { narratives, continueOptions } from "@/text";
import { playSound } from "@/sounds";

function wrap(textArray) {
  let string = "";
  textArray.forEach(str => {
    string += "<p>" + str + "</p>";
  });
  return string;
}

export default {
  name: "narrative",
  methods: {
    wrap,
    navAway: () => {
      const successes = store.getters.getSuccesses;
      if (successes.length === 3) {
        playSound("SWORD");
      }
      if (successes.length === 4) {
        store.commit("endGameForCharacter");
        if (store.getters.getFinishedCharacters.length === 3) {
          store.commit("setCurrentPage", pageTypes.ENDING);
        }
      } else {
        store.commit("setCurrentPage", pageTypes.TABLEAU);
      }
    }
  },
  computed: {
    blob() {
      const successes = store.getters.getSuccesses;
      const mostRecentSuccess = successes[successes.length - 1];

      return {
        bodyText: wrap(narratives[mostRecentSuccess].bodyText),
        status: narratives[mostRecentSuccess].swordStatus[successes.length - 1],
        continueText: continueOptions[successes.length - 1]
      };
    }
  }
};
</script>
<style scoped>
.narrativePage {
  color: whitesmoke;
  text-align: left;
  padding: 100px;
  font-size: 14pt;
  width: 800px;
  margin: auto;
}
.button {
  color: black;
  padding: 10px;
  background-color: lightgray;
  width: fit-content;
  margin: 30px auto;
}
</style>
