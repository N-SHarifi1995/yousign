<template>
  <v-card class="header" elevation='0' min-height="150">
    <div class="title">
      <p>index</p>
    </div>
    <v-form ref="form">
      <v-text-field class="search" clearable dense solo v-model="model" prepend-inner-icon="mdi-magnify" label="search">
      </v-text-field>
    </v-form>
    <v-btn class="ma-2" color="#33ffad" rounded >
      New Request
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "workSpaceHead",
  data() {
    return {

    };
  },
};
</script>

<style scoped lang="scss">
.header {
  background-image: url(../assets/img/33.png);
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .title {
    p {

      font-size: 50px;
      font-weight: lighter;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      font-style: italic;

    }

  }

  .search {
    min-width: 300px;
    font-size: 10px;
    color: white;

  }
}
</style>
