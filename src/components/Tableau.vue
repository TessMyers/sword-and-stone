<template>
  <div class="container">
    <div class="overlay"></div>
    <transition name="modal_fade">
      <Modal v-show="isModalVisible" @close="closeModal" @success="trySuccess" @hideTool="hideTool" v-bind="modalProps"></Modal>
    </transition>
    <div class="tableau" v-bind:style="{ backgroundImage: backgroundImageUrl }">
      <!-- SVG click masks -->
      <div v-on:click="attemptClick($event, constants.targetTypes.SUN)" v-html="require(`!svg-inline-loader!../assets/svg/sun.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.STONE)" v-html="require(`!svg-inline-loader!../assets/svg/stone.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.CLOUDS)" v-html="require(`!svg-inline-loader!../assets/svg/clouds.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.PIPES)" v-html="require(`!svg-inline-loader!../assets/svg/pipes.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.FLOWER)" v-html="require(`!svg-inline-loader!../assets/svg/flower.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.COW)" v-html="require(`!svg-inline-loader!../assets/svg/cow.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.MENHIR)" v-html="require(`!svg-inline-loader!../assets/svg/menhir.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.SHARDS)" v-html="require(`!svg-inline-loader!../assets/svg/shards.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.SHRINE)" v-html="require(`!svg-inline-loader!../assets/svg/shrine.svg`)"></div>

      <div v-on:click="attemptClick($event, constants.targetTypes.SWORD)" v-html="require(`!svg-inline-loader!../assets/svg/sword.svg`)"></div>
      <!-- End SVG click masks -->
    </div>
    <div class="inventory">
      <router-link to="/about" class="aboutLink">ABOUT</router-link>
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
import { modalTexts } from "@/text";
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

  if (currentTool.hasSecondary) {
    store.commit("showHiddenTool", true);
  } else if (currentTool.target === clickTarget || currentTool.type === clickTarget) {
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
      modalProps: modalTexts["COW"] //FIX
    };
  },
  methods: {
    attemptClick,
    trySuccess,
    tryClaimSword,
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
  },
  created() {
    console.log("created");
  }
};
</script>
<style>
svg {
  position: absolute;
  opacity: 0.5;
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

.tableau {
  background-color: lightgray;
  /* background-image: require('../assets/versions/tableau0.png'); */
  background-size: contain;
  height: 528px;
}

.aboutLink {
  position: absolute;
  left: 50px;
}

.characterImage {
  position: absolute;
  right: 20px;
  height: 130px;
  width: 130px;
  /* background-color: lightcoral; */
  border-radius: 130px;
  /* background-image: url(characterImageUrl); needs default image */
  background-size: contain;
}

.inventory {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: dimgray;
  height: 150px;
  margin: 13px 0px;
}

.tool {
  text-align: center;
  /* line-height: 130px; */
  background-color: lightgray;
  height: 130px;
  width: 130px;
  margin: 10px 5px;
}

.modal_fade-enter-active,
.modal_fade-leave-active {
  transition: opacity-color 0.25s ease-out;
}

/* .body_fade_begin, */

/* .body_fade-enter,
.body_fade-leave-to {
  opacity: 0;
} */

.modal_fade-enter,
.modal_fade-leave-to {
  opacity: 0;
}
</style>
