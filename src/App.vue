<template>
  <div id="app">
    <router-view></router-view>
    <audio
      controls
      volume="0.1"
      src="@/assets/audio/river-flute_trimmed.mp3"
      type="audio/mpeg"
      loop
      preload="true"
      controlsList="nodownload"
      v-bind:class="{ hidden: isChoosePage }"
      ref="audio"
    >
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
import store, { EventBus } from "./store";

export default {
  name: "App",
  computed: {
    isChoosePage() {
      return store.getters.getCurrentPage === "CHOOSE";
    }
  },
  mounted() {
    EventBus.$on("introOKClicked", () => {
      if (!store.getters.getHasSeenCharIntro) {
        this.$refs.audio.volume = 0.5;
        this.$refs.audio.play();
        store.commit("seenCharIntro");
      }
    });
  }
};
</script>
<style>
a {
  text-decoration: none;
  color: white;
}

body {
  background: linear-gradient(rgb(35, 34, 39), black);
  height: 100vh;
}

audio {
  outline: none;
  height: 35px;
  width: 150px;
  top: 666px;
  left: 25px;
  position: fixed;
}

audio::-webkit-media-controls-panel {
  background-color: rgba(20, 20, 20, 0.8);
}

audio.hidden,
audio::-webkit-media-controls-current-time-display,
audio::-webkit-media-controls-time-remaining-display {
  display: none;
}

.button {
  cursor: pointer;
  font-family: Ringbearer;
  letter-spacing: 1px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* my styles below */
  height: 677px;
  width: 1000px;
  margin: 25px auto 0px auto;
}
</style>
