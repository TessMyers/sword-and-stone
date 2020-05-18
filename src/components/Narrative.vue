<template>
  <div class="narrativePage">
    <p>{{ blob.bodyText }}</p>
    <p>{{ blob.status }}</p>
     <div class="button" v-on:click="goBack()">{{ blob.continueText }}</div>
  </div>
</template>

<script>
import store from "@/store/index";
import { pageTypes } from "@/constants";
import { narratives, continueOptions } from "@/text";

export default {
  name: "narrative",
  methods: {
    goBack: () => {
      store.commit("setCurrentPage", pageTypes.TABLEAU);
    }
  },
  computed: {
    blob() {
      const successes = store.getters.getSuccesses;
      const mostRecentSuccess = successes[successes.length - 1];
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
}
.button {
  color: black;
  padding: 10px;
  background-color: lightgray;
  width: fit-content;
}
</style>
