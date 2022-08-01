<template>
  <v-card>
    <v-card>
      <v-layout>
        <v-card color="#002a42" height="100vh" class="sidebar">
          <v-list-item class="listitem pt-10">
            <v-img class="" src="../assets/img/20.png"></v-img>
          </v-list-item>
          <v-list-item class="listitem2 pt-15 pb-8">
            <v-img src="../assets/img/21.png"></v-img>
          </v-list-item>
          <v-list-item
            class="listitem2 pt-15"
            v-for="item in items"
            :key="item"
          >
            <v-icon class="item">{{ item.icon }}</v-icon>
          </v-list-item>
          <v-list-item>
          <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
       
      </v-list>
    </v-navigation-drawer>
  </v-card>
          </v-list-item>
        </v-card>

        <v-main style="height: 250px"></v-main>
      </v-layout>
    </v-card>
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
.sidebar {
  max-width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
