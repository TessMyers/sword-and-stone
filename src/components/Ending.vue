<template>
  <div class="endingPage">
    <p v-for="(paragraph, index) in endText" v-bind:key="index">
      {{ paragraph }}
    </p>
    <div class="centered">
      <h3>THE END</h3>
      <span class="betaRequest">* Thanks for playing the beta! If you like, feedback can be left on the About page *</span>
      <div>
        <span class="link" v-on:click="newGame">Reset</span> |
        <span class="link"><router-link to="/about" class="aboutLink">About</router-link></span>
      </div>
    </div>
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
a {
  text-decoration: none;
}
.endingPage {
  color: whitesmoke;
  text-align: left;
  padding: 50px;
  font-size: 14pt;
  width: 900px;
  margin: auto;
}

.centered {
  text-align: center;
}

.betaRequest {
  color:red;
  font-style: italic;
  font-size: 12pt;
}
</style>
