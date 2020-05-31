<template>
  <div class="container">
    <transition name="modal_fade">
      <Modal v-show="isModalVisible" @close="closeModal" @success="trySuccess" @hideTool="hideTool" v-bind="modalProps"></Modal>
    </transition>
    <Tooltip v-show="isTooltipVisible" @hideTooltip="hideTooltip" v-bind="tooltipProps"></Tooltip>
    <div class="tableau" v-bind:style="{ backgroundImage: backgroundImageUrl }" ref="tableau" @mouseup="hideTooltip($event)">
      <!-- eslint-disable -->
      <!-- SVG click masks -->
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/topBird.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/bottomBird.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/flock.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/stream.svg`)"></div>

      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/musicalMushroomA.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/musicalMushroomC.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/musicalMushroomD.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/musicalMushroomE.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/musicalMushroomG.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/mushroom01.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/mushroom02.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/mushroom03.svg`)"></div>

      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/sun.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/stone.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/clouds.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/pipes.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/flower.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/cow.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/menhir.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/shards.svg`)"></div>
      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/shrine.svg`)"></div>

      <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/sword.svg`)"></div>
      <!-- End SVG click masks -->
      <!-- eslint-enable -->
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
import { modalTexts, modalTypes, modalTips, tipTexts } from "@/text";
import Tool from "@/components/Tool.vue";
import Modal from "@/components/Modal";
import Tooltip from "@/components/Tooltip";
import { playSound } from "@/sounds";

function attemptClick(event) {
  if (event.target.matches("polygon") || event.target.matches("circle")) {
    const clickTarget = event.target.id;
    if (clickTarget === "SWORD") {
      this.tryClaimSword();
    } else {
      this.trySuccess(clickTarget, event);
    }
  }
  return;
}

function trySuccess(clickTarget, event) {
  const currentTool = store.getters.getActiveTool;
  const character = store.getters.getCharacter;
  const successes = store.getters.getSuccesses;
  const tipText = tipTexts[character][currentTool.type][clickTarget];

  if (tipText) {
    this.showTooltip(tipText, event);
  }
  // if the tool is correct for the target
  if (currentTool.target === clickTarget || currentTool.type === clickTarget) {
    // display secondary tool if there is one and return
    if (currentTool.hasSecondary) {
      playSound(`${clickTarget}_SECONDARY`);
      store.commit("showHiddenTool", true);
      return;
    }
    // if not secondary tool but you have already done this, do nothing
    if (successes.includes(currentTool.type)) {
      this.modalProps = modalTexts[toolTypes.DONE];
      this.showModal();
      return;
    } else {
      // but if you have not, SUCCESS
      playSound(`${clickTarget}_SUCCESS`);
      store.commit("addSuccess", currentTool.type);
      store.commit("setCurrentPage", pageTypes.NARRATIVE);
      return;
    }
  }
  // if the target has a sound, play it
  playSound(clickTarget);
  return;
}

function tryClaimSword() {
  if (!store.getters.canClaim) { return; }
  const characterEnding = `${store.getters.getCharacter}_ENDING`;
  store.commit("addSuccess", characterEnding);
  store.commit("setCurrentPage", pageTypes.NARRATIVE);
  return;
}

function showTooltip(tipText, event) {
  if (this.$refs.tableau) {
    // try to remove if clause, might not need
    this.tooltipProps = {
      mouseEvent: event,
      boundingRect: this.$refs.tableau.getBoundingClientRect(),
      text: tipText
    };
    this.isTooltipVisible = true;
  }
}

export default {
  name: "tableau",
  components: {
    Tool,
    Modal,
    Tooltip
  },
  data() {
    return {
      isModalVisible: false,
      isTooltipVisible: false,
      constants: {
        pageTypes,
        targetTypes
      },
      modalProps: this.getHowTo(),
      tooltipProps: {}
    };
  },
  methods: {
    attemptClick,
    trySuccess,
    tryClaimSword,
    showTooltip,
    hideTooltip(e) {
      console.log(e);
      this.isTooltipVisible = false;
    },
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
      this.modalProps = this.getHowTo();
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
      return "url(" + require(`@/assets/versions/tableau${points}.jpg`) + ")";
    }
  }
};
</script>
<style>
svg {
  position: absolute;
  opacity: 0.2;
}
.container {
  /* height: 677px;
  width: 1000px; */
  position: relative;
  /* margin: 13px auto 0px auto; */
  background-color:black;
}

.tableau {
  background-size: contain;
  height: 526px;
  cursor: crosshair;
}

.infoLinks {
  position: absolute;
  left: 0px;
  bottom: 50px;
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
  margin: 0px 0px 9px 0px;
}

.link,
.link > a {
  text-decoration: none;
  color: white;
  margin-top: 6px;
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
