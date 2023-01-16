<template>
  <div class="max-w-full">
    <div v-if="show_app_header" class="sticky top-[0%] h-[12vh] z-10">
      <NavBar />
    </div>
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" class="w-screen h-[88vh] max-w-full z-0" />
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from "vue-router"
import { computed, onMounted } from "vue"
import { supabase } from "./supabase"
import { useUserStore } from "./stores/user";
import { use_stores_store } from "./stores/stores";
import NavBar from "./components/navigation/NavBar.vue"

const router = useRouter()
const userStore = useUserStore()
const stores_store = use_stores_store()

supabase.auth.onAuthStateChange((event: any, session: any) => {
  if(event === "PASSWORD_RECOVERY"){
    router.push({ name: "ResetPassword"})
    return
  }
  
  if(session?.user){
    userStore.setCurrentAccessToken(session.accessToken)
    userStore.setCurrentUser(session.user)
    stores_store.get_stores_data()
    //router.push({ name: "app" })
  }
})

const get_profile = async () => {
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
  await get_profile()
})

const user = computed(() => userStore.currentUser)
const loading = computed(() => userStore.loading)

const show_app_header = computed(() => {
  const header_routes = ["app", "profile", "cart", "stores", "store"]
  const current_route = router.currentRoute.value.name as string
  return header_routes.includes(current_route) && user.value
})
</script>