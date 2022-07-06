<template>
  <div :class="[show == 'one' ? 'backcolor' : '', 'total']">
    <v-row no-gutters
      ><v-col cols="12" :style="{ textAlign: 'center' }">
        <p class="text1">{{ headers.text1 }}</p>
        <p class="text2">{{ headers.text2 }}</p>
        <p class="text3">
          {{ headers.text3 }}
        </p></v-col
      ></v-row
    >
    <v-row no-gutters :class="[show == 'tow' ? 'reverscol' : '']">
      <v-col cols="12" md="6">
        <v-card class="mx-auto" max-width="500" elevation="0">
          <v-list flat :class="[show == 'one' ? 'backcolor' : '']">
            <v-list-item-group v-model="model">
              <v-list-item
                class="noexpantion d-md-flex"
                active-class="active"
                v-for="(item, i) in items"
                :key="i"
                :class="{ 'hidden-sm-and-down': model !== i }"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-content
                    class="itemtitle"
                    v-text="item.title"
                  ></v-list-item-content>
                  <v-list-item-content
                    class="itemsub"
                    v-text="item.text"
                  ></v-list-item-content>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" color=" transparent">
          <v-img
            max-height="60rem"
            max-width="40rem"
            :src="require('../assets/img/' + imges[model])"
          ></v-img
        ></v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "levelBon",
  data() {
    return {
      model: 0,
    };
  },
  props: ["items", "imges", "headers", "show"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Joan&display=swap");

.total {
  font-family: "joan";
  padding-top: 8rem;
}
.backcolor {
  background-color: #eec6ca;
}
.reverscol {
  display: flex;
  padding: 0 4rem;
  flex-direction: row-reverse;
}
.text1 {
  font-size: 3rem;
}
.text2 {
  font-size: 3rem;
  font-weight: bold;
}
.text3 {
  font-size: 1rem;
}
.active {
  background-color: rgb(255, 255, 255);
}
.noexpantion {
  pointer-events: visible;
  text-align: left;
  border-radius: 15px;
}
.itemtitle {
  font-size: 1.6rem;
  font-weight: 300;
}
.itemsub {
  font-size: 1.2rem;
  padding-top: 1rem;
}
</style>
