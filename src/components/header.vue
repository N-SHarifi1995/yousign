<template>
  <v-card class="zindex">
    <v-hover v-slot="{ hover }">
      <v-app-bar
        app
        absolute
        :color="hover ? 'white' : '#003366'"
        dark
        shrink-on-scroll
       dense
        scroll-target="#scrolling-techniques-3"
      >
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="hidden-sm-and-down"
              :color="hover ? 'black' : 'white'"
              plain
              v-bind="attrs"
              v-show="visible"
              v-on="on"
            >
              languages
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>enhlish</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>espanish</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>germany</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>swiden</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <v-btn
          class="hidden-sm-and-down"
          :to="{ name: 'login' }"
          :color="hover ? 'black' : 'white'"
          plain
          v-show="visible"
          >login</v-btn
        >
        <template v-slot:extension>
          <v-img
            max-height="100"
            max-width="100"
            :src="
              require(hover
                ? '../assets/img/logo-bleu-nuit.3636830.svg'
                : '../assets/img/logo-bleu-nuit.36368301.svg')
            "
            class="hidden-sm-and-down"
          >
          </v-img>
          <v-tabs class="ml-5" v-model="tab">
            <v-tabs-slider :class="{ linkstyle2: hover }"></v-tabs-slider>
            <v-tab
              v-for="(item, index) in items"
              :key="item"
              @mouseenter="switchtab(index)"
              :class="{ 'black--text': hover }"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
          <v-spacer></v-spacer>
          <div :style="{ width: 100 + 'px' }" class="hidden-sm-and-down">
            <router-link
              :class="{ linkstyle2: hover }"
              to="/dd"
              class="linkstyle"
              >contact us</router-link
            >
          </div>
          <v-btn
            class="hidden-sm-and-down"
            color="#33ffad"
            rounded
            :style="{ color: '#003366', marginLeft: 2 + 'rem' }"
            >free trial</v-btn
          >
        </template>
      </v-app-bar>
    </v-hover>

    <v-card class="poss1">
      <v-tabs-items class="poss" v-model="tab" v-show="tabsshow">
        <v-tab-item>
          <v-card
            flat
            @mouseleave="mouseout"
            class="d-flex align-center justify-center"
          >
            <v-list class="mr-16">
              <v-list-item-group color="primary">
                <v-list-item-title>Product</v-list-item-title>
                <v-list-item-subtitle
                  >Yousign helps SMBs go
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  digital with electronic
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  signature solutions adapted to each
                  need.</v-list-item-subtitle
                >
              </v-list-item-group>
            </v-list>
            <v-list class="mr-16">
              <v-subheader>Solution</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in solutionIems" :key="i">
                  <v-list-item-icon>
                    <v-btn class="mx-2" fab x-small :color="item.colorr">
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-list class="mr-16">
              <v-subheader>Integrations</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in IntegrationsIems" :key="i">
                  <v-list-item-icon>
                    <v-btn class="mx-2" fab x-small :color="item.colorr">
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card
            flat
            class="d-flex align-center justify-center"
            @mouseleave="mouseout"
          >
            <v-list class="mr-16">
              <v-list-item-group color="primary">
                <v-list-item-title>Usecase</v-list-item-title>
                <v-list-item-subtitle
                  >Thousands of businesses power their
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  agreements with Yousign. Discover
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  how our eSignature solution helps </v-list-item-subtitle
                ><v-list-item-subtitle>
                  teams like yours get ahead.</v-list-item-subtitle
                >
              </v-list-item-group>
            </v-list>
            <v-list class="mr-16">
              <v-subheader>Industries</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in Intdustrys" :key="i">
                  <v-list-item-content>
                    <v-list-item-title v-text="item"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-list class="mr-16">
              <v-subheader>Teams</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in teams" :key="i">
                  <v-list-item-content>
                    <v-list-item-title v-text="item"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-card>
</template>

<script>
import eventBus from "../services/eventBus";
export default {
  name: "appBar",

  data: () => ({
    visible: true,
    src1: "../assets/img/logo-bleu-nuit.36368301.svg",
    tabsshow: false,
    solutionIems: [
      { text: "Aplication", icon: "mdi-apps", colorr: "#ffcc66" },
      { text: "WorkFlow", icon: "mdi-currency-krw", colorr: "#ff5c33" },
    ],
    IntegrationsIems: [
      { text: "Aplication", icon: "mdi-apps", colorr: "#ffcc66" },
      { text: "WorkFlow", icon: "mdi-currency-krw", colorr: "#ff5c33" },
    ],
    Intdustrys: [
      "Insurance",
      "Education",
      "Real estate",
      "Recruitment",
      "Software companies",
      "More industries...",
    ],
    teams: ["Teams", "Sales", "HR", "Procurement", "CIO", "More teams..."],
    tab: null,
    items: ["Product", "Usecase", "pricing", "images", "news"],

    //
  }),
  props: ["ide"],
  computed: {
    hi(teee) {
      return console.log(teee);
    },
  },
  methods: {
    visibility(mesure) {
      this.visible = mesure > 50 ? false : true;
    },
    switchtab(indx) {
      this.tab = indx;
      this.tabsshow = true;
    },
    mouseout() {
      this.tabsshow = false;
    },
  },
  created() {
    eventBus.$on("visibles", this.visibility);
  },
};
</script>

<style scoped>
.zindex{
  z-index: 10;
}
.logo {
  max-width: 100px;
  max-height: 50px;
}
.links {
  text-decoration: none;
}
.poss {
  position: absolute;
  width: 100%;
  top: 192px;
}
.poss1 {
  position: relative;
  top:0;
  width: 100%;
  background-color: red;
  z-index: 9;
}
.linkstyle {
  inline-size: 100px;
  overflow: hidden;
  color: white;
  font-size: 16px;
  text-decoration: none;
}
.linkstyle2 {
  color: black;
}
.tabs {
  color: rgb(248, 243, 243);
}
</style>
