<template>
  <!DOCTYPE html>
  <div class="container">
    <div id="introText">
      <h1>Destiny</h1>
      <h3>A game of perspective and choice</h3>
      <h3>Who will you be?</h3>
    </div>
    <div class="panels">
      <div>
        <div class="characterTitle">The Farmhand</div>
        <div
          class="panel farmhand"
          v-on:click="beginGame(constants.characters.FARMHAND)"
          v-bind:class="{ completed: completedChars.includes(constants.characters.FARMHAND.name) }"
        ></div>
        <div class="characterTraits">Gentle and Curious</div>
      </div>

      <div>
        <div class="characterTitle">The Knight</div>
        <div
          class="panel knight"
          v-on:click="beginGame(constants.characters.KNIGHT)"
          v-bind:class="{ completed: completedChars.includes(constants.characters.KNIGHT.name) }"
        ></div>
        <div class="characterTraits">Strong and Resourceful</div>
      </div>

      <div>
        <div class="characterTitle">The Monk</div>
        <div
          class="panel monk"
          v-on:click="beginGame(constants.characters.MONK)"
          v-bind:class="{ completed: completedChars.includes(constants.characters.MONK.name) }"
        ></div>
        <div class="characterTraits">Resolute and Cunning</div>
      </div>
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
@font-face {
  font-family: "Ringbearer";
  src: url("/assets/fonts/ringbearer/RINGM___.TTF") format("truetype");
}

.container {
  position: relative;
  height: 677px;
  width: 1000px;
  margin: 13px auto 0px auto;
  background-color:black;
  color: whitesmoke;
}

.panels {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.panel {
  height: 400px;
  width: 300px;
  margin: 0px 10px;
  background-size: contain;
}

.characterTitle {
  /* import font if using */
  font-family: Ringbearer;
  font-size: 20pt;
  padding: 15px;
}

.characterTraits {
  font-size: 16pt;
  padding: 10px;
  color: lightgray;
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
  padding-bottom: 10px;
}
</style>
