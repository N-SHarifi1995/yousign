<template>
  <div>
    <levelBon :items="items1" :imges="imges1" :headers="headers1" :show="show1"></levelBon>
    <levelBon :items="items2" :imges="imges2" :headers="headers2" :show="show2"></levelBon>
  </div>
</template>

<script>
import levelBon from "./level2.vue";
export default {
  name: "mapLevel",
  data() {
    return {
show1:'one',
show2:'tow',
      items1: [
        {
          title: "Save time on every signature",
          text: "Automate your signature processing with an easy-to-use application and/or an API adapted to your needs.",
          icon: "1",
        },
        {
          title:
            "Secure the confidentiality of your data and the validity of your signatures",
          text: "Our solutions are eIDAS compliant, reliable and secure.",
          icon: "2",
        },
        {
          title: "Connect your teams for better collaboration",
          text: "Lead your projects to success, face to face or remotely.",
          icon: "3",
        },
      ],
      imges1: ["0.avif", "1.avif", "2.avif"],
      items2: [
        {
          title: "Improve customer satisfaction",
          text: "Provide a smooth, simple and qualitative signing experience to all your users",
          icon: "4",
        },
        {
          title: "Take efficiency to the next level",
          text: "Manage all your signatures from a single point by integrating them directly into your tools",
          icon: "5",
        },
        {
          title: "Accelerate your growth",
          text: "Multiply the number of business opportunities managed by your teams with complete serenity, and strengthen your customers' commitment to your solutions.",
          icon: "6",
        },
      ],
      imges2: ["4.avif", "5.avif", "6.avif"],
      headers1: {
        text1: "Take signature",
        text2: "to the next level",
        text3:
          "Validate, sign and store all your documents online and deliver th best signing experience to your teams, partners and customers.",
      },headers2:{}
    };
  },
  components: { levelBon },
};
</script>

<style></style>
