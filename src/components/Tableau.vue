<template>
  <div class="container">
    <transition name="modal_fade">
      <Modal v-show="isModalVisible" @close="closeModal" @success="trySuccess" @hideTool="hideTool" v-bind="modalProps"></Modal>
    </transition>
    <transition name="tooltip_fade"><Tooltip v-show="isTooltipVisible" v-bind="tooltipProps" @hide="hideTooltip()"></Tooltip></transition>
    <div class="tableau" v-bind:style="{ backgroundImage: backgroundImageUrl }" ref="tableau" @mousedown="hideTooltip($event)">
      <!-- SVG click masks -->
      <div v-for="target in constants.allSvgTargets" v-bind:key="target">
        <div v-on:mousedown="attemptClick($event)" v-html="require(`!svg-inline-loader!../assets/svg/${target.toLowerCase()}.svg`)"></div>
      </div>
      <!-- End SVG click masks -->
      <div class="sunCircle" ref="sunCircle"></div>
      <div class="swordCircle" ref="swordCircle"></div>
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
      <div class="mushroom" @click="toggleInversion()" v-html="require(`!svg-inline-loader!../assets/svg/mushie.svg`)" v-bind:style="getMushDisplay()"></div>
      <div class="characterImage" @click="showCharIntro()" v-bind:style="{ backgroundImage: characterImageUrl }"></div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { pageTypes, toolTypes, allSvgTargets } from "@/constants";
import { modalTexts, modalTypes, tipTexts, modalCharacterIntros } from "@/text";
import Tool from "@/components/Tool";
import Modal from "@/components/Modal";
import Tooltip from "@/components/Tooltip";
import { playSound } from "@/sounds";
import { expandRing, checkMushroomRun, isSVGTarget } from "@/helpers";

function attemptClick(event) {
  if (isSVGTarget(event.target)) {
    const clickTarget = event.target.id;
    if (clickTarget === "SWORD") {
      this.tryClaimSword();
    } else {
      this.trySuccess(clickTarget, event);
    }
    if (clickTarget === "SUN") {
      expandRing(this.$refs.sunCircle, 'sun');
    } if (checkMushroomRun(clickTarget)){
      setTimeout(() => {
        store.commit("showMushroom");
        playSound("mushie");
      }, 500);
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
  playSound(clickTarget);
  return;
}

function tryClaimSword() {
  if (!store.getters.canClaim) {
    return;
  }
  const characterEnding = `${store.getters.getCharacter}_ENDING`;
  store.commit("addSuccess", characterEnding);
  store.commit("setCurrentPage", pageTypes.NARRATIVE);
  return;
}

function showTooltip(tipText, event) {
  if (this.$refs.tableau && tipText) {
    // if.tableau clause?
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
        allSvgTargets
      },
      modalProps: this.getHowTo(),
      tooltipProps: {}
    };
  },
  methods: {
    attemptClick,
    trySuccess,
    tryClaimSword,
    expandRing,
    showTooltip,
    hideTooltip(event) {
      if(event && isSVGTarget(event.target)) {
        return;
      }
      this.isTooltipVisible = false;
      
    },
    getHowTo() {
      return modalTexts[modalTypes.HOWTO];
    },
    showCharIntro() {
      this.modalProps = modalCharacterIntros[store.getters.getCharacter];
      this.showModal();
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      setTimeout(() => {
        this.modalProps = this.getHowTo();
      }, 500);
    },
    handleToolClicked(toolObj) {
      if (this.isModalVisible) {
        return;
      }
      store.commit("setActiveTool", toolObj);
      if (modalTexts[toolObj.type]) {
        this.modalProps = modalTexts[toolObj.type];
        this.showModal();
      }
    },
    hideTool() {
      store.commit("showHiddenTool", false);
    },
    newGame() {
      store.commit("newGame");
    },
    toggleInversion() {
      store.commit("toggleMushroomInversion");
    },
    getMushDisplay() {
      return {
        display: store.getters.getIsMushroomVisible ? "block" : "none",
        fill: store.getters.getIsMushroomInvertOn ? "#cc4231" : "#33bdce"
      }
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
      const isInverted = store.getters.getIsMushroomInvertOn ? "inverted" : "";
      return "url(" + require(`@/assets/versions/tableau${points}${isInverted}.jpg`) + ")";
    }
  },
  mounted() {
    if (!store.getters.getHasSeenCharIntro) {
      this.showCharIntro();
    }
    if (store.getters.getSuccesses.length > 0) {
      expandRing(this.$refs.swordCircle, 'sword');
    }
  },
};
</script>
<style>
svg {
  position: absolute;
  opacity: 0;
}
.container {
  position: relative;
  height: 100%;
}

.tableau {
  background-size: contain;
  height: 526px;
  cursor: crosshair;
}

.infoLinks {
  position: absolute;
  left: 0px;
  bottom: 57px;
  display: inline-block;
  text-align: left;
  cursor: pointer;
  opacity: 0.9;
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
  cursor: pointer;
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
  margin: 10px 0px;
}

.mushroom {
  position: absolute;
  height: 40px;
  width: 40px;
  top: 591px;
  right: 138px;
}

.sunCircle {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: absolute;
  top: 29px;
  right: 136px;
  pointer-events: none;

  -webkit-transition: all 2s ease;  
  -moz-transition: all 2s ease;  
  -o-transition: all 2s ease;  
  -ms-transition: all 2s ease;  
  transition: all 2s ease;
}

.sunCircleOpen {
  background-color:white;
  box-shadow: 0 0 5px 20px rgba(255, 255, 255, 0.5);
}

.swordCircle {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: absolute;
  top: 283px;
  right: 478px;
  pointer-events: none;

  -webkit-transition: all 2s ease-out;  
  -moz-transition: all 2s ease-out;  
  -o-transition: all 2s ease-out;  
  -ms-transition: all 2s ease-out;  
  transition: all 2s ease-out;
}

.swordCircleOpen {
  background-color:rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 5px 20px rgba(255, 255, 255, 0.5);
}


</style>
