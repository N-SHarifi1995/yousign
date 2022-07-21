<template>
 
<div class="flexbox ">

<login-form :type="signup.type" :message="signup.message" :switchform="signup.switch"></login-form>
</div>


 
</template>

<script>
import loginForm from './form.vue'
export default {
name:'sign-up',
components:{loginForm},
data() {
  return {
 
   signup:{type:'signe up',message:'create your acount',switch:'login'}
  }
},
}
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

