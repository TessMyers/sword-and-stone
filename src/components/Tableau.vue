<template>
  <div class="container">
    <!-- <link href='https://fonts.googleapis.com/css?family=MedievalSharp' rel='stylesheet' type='text/css'> -->
    <!-- <div class="overlayText">Pull The Sword From The stone</div> -->
    <!-- <div class="overlay"></div> -->
    <transition name="modal_fade">
      <Modal v-show="isModalVisible" @close="closeModal" @success="trySuccess" @hideTool="hideTool" v-bind="modalProps"></Modal>
    </transition>
    <div class="tableau" v-bind:style="{ backgroundImage: backgroundImageUrl }">
      <!-- SVG click masks -->
      <div v-on:click="attemptClick($event, constants.targetTypes.SUN)" v-html="require(`!svg-inline-loader!../assets/svg/sun.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.STONE)" v-html="require(`!svg-inline-loader!../assets/svg/stone.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.CLOUDS)" v-html="require(`!svg-inline-loader!../assets/svg/clouds.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.PIPES)" v-html="require(`!svg-inline-loader!../assets/svg/pipes.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.FLOWERS)" v-html="require(`!svg-inline-loader!../assets/svg/flower.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.COW)" v-html="require(`!svg-inline-loader!../assets/svg/cow.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.MENHIR)" v-html="require(`!svg-inline-loader!../assets/svg/menhir.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.SHARDS)" v-html="require(`!svg-inline-loader!../assets/svg/shards.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.SHRINE)" v-html="require(`!svg-inline-loader!../assets/svg/shrine.svg`)"></div>

      <div v-on:click="attemptClick($event, constants.targetTypes.SWORD)" v-html="require(`!svg-inline-loader!../assets/svg/circle-sword.svg`)"></div>
      <!-- End SVG click masks -->
    </div>
    <div class="inventory">
      <div class="infoLinks">
        <div class="link circle" @click="showModal">?</div>
        <div class="link"><router-link to="/about" class="aboutLink">ABOUT</router-link></div>
        <div class="link"><span class="aboutLink" v-on:click="newGame">NEW GAME</span></div>
      </div>
      <div v-for="tool in characterTools" :key="tool.type">
        <Tool v-bind="tool" @toolClicked="handleToolClicked"></Tool>
      </div>
      <div class="characterImage" v-bind:style="{ backgroundImage: characterImageUrl }"></div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { pageTypes, toolTypes, targetTypes } from "@/constants";
import { modalTexts, modalTypes, modalTips } from "@/text";
import Tool from "@/components/Tool.vue";
import Modal from "@/components/Modal";

function attemptClick(event, clickTarget) {
  if (event.target.matches("polygon") || event.target.matches("circle")) {
    if (clickTarget === "SWORD") {
      this.tryClaimSword();
    } else {
      this.trySuccess(clickTarget);
    }
  }
  return;
}

function trySuccess(clickTarget) {
  const currentTool = store.getters.getActiveTool;
  const successes = store.getters.getSuccesses;
  console.log(currentTool.type, currentTool.target, clickTarget);

  if (currentTool.target === clickTarget || currentTool.type === clickTarget) {
    if (currentTool.hasSecondary) {
      store.commit("showHiddenTool", true);
      return;
    }
    if (successes.includes(currentTool.type)) {
      console.log("you have already done this", successes);
      this.modalProps = modalTexts[toolTypes.DONE];
      this.showModal();
      return;
    } else {
      store.commit("addSuccess", currentTool.type);
      store.commit("setCurrentPage", pageTypes.NARRATIVE);
    }
  }
  return;
}

function tryClaimSword() {
  if (!store.getters.canClaim) { return; }
  const characterEnding = `${store.getters.getCharacter}_ENDING`;
  store.commit("addSuccess", characterEnding);
  store.commit("setCurrentPage", pageTypes.NARRATIVE);
  return;
}

export default {
  name: "tableau",
  components: {
    Tool,
    Modal
  },
  data() {
    return {
      isModalVisible: false,
      image: "../assets/versions/tableau0.png", //remove
      constants: {
        pageTypes,
        targetTypes
      },
      modalProps: this.getHowTo()
    };
  },
  methods: {
    attemptClick,
    trySuccess,
    tryClaimSword,
    getHowTo() {
      const characterName = store.getters.getCharacter;
      const modal = modalTexts[modalTypes.HOWTO];
      modal.tip = modalTips[characterName];
      return modal;
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    handleToolClicked(toolObj) {
      store.commit("setActiveTool", toolObj);
      if (modalTexts[toolObj.type]) {
        this.modalProps = modalTexts[toolObj.type];
        this.showModal();
      }
    },
    hideTool() {
      console.log("hiding tool");
      store.commit("showHiddenTool", false);
    },
    newGame() {
      store.commit("newGame");
    }
  },
  computed: {
    characterTools() {
      const inventory = store.getters.getInventory;
      inventory.forEach(tool => {
        tool.isActive = tool.type === store.getters.getActiveTool.type;
      });
      return inventory;
    },
    characterImageUrl() {
      const characterName = store.getters.getCharacter;
      return "url(" + require(`@/assets/${characterName}_ICON.jpg`) + ")";
    },
    backgroundImageUrl() {
      const points = store.getters.getSuccesses.length;
      return "url(" + require(`@/assets/versions/tableau${points}.png`) + ")";
    }
  }
  // created() {
  //   console.log("created");
  // }
};
</script>
<style>
svg {
  position: absolute;
  opacity: 0;
}
.container {
  height: 677px;
  width: 1000px;
  position: relative;
  margin: 13px auto 0px auto;
  background-color:black;
}

.overlay {
  /* background-color: black; */
  /* z-index: 2; */
  /* not an ideal height solution */
  /* height: 100vh; */
  width: 100%;
  position: absolute;
}

/* .overlayText {
  font-family: 'MedievalSharp';
  position: absolute;
  left: 150px;
  top: 30px;
  color: rgb(179, 0, 0);
  font-size: 35pt;
  text-shadow: 0px 0px 5px rgb(68, 0, 0);
} */

.tableau {
  background-size: contain;
  height: 528px;
}

.infoLinks {
  position: absolute;
  left: 0px;
  bottom: 0px;
  display: inline-block;
  text-align: left;
  cursor: pointer;
}

.circle {
  height: 20px;
  width: 20px;
  border-radius: 20px;
  border: 1px solid white;
  text-align: center;
  margin: 0px 0px 5px 0px;
}

.link,
.link > a {
  text-decoration: none;
  color: white;
  margin-top: 10px;
}

.characterImage {
  position: absolute;
  right: 0px;
  height: 130px;
  width: 130px;
  border-radius: 130px;
  background-size: contain;
}

.inventory {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  margin: 8px 0px;
}
</style>
