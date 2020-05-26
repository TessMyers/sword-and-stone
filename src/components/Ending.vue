<template>
  <div class="endingPage">
    <p v-for="(paragraph, index) in endText" v-bind:key="index">
      {{ paragraph }}
    </p>
    <div class="centered">
      <h3>THE END</h3>
      <div>
        <span v-on:click="newGame">Reset</span>  |  
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
</style>
