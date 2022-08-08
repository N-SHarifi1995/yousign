<template>

  <v-card>
    <v-layout>
      <v-card color="#002a42" height="100vh" class="sidebar">
        <v-list-item class="listitem pt-10">
          <v-img class="" src="../assets/img/20.png"></v-img>
        </v-list-item>
        <v-list-item class="listitem2 pt-15 pb-8">
          <v-img src="../assets/img/21.png"></v-img>
        </v-list-item>
        <v-list-item class="listitem2 pt-15" v-for="item in items" :key="item">
          <v-icon class="item">{{ item.icon }}</v-icon>
        </v-list-item>
        <v-list-item >

        
            <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="25" :nudge-width="200" offset-x>
              <template v-slot:activator="{ on, attrs }" >
                <!-- <v-btn color="indigo" dark >
                  Menu as Popover
                </v-btn> -->
                <v-list-item-avatar class="ml-3">
                      <img src="https://cdn.vuetifyjs.com/images/john.jpg" v-bind="attrs" v-on="on" alt="John">
                    </v-list-item-avatar>
              </template>

              <v-card  >
                <v-list >
                  <v-list-item>
                    <v-list-item-avatar>
                      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>John Leider</v-list-item-title>
                      <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
                    </v-list-item-content>

              
                  </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item v-for="item in hh" :key="item">
                    <v-icon class="item">{{ item.icon }}</v-icon>
                  </v-list-item>

                  
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn color="primary" text @click="menu = false">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
         

        </v-list-item>
      </v-card>

      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>

</template>

<script>
export default {
  name: "workSpace",
  data() {
    return {
      items: [
        { icon: "mdi-inbox" },
        { icon: "mdi-badge-account-horizontal-outline" },
        { icon: "mdi-sitemap-outline" },
        { icon: "mdi-file-document-plus-outline" },
        { icon: "mdi-lightning-bolt-outline" },
        { icon: "mdi-message-question-outline" },
      ],
      drawer: true,
      hh: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      mini: true,
    };
  },
};
</script>

<style scoped lang="scss">
@mixin colorpart() {
  color: rgb(101, 114, 131);
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
}

.listitem2:nth-child(6) {
  margin-top: 5rem;
}

.yousign {
  background-color: aqua;
  color: rgb(101, 114, 131);
}
.menue{ 
  margin-left: 5rem;background-color: bisque;
}

.sidebar {
  max-width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
