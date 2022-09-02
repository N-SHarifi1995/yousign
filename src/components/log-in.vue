<template>
  <div class="flexbox">
    <login-form :type="logIn.type" :message="logIn.message" :switchform="logIn.switch" :submit="login"></login-form>
  </div>
</template>

<script>
import loginForm from "./form.vue";
export default {
  name: "log-in",
  components: { loginForm },
  data() {
    return {
      logIn: { type: "login", message: "Welcome!", switch: "signup" },
    };
  },
  methods: {
    async login(eml) {

      let user = await this.$store.dispatch("login", eml);
      console.log(user)
      if (user.error) {
        alert('smt went wrong')
      } else {
        alert('welcome')
        this.$router.push({ name: 'workspace',params: { user: user.username } })
      }
    },
  },
};
</script>

<style scoped>
.flexbox {
  height: 80vh;
  background: #003366;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
