<template>
  <div class="home">
    <ChooseYourCharacter v-if="currentPage == 'CHOOSE'"></ChooseYourCharacter>
    <Tableau v-else-if="currentPage == 'TABLEAU'"></Tableau>
  </div>
</template>

<script>
// @ is an alias to /src
import ChooseYourCharacter from "@/components/ChooseYourCharacter";
import Tableau from "@/components/Tableau.vue";
import store from "@/store";

export default {
  name: "Home",
  components: {
    ChooseYourCharacter, /* eslint-disable-line vue/no-unused-components */
    Tableau /* eslint-disable-line vue/no-unused-components */
  },
  data() {
    return {
      page: store.getters.getCurrentPage
    };
  },
  computed: {
    currentPage() {
      return store.getters.getCurrentPage;
    }
  }
};
</script>
