<template>
  <div class="flexbox">
    <login-form
      :type="signup.type"
      :message="signup.message"
      :switchform="signup.switch"
      :submit="signUp"
    ></login-form>
  </div>
</template>

<script>
import loginForm from "./form.vue";
export default {
  name: "sign-up",
  components: { loginForm },
  data() {
    return {
      signup: {
        type: "signe up",
        message: "create your acount",
        switch: "login",
      },
    };
  },
  methods: {
    async signUp(eml) {
      
      let res = await this.$store.dispatch("signup",{email:eml} );
     console.log(res)
      if(res.error){
        alert('smt went wrong')
      }else{
       alert('welcome')  
      }
    },
    // async signUp(eml) {
    //   let res = await this.$store.dispatch("signup",);
    //    if(res.error){
    //     alert('smt went wrong')
    //   }else{
    //    alert('welcome')  
    //   }
    // },
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
}
</style>
