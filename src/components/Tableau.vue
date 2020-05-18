<template>
  <div class="container">
    <Modal v-show="isModalVisible" @close="closeModal" @success="trySuccess" @hideTool="hideTool" v-bind="modalProps"></Modal>
    <div class="tableau">
      <!-- SVG click masks -->
      <div v-on:click="attemptClick($event, constants.targetTypes.PIPES)" v-html="require(`!svg-inline-loader!../assets/svg/flower.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.COW)" v-html="require(`!svg-inline-loader!../assets/svg/cow.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.MENHIR)" v-html="require(`!svg-inline-loader!../assets/svg/menhir.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.SHARDS)" v-html="require(`!svg-inline-loader!../assets/svg/shards.svg`)"></div>
      <div v-on:click="attemptClick($event, constants.targetTypes.SHRINE)" v-html="require(`!svg-inline-loader!../assets/svg/shrine.svg`)"></div> -->
      <!-- End SVG click masks -->
    </div>
    <div class="inventory">
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
  if (event.target.matches("polygon")) {
    this.trySuccess(clickTarget);
  }
  return;
}

function trySuccess(clickTarget) {
  const currentTool = store.getters.getActiveTool;
  const successes = store.getters.getSuccesses;

  if (successes.includes(currentTool.type)) {
    console.log("you have already done this");
    this.modalProps = modalTexts[toolTypes.DONE];
    this.showModal();
    return;
  }
  if (currentTool.hasSecondary) {
    store.commit("showHiddenTool", true);
  } else if (currentTool.target === clickTarget || currentTool.type === clickTarget) {
    store.commit("addSuccess", currentTool.type);
    store.commit("setCurrentPage", pageTypes.NARRATIVE);
  }
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
  height: 677px;
  width: 1000px;
  position: relative;
  margin: 13px auto 0px auto;
  background-color:black;
}

.tableau {
  background-color: lightgray;
  background-image: url("../assets/tableau.jpg");
  background-size: contain;
  height: 528px;
}

.characterImage {
  position: absolute;
  right: 20px;
  height: 130px;
  width: 130px;
  /* background-color: lightcoral; */
  border-radius: 130px;
  /* background-image: url(characterImageUrl); needs default image */
  /* background-image: url('../assets/sword_logo.jpg'); */
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

.item {
  position: absolute;
  /* display: none; */
  background-color: red;
  width: 100px;
  height: 100px;
}

.active {
  border: 3px solid blue;
}
</style>
