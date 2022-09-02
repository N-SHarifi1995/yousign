<template>
  <v-card>


    <v-layout>
      <v-card color="#002a42" class="sidebar">

        <v-list-item class="listitem pt-10 ">
          <v-img class="" src="../assets/img/20.png"></v-img>
        </v-list-item>
        <v-list-item class="listitem2 pt-15 pb-8 hidden-sm-and-down" @click="page = 'signitureVue'" ripple="yellow">
          <v-img src="../assets/img/21.png"></v-img>
        </v-list-item>
        <v-menu top :close-on-click="closeOnClick" offset-x="true" class="" >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="hamburgerMenue hidden-md-and-up"  v-bind="attrs" v-on="on" fab>
             <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list class="ml-5">
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-list-item class="listitem2 pt-15 hidden-sm-and-down" v-for="item in items" v-ripple="false" :key="item"
          @click="page = item.title">
          <v-hover v-slot="{ hover }">
            <v-icon class="item" active-class="active" :class="{ 'zoom': hover }">{{ item.icon }}</v-icon>
          </v-hover>
        </v-list-item>

        <v-list-item class=" pt-md-5 ">
          <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="25" :nudge-width="200" offset-x dense>
            <template v-slot:activator="{ on, attrs }">

              <v-list-item-avatar class="ml-3">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" v-bind="attrs" v-on="on" alt="John" />
              </v-list-item-avatar>
            </template>

            <v-card>
              <v-list dense>
                <v-list-item dense>
                  <v-list-item-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                  </v-list-item-avatar>

                  <v-list-item-content dense>
                    <v-list-item-title>John Leider</v-list-item-title>
                    <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item-group>
                  <v-list-item v-for="item in menuitem" :key="item" class="d-flex align-center ">
                    <v-icon class="item" size="15">{{ item.icon }}</v-icon>
                    <v-list-item-content class="ml-2 fontsize">{{ item.title }}</v-list-item-content>

                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-icon class="item" size="15">mdi-power</v-icon>

                    <v-list-item-content class="ml-2 fontsize">signout</v-list-item-content>

                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-menu>
        </v-list-item>
      </v-card>

      <v-main>

        <workspaceHead></workspaceHead>
        <component :is="page"></component>>
        <!-- <signiture></signiture> -->

      </v-main>
    </v-layout>

  </v-card>

</template>

<script>
import workspaceHead from './workspaceHead.vue';
import inBox from './workpages/inbox.vue';
import signitureVue from './workpages/signiture.vue';

export default {
  name: "workSpace",
  data() {

    return {
      page: 'signitureVue',
      items: [
        { title: 'inBox', icon: "mdi-inbox" },
        { title: 'WorkFlow', icon: "mdi-badge-account-horizontal-outline" },
        { title: 'TemplateVue', icon: "mdi-sitemap-outline" },
        { title: 'ContactVue', icon: "mdi-file-document-plus-outline" },
        { title: 'UpdateVue', icon: "mdi-lightning-bolt-outline" },
        { title: 'HelpVue', icon: "mdi-message-question-outline" },
      ],
      drawer: true,
      menuitem: [
        { title: "itc", icon: "mdi-home-city" },
        { title: "setting", icon: "mdi-cog-outline" },
        { title: "signiture", icon: "mdi-draw" },
        { title: "people", icon: "mdi-account" },
        { title: "workspace", icon: "mdi-account-group-outline" },
        { title: "legal and complaince", icon: "mdi-scale-balance" },
        { title: "usage and biling", icon: "mdi-card-account-details-outline" },
      ],
      mini: true,
      closeOnClick: true,
    };
  },
  components: { workspaceHead, inBox, signitureVue }
};
</script>

<style scoped lang="scss">
@mixin colorpart() {
  color: rgb(174, 210, 205);
  border-radius: 50%;
}

@mixin li($h, $w) {
  max-height: $h;
  max-width: $w;
}

.item {
  @include colorpart();
}

.listitem {
  @include li(50px, 70px);
}

.listitem2 {
  @include li(40px, 90px);
  border-radius: 50%;

}

.listitem2:nth-child(6) {
  margin-top: 5rem;
}

.zoom {
  scale: 110%;
  background-color: rgba($color: #ffffff, $alpha: 0.2);
  padding: 0.4rem;

}

.fontsize {
  font-size: 12px;

}

.active {
  background-color: red;

}


.sidebar {
  max-width: 4rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
} .hamburgerMenue{
  @include li(40px, 40px)
  ;margin-top: 10rem;
}
</style>
