<template>
  <span class="tooltip" @click="hide" v-bind:style="{ top: `${yPosition}px`, left: `${xPosition}px` }">{{ text }}</span>
</template>
<script>
export default {
  name: "tooltip",
  props: {
    text: String,
    xPosition: Number,
    yPosition: Number
  },
  methods: {
    hide() {
      this.$emit("hideTooltip");
    }
    // processCoordinates() {
    //   const screenWidth
    // }
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