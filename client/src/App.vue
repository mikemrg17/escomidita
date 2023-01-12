<template>
  <div class="container">
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" class="min-h-screen" />
    </RouterView>
    <div v-if="show_app_footer">
      <NavBar />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from "vue-router"
import { computed, onMounted } from "vue"
import { supabase } from "./supabase"
import { useUserStore } from "./stores/user";
import NavBar from "./components/navigation/NavBar.vue"

const router = useRouter()
const userStore = useUserStore()

supabase.auth.onAuthStateChange((event: any, session: any) => {
  if(event === "PASSWORD_RECOVERY"){
    router.push({ name: "ResetPassword"})
    return
  }
  
  if(session?.user){
    userStore.setCurrentAccessToken(session.accessToken)
    userStore.setCurrentUser(session.user)
    router.push({ name: "app" })
  }
})

const getProfile = async () => {
  try{
    // @ts-ignore
    const {
      data: { user },
    } = await supabase.auth.getUser()
    
    if(!user){
      return
    }

    const {
      data: {
        // @ts-ignore
        session: { accessToken },
      }
    } = await supabase.auth.getSession()

    userStore.setCurrentAccessToken(accessToken)
    userStore.setCurrentUser(user)
  }catch(error){
    console.log(`Error: ${error}`)
  }
}

onMounted(async () => {
  await getProfile()
})

const user = computed(() => userStore.currentUser)
const loading = computed(() => userStore.loading)

const show_app_footer = computed(() => {
  const footer_routes = ["app", "user"]
  const current_route = router.currentRoute.value.name as string
  return footer_routes.includes(current_route) && user.value
})
</script>