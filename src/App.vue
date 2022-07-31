<template>
  <v-app class="overflow-hidden">
    <appBar v-if="routePath"></appBar>
    <v-sheet
    
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="100vh"
      @scroll="hide($event)"
    >
      <v-main>
        <router-view></router-view>
        <finalPart v-if="routePath"></finalPart>
        <footerPart v-if="routePath"></footerPart>
      </v-main>
    </v-sheet>
  </v-app>
</template>

<script>
import footerPart from "./components/footer.vue";
import finalPart from "./components/finalPart.vue";
import eventBus from "../src/services/eventBus";
import appBar from "./components/header.vue";

export default {
  name: "App",
  data() {
    return {
      distance: 0,
    };
  },
  methods: {
    hide(e) {
      this.distance = e.target.scrollTop;
      eventBus.$emit("visibles", this.distance);
    },
  },
  computed: {
    routePath() {
      let pathe = this.$route.name;
      if (pathe == "login" || pathe == "signup"|| pathe == "workspace") {
        return false;
      } else {
        return true;
      }
    },
  },

  components: { appBar, footerPart, finalPart },
};
</script>
<style scoped></style>
