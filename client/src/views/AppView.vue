<template>
    <main class="max-w-full">
        <div v-if="!loading">
            Aquí irá la app
        </div>
        <button type="button" @click="handle_logout">Salir</button>
    </main>
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/user"
import { computed } from "vue"
import { supabase } from "../supabase";
import router from "../router";

const userStore = useUserStore()

const loading = computed(() => userStore.loading)

const handle_logout = async () => {
    const { error } = await supabase.auth.signOut()

    if(error) throw error

    router.push({ name: "signIn" })
}
</script>