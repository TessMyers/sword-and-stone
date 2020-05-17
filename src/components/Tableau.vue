<template>
  <div class="container">
    <div class="tableau">
      <div class="item" id="yellow"></div>
    </div>
    <div class="inventory">
      <div v-html="buildInventory(characterTools)" class="inventory"></div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { pageTypes, characterTypes, characters } from "../constants";

function buildInventory(charTools) {
  let inventory = "";
  charTools.forEach(tool => {
    // probably make a component for this
    inventory += `<div class="tool">${tool.flavorText}</div>`;
  });
  return inventory;
}

export default {
  name: "tableau",
  data() {
    return {
      constants: {
        pageTypes,
        characters
      }
    };
  },
  methods: {
    buildInventory
  },
  computed: {
    characterTools() {
      const toolsObj = characters[store.getters.getCharacter].tools;
      return JSON.parse(JSON.stringify(toolsObj));
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

.tableau {
  background-color: lightgray;
  background-image: url('../assets/tableau.jpg');
  background-size: contain;
  height: 528px;
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
  display: none;
}

.active {
  border: 3px solid blue;
}
</style>
