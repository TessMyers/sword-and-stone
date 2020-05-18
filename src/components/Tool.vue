<template>
  <div class="tool" v-bind:class="{ active: isActive, hidden: isHidden }" v-on:click="chooseTool(type)">
    {{ flavorText }}
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
  text-align: center;
  /* line-height: 130px; */
  background-color: lightgray;
  height: 130px;
  width: 130px;
  margin: 10px 5px;
}

.hidden {
  display: none;
}
</style>
