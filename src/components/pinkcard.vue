<template>
  <v-card class="pinkcard">
    <v-row>
      <v-col cols="12" class="" >
        <p class="text-center">More than 10 000 beloved customers in Europ</p>
        <div class="d-flex flex-column align-center justify-center">
          <div>
            <v-icon v-for="star in 5" :key="star">mdi-star</v-icon> in G2
          </div>
        </div>
      </v-col>
    </v-row>
<!-- <v-row class="imgpart mt-5 mb-5">
<v-spacer></v-spacer>
<v-col class="imgpart"  >
 <v-img :src="srce" v-for="srce in imgbox" :key="srce"></v-img>
 </v-col>
 <v-spacer></v-spacer>
</v-row> -->
    <v-list class="imgpart mt-6" >
      <v-list-item class="imgset" v-for="srce in imgbox" :key="srce">
        <v-img :src="srce"></v-img>
      </v-list-item>
    </v-list> 
  </v-card>
</template>

<script>
export default {
  name: "pinkCard",
  data() {
    return {
      imgbox: [
        "https://yousign.com/_nuxt/img/aviva@2x.7795289.png",
        "https://yousign.com/_nuxt/img/sellsy_black@2x.fa681a0.png",
        "https://yousign.com/_nuxt/img/Konbini_@2x.57701d5.png",
        "https://yousign.com/_nuxt/img/Allianz_@2x.0ae8c22.png",
        "https://yousign.com/_nuxt/img/techhub@2x.fe3167c.png",
        "https://yousign.com/_nuxt/img/roland-berger@2x.496dd84.png",
        "https://yousign.com/_nuxt/img/international-school-naples@2x.65141f9.png",
        "https://yousign.com/_nuxt/img/qonto@2x.0cff13c.png",
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Joan&display=swap");

.pinkcard {
  width: 80vw;
  border-radius: 20px;
  background-color: #ffcccc;
  position: absolute;
  bottom: -18vh;
 font-size: 25px;
  font-family: "joan";
  z-index: 7;padding: 2rem 0;
}
.imgset {
  max-width: 120px;
  max-height: 80px;
}
.imgpart {
  display: flex;flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: transparent;

}
</style>
