<template>
  <v-card>
    <v-footer color="transparent">
      <v-row justify="center" align="center" no-gutters>
        <v-col  class="pt-5 pl-5 textpart">
          <p>© Yousign - All rights reserved | european-flag Made in Europe</p>
        </v-col>
        <v-col
          ><v-btn v-for="link in links" :key="link" text rounded class=" btnpart">
            {{ link }}
          </v-btn></v-col
        >
      </v-row>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: "footerPart",
  data() {
    return {
      links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    };
  },
};
</script>

<style scoped>
.textpart{font-size: 15px;
color: grey;}
.btnpart{font-size: 13px;
color: grey;pointer-events:initial}
</style>
