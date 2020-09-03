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
        // Absolutely terrible offset calc, but it works for what I got
        const offsetWidth = Math.min(this.text.length * 7, 300);
        const xWithinTableau = this.mouseEvent.clientX - this.boundingRect.left;
        const leftness = xWithinTableau > 1000 - offsetWidth ? this.boundingRect.left + offsetWidth : this.boundingRect.left;
        this.xPosition = Math.round(this.mouseEvent.clientX - leftness) + 2;
        this.yPosition = Math.round(this.mouseEvent.clientY - this.boundingRect.top) + 2;
      },
      deep: true
    }
  },
  updated() {
    setTimeout(() => {
      this.$emit("hide");
    }, 3000);
  }
};
</script>
<style scoped>
.tooltip {
  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(255, 255, 255);
  position: absolute;
  left: 50%;
  top: 50%;
  width: fit-content;
  max-width: 310px;
  padding: 2px 5px;
  border-radius: 3px;
  z-index: 2;
  display: inline-block;
}

.tooltip_fade-enter-active,
.tooltip_fade-leave-active {
  transition: opacity 0.25s ease-out;
}


.tooltip_fade-enter,
.tooltip_fade-leave-to {
  opacity: 0;
}
</style>
