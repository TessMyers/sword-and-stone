<template>
  <div>
    ENDING PAGE WOOO
    <button v-on:click="newGame">Reset game</button>
  </div>
</template>
<script>
import store from "@/store/index";

export default {
  name: "ending",
  methods: {
    newGame: () => {
      store.commit("newGame");
    }
  }
};
</script>
