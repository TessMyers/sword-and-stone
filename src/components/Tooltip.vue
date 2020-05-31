<template>
  <span class="tooltip" @click="hide" v-bind:style="{ top: `${yPosition}px`, left: `${xPosition}px` }">{{ text }}</span>
</template>
<script>
import { tipTexts } from "@/text";

export default {
  name: "tooltip",
  props: {
    mouseEvent: Event,
    boundingRect: DOMRect,
    text: String
  },
  data() {
    return {
      yPosition: 0,
      xPosition: 0
    };
  },
  methods: {
    hide() {
      this.$emit("hideTooltip");
    }
  },
  watch: {
    $props: {
      handler() {
        this.xPosition = this.mouseEvent.clientX - this.boundingRect.left;
        this.yPosition = this.mouseEvent.clientY - this.boundingRect.top;
      },
      deep: true
    }
  }
};
</script>
<style scoped>
.tooltip {
  background-color: rgba(0, 0, 0, 0.801);
  color: rgb(255, 255, 255);
  position: absolute;
  left: 50%;
  top: 50%;
  width: fit-content;
  padding: 2px 10px;
  border-radius: 3px;
}
</style>