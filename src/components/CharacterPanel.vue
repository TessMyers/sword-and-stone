<template>
  <!-- <div
    class="panel farmhand"
    v-on:click="beginGame(constants.characters.FARMHAND)"
    v-bind:class="{ completed: completedChars.includes(constants.characters.FARMHAND.name) }"
  ></div> -->
  <div class="farmhand" :class="{ completed: isCompleted, panel: true }"></div>
</template>
<script>
export default {
  name: "charPanel",
  props: {
    characterName: String,
    isCompleted: Boolean
  }
};
</script>
<style>
.panel {
  background-color: lightgray;
  height: 400px;
  /*width: 275px;*/
  width: 300px;
  margin: 0px 10px;
  background-size: contain;
}

.knight {
  background-image: url("../assets/knight.jpg");
}

.farmhand {
  background-image: url("../assets/farmhand.jpg");
}

.monk {
  background-image: url("../assets/monk.jpg");
}

.completed {
  opacity: 0.4;
}
</style>
