<template>
  <div class="about">
    <div class="backButton"><router-link to="/">&laquo; BACK</router-link></div>
    <span class="title">Destiny</span>
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
    <ul class="list">
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
      <span><em>This game is free! If you loved it, consider donating to the <a href="https://www.bufor.org/mission" target="_blank">Black United Fund of Oregon</a></em></span>
    </div>
    <center>
      <div class="button newGame" v-on:click="newGame">New Game</div>
    </center>
    <div class="links">
      <router-link to="/">&laquo; BACK | </router-link>
      <a>MORE GAMES</a> |
      <a href="https://www.instagram.com/tesslacoiled/" target="_blank">MORE ART</a>
    </div>
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
    }
  }
};
</script>

<style>
li {
  list-style-type: none;
}

.list {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  margin: 35px 0;
  width: 370px;
}

.about a {
  color: white;
  text-decoration: underline;
}

.about h4, h2 {
  margin: 15px 0px;
}

.backButton {
  margin-bottom: 18px;
  opacity: 0.5;
}

.title {
  font-family: Ringbearer;
  font-size: 34pt;
  margin-left: 0px;
}


.about {
  text-align: left;
  margin: 30px 0 -25px;
  color: white;
  max-width: 950px;
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

.links > a,
.backButton > a {
  text-decoration: none;
}
</style>
