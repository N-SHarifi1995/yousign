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
        <v-menu offset-y class="floww">
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
          <v-list >
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
        <v-app-bar-nav-icon
          :color="hover ? '#003366' : 'white'"
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
       <v-spacer></v-spacer>
        <v-img
          max-height="100"
          max-width="100"
          :src="
            require(hover
              ? '../assets/img/logo-bleu-nuit.3636830.svg'
              : '../assets/img/logo-bleu-nuit.36368301.svg')
          "
          class="hidden-md-and-up mt-5"
        >
        </v-img>
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
              class="hidden-sm-and-down"
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
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="100%"
      height="400"
      class="mt-14"
    >
      <v-list nav dense>
        <v-list-group v-for="(item, i) in items" :key="i">
          <template v-slot:activator>
            <v-list-item-title>{{ item }}</v-list-item-title>
          </template>

          <template>
            <v-list-item-content class="pl-5">
              <v-list-item-title>hhh</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-card class="position1">
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
    </v-card> -->
 
      <v-tabs-items class="poss " v-model="tab" v-show="tabsshow">
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
</template>

<script>
import eventBus from "../services/eventBus";
export default {
  name: "appBar",

  data: () => ({
    drawer: false,
    group: null,
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
  computed: {},
  watch: {
    group() {
      this.drawer = false;
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
.zindex {
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
  padding-top: 3em;
  top: 6em;
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
.floww {
  overflow-y: hidden;
  z-index: 8000;
  

 
}
</style>
