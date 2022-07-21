<template>
  <v-app class="overflow-hidden">
 
  <appBar ></appBar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="100vh"
      @scroll="hide($event)"
     
    >
      <v-main >
        <router-view ></router-view>
      </v-main>
    </v-sheet>
    
  </v-app>
</template>

<script>
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

  components: { appBar },
};
</script>
<style scoped>

</style>
