<template>
  <!-- <div class="modal_container" @click="noop($event)"> -->
  <div class="modal">
    <p v-if="tip" v-html="tip"></p>
    <div class="modal_body" v-if="result">
      <p>{{ result }}</p>
    </div>
    <div class="modal_body" v-else>
      <p>{{ bodyText }}</p>
      <div v-for="(option, index) in options" v-bind:key="index">
        <p class="option" @click="selectOption(index)">{{ `> ${option.actionText}` }}</p>
      </div>
    </div>
    <button @click="close">OK</button>
  </div>
  <!-- </div> -->
</template>

<script>
import { narratives } from "@/text";

export default {
  name: "modal",
  data() {
    return {
      result: null
    };
  },
  props: {
    bodyText: String,
    options: Array,
    tip: String
  },
  methods: {
    selectOption(index) {
      const outcome = this.options[index].outcome;

      if (narratives[outcome]) {
        this.$emit("success", outcome);
      } else {
        this.result = outcome;
      }
      this.$emit("hideTool");
    },
    close() {
      this.result = null;
      this.$emit("close");
    },
    // noop(event) {
    //   event.stopPropagation();
    //   console.log("noop stop prop", event);
    //   return false;
    // }
  }
};
</script>

<style scoped>
button {
  position: absolute;
  bottom: 30px;
  font-family: "Ringbearer";
  font-size: 14pt;
}

.modal_container {
  /* pointer-events: none; */
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  height: 100vh;
  width: 100%;
}

.modal {
  /* pointer-events: auto; */
  height: 220px;
  width: 400px;
  padding: 30px;
  background-color: rgb(46, 44, 51);
  position: absolute;
  top: 20%;
  left: 50%;
  margin-left: -200px;
  z-index: 1;
  color: whitesmoke;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.modal_body {
  text-align: left;
  /* vertical-align: middle; */
}

.option {
  cursor: pointer;
}

.option:hover {
  font-weight: bold;
}

.modal_fade-enter-active,
.modal_fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.modal_fade-leave-active {
  color: rgb(46, 44, 51);
}

.modal_fade-enter,
.modal_fade-leave-to {
  opacity: 0;
}
</style>
