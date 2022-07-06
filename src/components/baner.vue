<template>
  <v-container fluid class="background">
    <v-row class="pad">
      <v-col cols="12" md="6" class="bg text">
        <div class="justify-md-center textt">
          <div class="mb-2">The eSignature</div>
          <div class="mb-2 font-weight-bold text1">designed for SMBs</div>
          <div class="text-h7 mb-2 text2">
            Yousign is the easy-to-use, legally binding eSignature solution for
            all your documents.",
          </div>
          <div class="mt-5">
            <v-btn outlined rounded color="white" class="ml-5 pa-6 btnstyle"
              >start free trial</v-btn
            >

            <v-btn rounded color="#33ffad" class="ml-5 pa-6"
              >see our prices</v-btn
            >
          </div>
          <div class="d-flex mt-5">
            <div class="d-flex ml-5 align-center text2">
              <v-icon color="blue">mdi-check</v-icon>no commitment
            </div>
            <div class="d-flex ml-3 align-center text2">
              <v-icon color="blue">mdi-check</v-icon>no commitment
            </div>
            <div class="d-flex ml-3 align-center text2">
              <v-icon color="blue">mdi-check</v-icon>no commitment
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center justify-center bg1">
        <video-player
          class="video-player-box player"
          ref="videoPlayer"
          :options="playerOptions"
          :playsinline="true"
          customEventName="customstatechangedeventname"
        >
        </video-player>
      </v-col>
    </v-row>
    <v-row class="d-flex align-center justify-center mt-16">
      <pink-card></pink-card>
    </v-row>
  </v-container>
  <!-- @play="onPlayerPlay($event)"
          @pause="onPlayerPause($event)"
          @ended="onPlayerEnded($event)"
          @waiting="onPlayerWaiting($event)"
          @playing="onPlayerPlaying($event)"
          @loadeddata="onPlayerLoadeddata($event)"
          @timeupdate="onPlayerTimeupdate($event)"
          @canplay="onPlayerCanplay($event)"
          @canplaythrough="onPlayerCanplaythrough($event)"
          @statechanged="playerStateChanged($event)"
          @ready="playerReadied" -->
</template>

<script>
import "video.js/dist/video-js.css";
import pinkCard from "./pinkcard.vue";
import { videoPlayer } from "vue-video-player";
export default {
  name: "baner-one",
  components: { videoPlayer, pinkCard },
  data() {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        width: "450px",
        height: "300px",

        sources: [
          {
            type: "video/mp4",
            src: "https://static.cdn.asset.aparat.com/avt/44020615_15s.mp4",
          },
        ],
        poster:
          "https://images.prismic.io/yousigncom/575d58a9-ae2f-431c-89db-64f36b617da8_hero-video-visuel%402x-en.png?auto=compress,format&rect=0,0,930,643&w=690&h=477",
      },
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {
    // listen event
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Joan&display=swap");
.background {
  background-color: #003366;

  position: relative;
}
.textt {
  color: white;
  font-family: "Joan", serif;
  font-size: 30px;
  margin-left: 8rem;
}
.text1 {
  font-family: "Joan", serif;
  font-size: 60px;
}
.text2 {
  font-family: "Joan", serif;
  font-size: 15px;
}
.btnstyle {
  border: 1px solid white;
}
.player {
  background-color: transparent;
  border-radius: 20%;
}

.pad {
  padding-top: 5rem;
  padding-bottom: 10rem;
}
</style>
