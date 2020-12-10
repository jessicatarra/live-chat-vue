<template>
  <div class="welcome container">
    <div class="welcome show-login" v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>No account yet? <span @click="showLogin = false">Signup</span> instead.</p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="enterChat" />
      <p>Already registered? <span @click="showLogin = true">Login</span> instead.</p>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()
    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }
    return { showLogin, enterChat }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  .welcome .show-login {
    margin: 80px auto;
    border-radius: 20px;
    box-shadow: 2px 4px 6px rgba(28,6,49,.1);
    background: #fff;
    padding: 20px;
  }
  @media screen and (min-width: 998px) {
    .welcome .show-login {
      width: 50%;
    }
  }
  /* form styles */
  .welcome form {
    margin: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media screen and (max-width: 600px) {
    .welcome form {
      margin: 0;
    }
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    padding: 10px;
    margin-bottom: 1rem;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>