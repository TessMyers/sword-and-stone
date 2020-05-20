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
      if (store.getters.getSuccesses.length === 4) {
        store.commit("endGameForCharacter");
      } else if (store.getters.getFinishedCharacters.length === 3) {
        //end the game for real
        store.commit("setCurrentPage", pageTypes.ENDING);
      } else {
        store.commit("setCurrentPage", pageTypes.TABLEAU);
      }
    }
  },
  computed: {
    blob() {
      const successes = store.getters.getSuccesses;
      const mostRecentSuccess = successes[successes.length - 1];

      // TODO add <p></p> wrap
      return {
        bodyText: narratives[mostRecentSuccess].bodyText,
        status: narratives[mostRecentSuccess].swordStatus[successes.length - 1],
        continueText: continueOptions[successes.length - 1]
      };
    }
  }
};
</script>

<style scoped>
.narrativePage {
  color: white;
  text-align: left;
  padding: 100px;
  font-size: 14pt;
}
.button {
  color: black;
  padding: 10px;
  background-color: lightgray;
  width: fit-content;
  margin: auto;
}
</style>
