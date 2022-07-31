<template>
  <v-card>
    <v-card>
      <v-layout>
        <v-card color="#002a42">
          <v-list-item class="img">
            <v-img class="img" src="../assets/img/20.png"></v-img>
          </v-list-item>
          <v-list-item>
            <v-img src="../assets/img/21.png"></v-img>
          </v-list-item>
          <v-list-item v-for="item in items" :key="item">
            <v-icon class="item">{{ item.icon }}</v-icon>
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
    };
  },
};
</script>

<style scoped lang="scss">
@mixin colorpart() {
  color: rgb(101, 114, 131);
}
.item {
  @include colorpart();
}
.listitem {
  max-height: 50px;
}
.yousign {
  background-color: aqua;
  color: rgb(101, 114, 131);
}
</style>
