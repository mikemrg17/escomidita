<template>
    <main class="max-w-full">
        <div class="h-screen text-center bg-white">
            <RouterLink to="/signUp">
                <button class="h-10 rounded-[20px] cursor-pointer bg-black text-white">Registrarse</button>
            </RouterLink>
            <RouterLink to="/signIn">
                <button class="h-10 rounded-[20px] cursor-pointer bg-black text-white">Iniciar sesión</button>
            </RouterLink>
        </div>
    </main>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>       