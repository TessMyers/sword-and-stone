<template>
  <div class="tool" v-bind:class="{ active: isActive, hidden: isHidden }" v-on:click="chooseTool(type)">
    <div class="tool_text">
      <p>{{ flavorText }}</p>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import { tools } from "@/constants";

export default {
  name: "tool",
  props: {
    type: String,
    flavorText: String,
    imageSrc: String,
    isHidden: Boolean,
    isActive: Boolean,
    isSecondary: Boolean
  },
  methods: {
    chooseTool(tool) {
      const toolObj = tools[tool];
      this.$emit("toolClicked", toolObj);
    }
  }
};
</script>

<style scoped>
.tool {
  background-color: lightgray;
  height: 130px;
  width: 130px;
  margin: 10px 5px;
  position: relative;
}

.tool_text {
  position: absolute;
  height: 130px;
  width: 130px;
  font-size: 14pt;
  display: table;
  opacity: 0;
  /* background-color: rgba(0, 0, 0, 0.3); */
}

.tool_text p {
  display: table-cell;
  vertical-align: bottom;
  text-align: center;
  padding: 0px 8px 20px 8px;
}

.tool_text:hover {
  opacity: 1;
}

.hidden {
  display: none;
}

.active {
  border: 1px solid white;
  /* opacity: 0; */
  /* opacity: 1; */
}
</style>
