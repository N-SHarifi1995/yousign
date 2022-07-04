<template>
  <div class="background">
    <v-row no-gutters>
      <v-col cols="12" class="text1">
        <p>Find out why the best SMBs sign with Yousign</p>
      </v-col>
    </v-row>
    <v-row no-gutters
      ><v-col cols="12">
        <v-slide-group 
        ref="container"
          v-model="model"
          class="pa-4 bg"
        >
          <v-slide-item v-for="(item,index) in comments" :key="index">
            <v-card
              class="ma-4 pa-5 d-flex text-justify flex-column"
              height="200"
              max-width="400"
            >
              <v-card-subtitle v-text="item.text"></v-card-subtitle>
              <v-card-subtitle
                class="mt-5"
                v-text="item.person"
              ></v-card-subtitle>
            </v-card>
          </v-slide-item>
        </v-slide-group> </v-col
    ></v-row>
    <!-- <v-row no-gutters>
      <v-col cols="12">
        <v-slide-group v-model="model" class="pa-4 bg" center-active active-class='bg'>
          <v-slide-item v-for="item in comments" :key="item">
            <v-card
              class="ma-4 pa-5 d-flex text-justify flex-column"
              height="200"
              max-width="400"
            >
              <v-card-content v-text="item.text"></v-card-content>
              <v-card-content
                class="mt-5"
                v-text="item.person"
              ></v-card-content>
            </v-card>
          </v-slide-item>
        </v-slide-group> 
      </v-col>
    </v-row>
     -->
  </div>
</template>

<script>
export default {
  name: "autoSlider",

  data() {
    return {
      model: 0,
      comments: [
        {
          text: "The easy API setup for our dev team was effortless. The security for our users with the SMS step is a game-changer. And I never had a down moment in 1 year. We gained tremendous time.",
          person: "Tom Makenzy",
        },
        {
          text: "The easy API setup for our dev team was effortless. The security for our users with the SMS step is a game-changer. And I never had a down moment in 1 year. We gained tremendous time.",
          person: "Tom Makenzy",
        },
        {
          text: "The easy API setup for our dev team was effortless. The security for our users with the SMS step is a game-changer. And I never had a down moment in 1 year. We gained tremendous time.",
          person: "Tom Makenzy",
        },
        {
          text: "The easy API setup for our dev team was effortless. The security for our users with the SMS step is a game-changer. And I never had a down moment in 1 year. We gained tremendous time.",
          person: "Tom Makenzy",
        },
        {
          text: "The easy API setup for our dev team was effortless. The security for our users with the SMS step is a game-changer. And I never had a down moment in 1 year. We gained tremendous time.",
          person: "Tom Makenzy",
        },
        {
          text: "The easy API setup for our dev team was effortless. The security for our users with the SMS step is a game-changer. And I never had a down moment in 1 year. We gained tremendous time.",
          person: "Tom Makenzy",
        },
        {
          text: "The easy API setup for our dev team was effortless. The security for our users with the SMS step is a game-changer. And I never had a down moment in 1 year. We gained tremendous time.",
          person: "Tom Makenzy",
        },
        {
          text: "The easy API setup for our dev team was effortless. The security for our users with the SMS step is a game-changer. And I never had a down moment in 1 year. We gained tremendous time.",
          person: "Tom Makenzy",
        },
        {
          text: "The easy API setup for our dev team was effortless. The security for our users with the SMS step is a game-changer. And I never had a down moment in 1 year. We gained tremendous time.",
          person: "Tom Makenzy",
        },
        {
          text: "The easy API setup for our dev team was effortless. The security for our users with the SMS step is a game-changer. And I never had a down moment in 1 year. We gained tremendous time.",
          person: "Tom Makenzy",
        },
      ],
    };
  },methods:{
    
  },
  mounted() {
    setInterval(() => {
      if (this.model >= this.comments.length) {
        this.model = 0;
      }
      this.model++;
    }, 1000);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Joan&display=swap");
.background {
  background-image: url("../assets/img/bg.png");
  background-position: center;
  background-size: cover;
  font-family: "joan";
  padding-top: 3rem;
  text-align: center;height: min-content;
}
.text1 {
  font-size: 3rem;
  text-align: center;
}
.bg {
  display: flex;

  padding: 2rem 0.1rem;
  width: 100%;

  color: white;
}

.carts {
  display: flex;
  width: 120%;
  justify-content: flex-start;
  overflow-x: hidden;
  color: white;
  overflow-x: hidden;
}

.carts .cart {
  background-color: #343444;
  padding: 1rem;
  width: 300px;
  margin: 0 0.8rem;
}
</style>
