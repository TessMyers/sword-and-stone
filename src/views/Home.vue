<template>
  <div class="home">
    <ChooseYourCharacter v-if="currentPage == 'CHOOSE'"></ChooseYourCharacter>
    <Tableau v-else-if="currentPage == 'TABLEAU'"></Tableau>
    <Narrative v-else-if="currentPage == 'NARRATIVE'"></Narrative>
  </div>
</template>

<script>
import ChooseYourCharacter from "@/components/ChooseYourCharacter";
import Tableau from "@/components/Tableau.vue";
import Narrative from "@/components/Narrative.vue";
import store from "@/store";

export default {
  name: "Home",
  components: {
    ChooseYourCharacter,
    Tableau,
    Narrative
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
