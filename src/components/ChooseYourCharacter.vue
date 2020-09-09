<template>
  <!DOCTYPE html>
  <div class="container">
    <div class="introText">
      <div class="titlePanel">
        <div class="swordImage"></div>
        <span class="gameTitle"><router-link to="/about">Destiny</router-link></span>
        <div class="swordImage reverse"></div>
      </div>
      <p class="legend">
        Legend tells of a sword with the power to keep peace, prosperity, and balance. For many years this blade protected the land, but it was lost
        nearly a century ago, throwing the country into turmoil and conflict. Many believe that the sword will one day be found by some bold person
        who will put the country to rights. Could it be you? Choose your identity:
      </p>
    </div>
    <Modal v-show="isModalVisible" @close="closeModal" v-bind="modalProps"></Modal>
    <div class="panels">
      <div v-on:click="beginGame(constants.characters.FARMHAND)">
        <div class="characterTitle">The Farmhand</div>
        <div class="panel farmhand" v-bind:class="{ completed: completedChars.includes(constants.characters.FARMHAND.name) }"></div>
        <div class="characterTraits">Gentle and Curious</div>
      </div>

      <div v-on:click="beginGame(constants.characters.KNIGHT)">
        <div class="characterTitle">The Knight</div>
        <div class="panel knight" v-bind:class="{ completed: completedChars.includes(constants.characters.KNIGHT.name) }"></div>
        <div class="characterTraits">Strong and Resourceful</div>
      </div>

      <div v-on:click="beginGame(constants.characters.MONK)">
        <div class="characterTitle">The Monk</div>
        <div class="panel monk" v-bind:class="{ completed: completedChars.includes(constants.characters.MONK.name) }"></div>
        <div class="characterTraits">Adept and Cunning</div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { pageTypes, characters } from "../constants";
import { modalTexts, modalTypes } from "@/text";
import Modal from "@/components/Modal";

export default {
  name: "chooseYourCharacter",
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: true,
      modalProps: modalTexts[modalTypes.SMALL_SCREEN],
      constants: {
        pageTypes,
        characters,
      }
    };
  },
  methods: {
    beginGame: character => {
      if (!store.getters.getFinishedCharacters.includes(character.name)) {
        store.commit("setCharacter", character);
        store.commit("setCurrentPage", pageTypes.TABLEAU);
      }
    },
    closeModal() {
    this.isModalVisible = false;
  },
  },
  computed: {
    completedChars() {
      return store.getters.getFinishedCharacters;
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: "Ringbearer";
  src: url("../assets/fonts/ringbearer/RINGM___.TTF") format("truetype");
}

.introText {
  text-align: center;
  margin-top: 30px;
}

.gameTitle {
  font-family: Ringbearer;
  font-size: 34pt;
  margin: 0px 30px;
}

.titlePanel {
  display: flex;
  margin: auto;
  width: fit-content;
}

.swordImage {
  background-image: url("../assets/sword_vector.png");
  height: 36px;
  width: 170px;
  background-size: contain;
  margin-top: 8px;
}

.reverse {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.legend {
  font-size: 12pt;
  font-style: italic;
}

.container {
  position: relative;
  height: 677px;
  width: 1000px;
  margin: 13px auto 0px auto;
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
  width: 301px;
  margin: 0px 10px;
  background-size: contain;
  cursor: pointer;
  border-radius: 6px;
}

.characterTitle {
  /* import font if using */
  cursor: pointer;
  font-family: Ringbearer;
  font-size: 20pt;
  padding: 15px;
}

.characterTraits {
  font-size: 16pt;
  padding: 10px;
  color: lightgray;
  font-style: italic;
  cursor: pointer;
}

.knight {
  background-image: url("../assets/knight_147.jpg");
}

.farmhand {
  background-image: url("../assets/farmhand_142.jpg");
}

.monk {
  background-image: url("../assets/monk_152.jpg");
}

.completed {
  opacity: 0.4;
}

.introText {
  text-align: center;
  margin-top: 30px;
}

/* external styles */
.modal {
  display: none;
}

@media (max-width: 479px) {
  .modal {
    display: inline-block;
    background-color: whitesmoke;
    color: black;
  }
}
</style>
