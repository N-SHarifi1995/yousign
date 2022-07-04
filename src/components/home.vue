<template>
  <div>
    <banerOne></banerOne>
    <whiteBanner></whiteBanner>
    <map-level></map-level>
    <autoSlider></autoSlider>
    <final-part></final-part>
    <footer-part></footer-part>
  </div>
</template>

<script>
import banerOne from "./baner.vue";
import whiteBanner from "./whitebaner.vue";
import mapLevel from "./level.vue";
import autoSlider from "./slider.vue";
import finalPart from "./finalPart.vue";
import footerPart from "./footer.vue";
export default {
  name: "home-page",
  components: { banerOne, whiteBanner,mapLevel ,autoSlider,finalPart,footerPart},
};
</script>

<style></style>
