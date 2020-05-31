<template>
  <span class="tooltip" v-bind:style="{ top: `${yPosition}px`, left: `${xPosition}px` }">{{ text }}</span>
</template>
<script>
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
  watch: {
    $props: {
      handler() {
        const xWithinTableau = this.mouseEvent.clientX - this.boundingRect.left;
        const leftness = xWithinTableau > 700 ? this.boundingRect.left + 300 : this.boundingRect.left;
        this.xPosition = Math.round(this.mouseEvent.clientX - leftness) + 2;
        this.yPosition = Math.round(this.mouseEvent.clientY - this.boundingRect.top) + 2;
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
  max-width: 310px;
  padding: 2px 5px;
  border-radius: 3px;
  z-index: 2;
}
</style>