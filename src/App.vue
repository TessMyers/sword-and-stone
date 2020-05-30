<template>
  <div id="app">
    <!-- <link href="https://fonts.googleapis.com/css2?family=Gentium" rel="stylesheet" /> -->
    <router-view></router-view>
    <audio controls src="@/assets/audio/river-flute.mp3" type="audio/mpeg" loop preload="true">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
a {
  text-decoration: none;
  color: white;
}

body {
  background-color: black;
}

audio {
  outline: none;
  height: 35px;
  width: 250px;
  left: 20px;
  margin-top: -38px;
  position: absolute;
}

.button {
  cursor: pointer;
  font-family: Ringbearer;
  letter-spacing: 2px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* font-family: "Gentium Basic", serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
