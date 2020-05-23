<template>
  <div
    class="tool"
    v-bind:class="{ active: isActive, hidden: isHidden }"
    v-bind:style="{ backgroundImage: toolImageUrl }"
    v-on:click="chooseTool(type)"
  >
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
    imageName: String,
    isHidden: Boolean,
    isActive: Boolean,
    isSecondary: Boolean
  },
  methods: {
    chooseTool(tool) {
      const toolObj = tools[tool];
      this.$emit("toolClicked", toolObj);
    }
  },
  computed: {
    toolImageUrl: function() {
      if (this.imageName !== "") {
        return "url(" + require(`../assets/tools/${this.imageName}`) + ")";
      } else {
        return "";
      }
    }
  }
};
</script>

<style scoped>
.tool {
  background-color: rgb(20, 20, 20);
  height: 130px;
  width: 130px;
  margin: 20px 10px;
  /* position: relative; */
  /* background-image: url("../assets/tools/cow_image.png"); */
  background-size: contain;
}

.tool_text {
  /* position: absolute; */
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
  color: black;
}

.tool_text:hover {
  background-color:rgba(255, 255, 255, 0.6);
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
