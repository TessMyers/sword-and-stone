<template>
  <div class="narrativePage">
    <p>{{ blob.bodyText }}</p>
    <p>{{ blob.status }}</p>
  </div>
</template>

<script>
import store from "@/store/index";
import { narratives } from "@/text";

export default {
  name: "narrative",
  computed: {
    blob() {
      const successes = store.getters.getSuccesses;
      const mostRecentSuccess = successes[successes.length - 1];
      return {
        bodyText: narratives[mostRecentSuccess].bodyText,
        status: narratives[mostRecentSuccess].swordStatus[successes.length - 1]
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
</style>
