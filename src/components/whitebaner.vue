<template>
  <v-card >
    <v-row no-gutters>
    <v-spacer></v-spacer>
      <v-col cols="3"
        ><v-card class="pos" elevation="0">
          <div class="circle">3minutes</div>
          <p class="sub">to create and send a signature request</p></v-card
        ></v-col
      >
      <v-col cols="3" 
        ><v-card class="pos" elevation="0">
          <div class="circle1">45%</div>
          <p class="sub">
            increase in conversion on digitalized signature journeys
          </p></v-card
        ></v-col
      >
      <v-col cols="3" 
        ><v-card class="pos" elevation="0">
          <div class="circle2">100%</div>
          <p class="sub">eIDAS and RGPD compliant</p></v-card
        ></v-col
      >    <v-spacer></v-spacer>

   
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "whiteBanner",
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Joan&display=swap");
.pos {
  font-family: "joan";
  margin-top: 15rem;
  text-align: center;
  font-size: 3.5rem;
  font-weight: bold;
}
.sub {
  font-size: 1.5rem;
  font-weight: lighter;
  margin-top: 2rem;
}
.circle {
  height: 8rem;
  background-image: url(../assets/img/1.jpg);
  background-position: top;
  background-size: 7rem;
}
.circle1 {
  height: 8rem;
  background-image: url(../assets/img/2.jpg);
  background-position: top;
  background-size: 7rem;
}
.circle2 {
  height: 8rem;
  background-image: url(../assets/img/3.jpg);
  background-position: top;
  background-size: 7rem;
}
</style>
