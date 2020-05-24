<template>
  <div class="about">
    <h1>DESTINY</h1>
    <!-- <div class="swordArt"></div> -->
    <h2>Design, art, and development by Tess Myers</h2>
    <h4>With thanks to Ally Yancey: my sounding board, supporter, and photoshop navigatrix</h4>
    <h4>And to my early beta testers,</h4>
    <ul>
      <li>Wendell Britt</li>
      <li>other name</li>
      <li>some other people</li>
      <li>someone else</li>
      <li>other name</li>
      <li>some other people</li>
      <li>someone else</li>
    </ul>
    <p class="info">
      This was my first browser-based game, inspired by a love of fantasy, legends, and exploratory puzzle games. DESTINY is built in Vue.js with
      Typescript: See the code <a>here</a>. The art is watercolor, micron pen, and white ink with minor digital editing. Thank you for playing!
    </p>
    <center>
      <div v-on:click="newGame">New Game</div>
    </center>
    <div class="links">
      <a>MORE GAMES</a> |
      <a>MORE ART</a>
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
}
</script>

<style>
li {
  list-style-type: none;
}

.about {
  text-align: left;
  margin: 100px;
  /* color: #cecece; */
  color: white;
}

.about > p > a {
  text-decoration: underline;
}

/* .swordArt {
  background-image: url("../assets/sword.png");
  background-size: contain;
  height: 100px;
  width: 300px;
} */

.info {
  margin: 50px 0px 40px 0px;
}

.links {
  /* position: fixed; */
  /* left: 50%; */
  /* bottom: 50px; */
  width: fit-content;
  /* transform: translate(-50%, -50%); */
  margin: 40px auto;
}
</style>
