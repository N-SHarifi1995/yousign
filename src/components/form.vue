<template>
  <v-card max-width="400" class="pb-8">
    <v-row no-gutters>
      <v-col cols="12" class="flexbox pt-15">
        <v-img
          max-height="50"
          max-width="50"
          src="../assets/img/login.svg"
        ></v-img>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" class="flexbox flex-column pt-8">
        <p>{{message}}</p>
        <p class="pa-3 text-center pb-0">
          Sign Up to Yousign to continue to Yousign App (proxy login).
        </p>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" class=" ">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="flexbox flex-column"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            class="bg"
          ></v-text-field>

          <v-btn class="mt-5 bg pa-6" @click="submit(email)" color="#33ffad"> {{type}} </v-btn>
          <p class="mt-2">Already have an account? 
          <router-link :to="{name:`${switchform}`}">{{switchform}}</router-link></p>
          <v-divider inset class="mt-2"></v-divider>

          <v-btn class="mt-2 bg pa-6" color="white"
            ><v-icon > mdi-google </v-icon> {{type}} by gmail
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "loginForm",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },props:['type','message','switchform','submit']
};
</script>

<style scoped>
.flexbox {
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg {
  width: 80%;
}
.text-field {
  border: 1px solid brown;
}
</style>
