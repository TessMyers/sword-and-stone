<template>
  <div class="home">
    <ChooseYourCharacter v-if="currentPage == 'CHOOSE'"></ChooseYourCharacter>
    <Tableau v-else-if="currentPage == 'TABLEAU'"></Tableau>
    <Narrative v-else-if="currentPage == 'NARRATIVE'"></Narrative>
    <Ending v-else-if="currentPage == 'ENDING'"></Ending>
  </div>
</template>

<script>
import ChooseYourCharacter from "@/components/ChooseYourCharacter";
import Tableau from "@/components/Tableau.vue";
import Narrative from "@/components/Narrative.vue";
import Ending from "@/components/Ending.vue";
import store from "@/store";

export default {
  name: "Home",
  components: {
    ChooseYourCharacter,
    Tableau,
    Narrative,
    Ending
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
