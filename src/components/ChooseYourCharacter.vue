<template>
  <!DOCTYPE html>
  <div class="container">
    <div id="introText">
      <h1>Destiny</h1>
      <h3>A game of perspective and choice</h3>
      <h3>Who are you?</h3>
    </div>
    <div class="panels">
      <div
        class="panel farmhand"
        v-on:click="beginGame(constants.characters.FARMHAND)"
        v-bind:class="{ completed: completedChars.includes(constants.characters.FARMHAND.name) }"
      ></div>
      <div
        class="panel knight"
        v-on:click="beginGame(constants.characters.KNIGHT)"
        v-bind:class="{ completed: completedChars.includes(constants.characters.KNIGHT.name) }"
      ></div>
      <div
        class="panel monk"
        v-on:click="beginGame(constants.characters.MONK)"
        v-bind:class="{ completed: completedChars.includes(constants.characters.MONK.name) }"
      ></div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { pageTypes, characters } from "../constants";

export default {
  name: "chooseYourCharacter",
  data() {
    return {
      constants: {
        pageTypes,
        characters
      }
    };
  },
  methods: {
    beginGame: character => {
      if (!store.getters.getFinishedCharacters.includes(character.name)) {
        store.commit("setCharacter", character);
        store.commit("setCurrentPage", pageTypes.TABLEAU);
      } else {
        console.log("YOU HAVE ALREADY BEEN THIS CHARACTER");
      }
    }
  },
  computed: {
    completedChars() {
      return store.getters.getFinishedCharacters;
    }
  }
};
</script>

<style>
.container {
  height: 677px;
  width: 1000px;
  position: relative;
  margin: 13px auto 0px auto;
  background-color:black;
}

.panels {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: black;
}

.panel {
  background-color: lightgray;
  height: 400px;
  /*width: 275px;*/
  width: 300px;
  margin: 0px 10px;
  background-size: contain;
}

.knight {
  background-image: url("../assets/knight.jpg");
}

.farmhand {
  background-image: url("../assets/farmhand.jpg");
}

.monk {
  background-image: url("../assets/monk.jpg");
}

.completed {
  opacity: 0.4;
}

#introText {
  text-align: center;
  padding-bottom: 40px;
}

#message {
  background-color: lightgray;
  height: 75px;
  width: 700px;
  margin: 30px auto;
}
</style>
