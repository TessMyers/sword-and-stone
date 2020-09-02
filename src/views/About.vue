<template>
  <div class="about">
    <span class="title">Destiny</span><span class="betaRequest">* Please scroll down to leave beta feedback *</span>
    <h2>Design, art, and development by <a href="http://www.tessmyers.com/" target="_blank">Tess Myers</a></h2>
    <h4>
      With thanks to <a href="https://www.instagram.com/_the_sum_/" target="_blank">Ally Yancey</a>: my sounding board, supporter, and photoshop
      navigatrix
    </h4>
    <h4>
      To <a href="https://wick.works/" target="_blank">Olive Perry</a>,
      <a href="https://twitter.com/marekkapolka" target="_blank">Marek Kapolka</a>
      , and <a href="https://www.notaproblemforlong.com/" target="_blank">Ben Long</a>
      for initial consults about game tech and essential feedback,
    </h4>
    <h4>And to my early beta testers,</h4>
    <ul>
      <li>Wendell Britt</li>
      <li>Gangle the Worthy</li>
      <li>Daniel Bullard-Bates</li>
      <li>Zina Jenny</li>
      <li>Kristin Jacobs</li>
      <li>Seth Crawford</li>
    </ul>
    <div class="info">
      <p>
        Music: River Flute by <a href="https://incompetech.filmmusic.io/song/4713-river-flute" target="_blank">Kevin MacLeod</a>, used under
        <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">CC License</a>
      </p>
      <p>
        This was my first full-size browser game, inspired by a love of fantasy, legends, and exploratory puzzle games. DESTINY is built in Vue.js with
        Typescript: See the code <a href="https://github.com/TessMyers/sword-and-stone/" target="_blank">here</a>. Sound effects were created in
        Audacity: please see
        <a target="_blank" href="https://github.com/TessMyers/sword-and-stone/blob/master/SOUNDCREDITS.md">full attribution list</a> for sources. The
        art is watercolor, micron pen, and white ink with minor digital editing. Thank you for playing!
      </p>
      <span><em>This game is free! If you loved it, consider donating to the <a v-on:click="onDonateLinkClicked" href="https://www.bufor.org/mission">Black United Fund of Oregon</a></em></span>
    </div>
    <center>
      <div class="button newGame" v-on:click="newGame">New Game</div>
    </center>
    <div class="links">
      <router-link to="/">&laquo; BACK | </router-link>
      <a>MORE GAMES</a> |
      <a href="https://www.instagram.com/tesslacoiled/" target="_blank">MORE ART</a>
    </div>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdi0N-MMoDhY9PUPOqqJNNQybL8W03eVAq3NDWFCsOn3v8sSg/viewform?embedded=true" width="640" height="1374" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>
</template>
<script>
import store from "@/store/index";
import router from "@/router/index";

export default {
  name: "about",
  methods: {
    newGame: () => {
      store.commit("newGame");
      router.push("/");
    },
    onDonateLinkClicked: () => {
      gtag('event', "donateLinkClicked");
    }
  }
};
</script>

<style>
li {
  list-style-type: none;
}

.about a {
  color: white;
  text-decoration: underline;
}

.title {
  font-family: Ringbearer;
  font-size: 34pt;
  margin-left: 0px;
}

.betaRequest {
  color: rgb(219, 68, 55);
  margin-left: 50px;
}

.about {
  text-align: left;
  margin: 50px 0px;
  /* color: #cecece; */
  color: white;
  max-width: 900px;
}

.newGame {
  border: 2px solid white;
  width: fit-content;
  padding: 10px;
}
.info {
  margin: 25px 0px 40px 0px;
}

.links {
  width: fit-content;
  margin: 40px auto;
}

.links > a {
  text-decoration: none;
}
</style>
