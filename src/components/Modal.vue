<template>
  <div class="modal">
    <p class="tip" v-if="tip" v-html="tip"></p>
    <div class="modal_body" v-if="result">
      <p>{{ result }}</p>
    </div>
    <div class="modal_body" v-else>
      <p v-html="bodyText"></p>
      <div v-for="(option, index) in options" v-bind:key="index">
        <p class="option" @click="selectOption(index)">{{ `> ${option.actionText}` }}</p>
      </div>
    </div>
    <button class="button" v-show="options.length === 0 || result" @click="close">OK</button>
  </div>
</template>

<script>
import { narratives } from "@/text";
import store, { EventBus } from "@/store";

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
    tip: String,
    type: String
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
      store.commit("setActiveTool", "");

    },
    close() {
      setTimeout(() => {
        this.result = null;
      }, 500); 
      this.$emit("close");
      if (this.type === "INTRO") {
        EventBus.$emit("introOKClicked");
      }
    }
  }
};
</script>

<style scoped>
button {
  font-family: "Ringbearer";
  font-size: 14pt;
}

.modal {
  max-height: 270px;
  width: 400px;
  padding: 30px;
  background-color: rgb(35, 34, 39);
  position: absolute;
  top: 15%;
  left: 50%;
  margin-left: -200px;
  z-index: 1;
  color: whitesmoke;
  border-radius: 6px;
}

.modal_body {
  text-align: left;
}

.tip {
  text-align: left;
  font-style: italic;
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
