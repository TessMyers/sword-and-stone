<template>
  <div class="endingPage">
    <p v-for="(paragraph, index) in endText" v-bind:key="index">
      {{ paragraph }}
    </p>
    <button v-on:click="newGame">Reset game</button>
  </div>
</template>
<script>
import store from "@/store/index";
import { end } from "@/text";

export default {
  name: "ending",
  data() {
    return {
      endText: end
    };
  },
  methods: {
    newGame: () => {
      store.commit("newGame");
    }
  }
};
</script>
<style scoped>
/* copied style */
.endingPage {
  color: whitesmoke;
  text-align: left;
  padding: 50px;
  font-size: 14pt;
}

/* copied style */
.button {
  color: black;
  padding: 10px;
  background-color: lightgray;
  width: fit-content;
  margin: 30px auto;
  align-items: center;

}
</style>
