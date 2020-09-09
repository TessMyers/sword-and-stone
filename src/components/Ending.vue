<template>
  <div class="endingPage">
    <div class="mainText">
      <p v-for="(paragraph, index) in endText" v-bind:key="index">
        {{ paragraph }}
      </p>
      <div class="centered">
        <h3>The End</h3>
        <br>
        <br>
      </div>
    </div>
    <div class="mainTextOverlay">&#8595;&#8595;&#8595;</div>
    <div class="centered links">
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
  height: 530px;
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
  color: rgba(255, 255, 255, 0.4)
}

.centered {
  text-align: center;
}

.links {
  margin: 20px auto;
}

</style>
