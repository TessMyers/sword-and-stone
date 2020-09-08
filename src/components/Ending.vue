<template>
  <div class="endingPage">
    <div class="mainText">
      <p v-for="(paragraph, index) in endText" v-bind:key="index">
        {{ paragraph }}
      </p>
    </div>
    <div class="mainTextOverlay">&#8595;&#8595;&#8595;</div>
    <div class="centered">
      <h3>THE END</h3>
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

.mainText {
  height: 496px;
  overflow: auto;
}

.mainTextOverlay {
  position: absolute;
  height: 100px;
  width: 900px;
  margin-top: -100px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 20pt;
  
}

.centered {
  text-align: center;
}

</style>
