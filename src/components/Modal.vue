<template>
  <div class="modal">

    <div class="modal_body" v-if="result">
      <p>{{ result }}</p>
      <button @click="close">ok</button>
    </div>

    <div class="modal_body" v-else>
      <p>{{ bodyText }}</p>
      <div v-for="(option, index) in options" v-bind:key="index">
        <p @click="selectOption(index)">{{ `> ${option.actionText}` }}</p>
      </div>
      <button v-if="buttonText" @click="close">{{ buttonText }}</button>
    </div>

  </div>
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
    buttonText: String
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
    }
  }
};
</script>

<style scoped>
.modal {
  height: 220px;
  width: 390px;
  padding: 30px;
  background-color: rgb(46, 44, 51);
  position: absolute;
  top: 20%;
  left: 50%;
  margin-left: -200px;
  z-index: 1;
  color: white;
}
.modal_body {
  text-align: left;
}
</style>
