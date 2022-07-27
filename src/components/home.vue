<template>
  <div>
    <banerOne></banerOne>
    <whiteBanner></whiteBanner>
    <map-level></map-level>
    <autoSlider></autoSlider>
    
  </div>
</template>

<script>
import banerOne from "./baner.vue";
import whiteBanner from "./whitebaner.vue";
import mapLevel from "./level.vue";
import autoSlider from "./slider.vue";

export default {
  name: "home-page",
  components: { banerOne, whiteBanner,mapLevel ,autoSlider},
};
</script>

<style></style>
