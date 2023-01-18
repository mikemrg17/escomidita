<!--<template>
    <main class="max-w-full">
        
    </main>
</template>-->
<template>
    <main class="bg-white max-w-full max-h-full">
      <div class="mx-auto p-28 lg:px-8">
        <div class="text-center">
          <h2 class="text-lg font-semibold text-indigo-600">Bienvenido a</h2>
          <p class="mt-1 text-4xl font-bold tracking-tight text-main-color sm:text-5xl lg:text-6xl">Escomidita</p>
          <p class="mx-auto mt-5 max-w-xl text-xl text-black">Comienza a comprar comida a los compañeros de la ESCOMunidad</p>
        </div>
      </div>
      <div class="text-center bg-white">
            <RouterLink to="/signUp">
                <button class="h-10 rounded-[20px] cursor-pointer bg-black text-main-color">Registrarse</button>
            </RouterLink>
            |
            <RouterLink to="/signIn">
                <button class="h-10 rounded-[20px] cursor-pointer bg-black text-secondary-color">Iniciar sesión</button>
            </RouterLink>
        </div>
    </main>
  </template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>       