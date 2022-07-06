<template>
  <v-card>
    <v-row no-gutters>
      <v-spacer></v-spacer>
      <v-col
        cols="2 d-none d-md-flex"
        v-for="(item, index) in contents"
        :key="index"
      >
        <v-list class="mt-6" dense>
          <v-list-item-title class="textt1">{{ item.tite }}</v-list-item-title>
          <v-list-item-group>
            <v-list-item
              link
              href="www.google.com"
              v-for="(sub, i) in item.sub"
              :key="i"
            >
              <v-list-item-content class="textt2" v-text="sub">
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12 	d-flex d-md-none d-lg-none">
        <v-list>
          <v-list-item> </v-list-item>

          <v-list-group   v-for="(item, i) in contents" :key="i">
            <template v-slot:activator>
              <v-list-item-title>{{ item.tite }}</v-list-item-title>
            </template>

            
              <template >
                <v-list-item-content class="pl-5" v-for="(sub, j) in item.sub"
                 :key="j">
                  <v-list-item-title>{{sub}}</v-list-item-title>
                </v-list-item-content>
              </template>
           

            
          </v-list-group>
        </v-list>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row no-gutters class="justify-center" >
    
      <v-col cols="12" md="1" class="pl-md-0 pl-4  " v-for="link in lang" :key="link">
      
        <router-link to="/" class=" textt3">
          {{ link }}
        </router-link>
      </v-col>
     
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <v-btn class="btn ml-16" outlined fab small>
          <v-icon color="rgb(17, 11, 92)"> mdi-twitter </v-icon>
        </v-btn>
        <v-btn class="btn" outlined fab small>
          <v-icon color="rgb(17, 11, 92)"> mdi-youtube </v-icon>
        </v-btn>
        <v-btn class="btn" outlined fab small>
          <v-icon color="rgb(17, 11, 92)"> mdi-instagram </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "finalPart",
  data() {
    return {
      contents: [
        {
          tite: "company",
          sub: ["About us", "Work with us", "Hiring", "Press Kit", "Blog"],
        },
        {
          tite: "product",
          sub: [
            "Application",
            "API",
            "Features",
            "Application ",
            "pricing",
            "Use",
            "Zapier",
            "Reviews",
            "cases",
          ],
        },
        {
          tite: "Need help",
          sub: ["Help Center", "Developer Center"],
        },
        {
          tite: "Electronic Signature",
          sub: [
            "eSignature software",
            "What is eSignature",
            "How to sign electronically",
            "Sign a Word document",
            "Sign your PDF",
          ],
        },
        {
          tite: "Security",
          sub: [
            "eSignature in Europe",
            "Certifications",
            "eIDAS",
            "Yousign & Security",
          ],
        },
      ],
      lang: [
        "Deutschland",
        "España",
        "France",
        "Italia",
        "Poland",
        "UnitedKingdom",
      ],
    };
  },
};
</script>

<style scoped>
.textt1 {
  font-weight: bold;
}
.textt2 {
  color: rgb(100, 96, 96);
}
.textt3 {
  text-decoration: none;
  color: rgb(133, 133, 133);
}
.btn {
  border: 1px solid rgb(17, 11, 92);
  margin-right: 1rem;
}
</style>
