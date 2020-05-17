<template>
  <div class="container">
    <div class="tableau">
      <!-- SVG click masks -->
      <div v-on:click="attemptClick($event, 'SHRINE')" v-html="require(`!svg-inline-loader!../assets/flower.svg`)"></div>
      <!-- End SVG click masks -->
    </div>
    <div class="inventory">
      <div v-for="tool in characterTools" :key="tool.type">
        <Tool v-bind="tool"></Tool>
      </div>
      <div class="characterImage" v-bind:style="{ backgroundImage: characterImageUrl }"></div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { pageTypes, characters, tools } from "@/constants";
import Tool from "@/components/Tool.vue";

function attemptClick(event, clickTarget) {
  if (!event.target.matches("polygon")) {
    return;
  }
  const currentTool = store.getters.getActiveTool;
  if (currentTool.target === clickTarget) {
    store.commit("addSuccess", currentTool.type);
    store.commit("setCurrentPage", pageTypes.NARRATIVE);
  }
  return;
}

export default {
  name: "tableau",
  components: {
    Tool
  },
  data() {
    return {
      constants: {
        pageTypes
      }
    };
  },
  methods: {
    attemptClick
  },
  computed: {
    characterTools() {
      let toolsObj = characters[store.getters.getCharacter].tools;
      toolsObj = JSON.parse(JSON.stringify(toolsObj));
      toolsObj.forEach(tool => {
        tool.isActive = tool.type === store.getters.getActiveTool.type;
      });
      return toolsObj;
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
