<template>
  <div class="container">
    <div class="chatroom">
      <Navbar />
      <ChatWindow />
      <NewChatForm />
    </div>
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    const router = useRouter()
    const { user } = getUser()
    // if the user value is ever null, redirect to welcome screen
    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  }
}
</script>

<style>
  .chatroom {
      margin: 80px auto;
      border-radius: 20px;
      box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
      background: white;
  }

</style>