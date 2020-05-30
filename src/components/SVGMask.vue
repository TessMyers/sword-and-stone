<template>
  <div
    v-on:mousedown="attemptClick($event, 'CROW_A')"
    v-html="require(`!svg-inline-loader!../assets/svg/topBird.svg`)"
    @mouseover="showTooltip"
    @mouseleave="hideTooltip"
  ></div>
</template>
<script>
export default {
  name: "svgMask",
  props: {
    type: String
  }
};
</script>
