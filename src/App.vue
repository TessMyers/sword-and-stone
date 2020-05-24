<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=MedievalSharp" rel="stylesheet" type="text/css" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
@font-face {
  font-family: "MedievalSharp";
  src: url("/assets/fonts/MedievalSharp/MedievalSharp-Regular.ttf");
}
/* 
@font-face {
  font-family: "Ringbearer";
  src: url("/assets/fonts/ringbearer/RINGM___.TTF") format("truetype");
} */

body {
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
