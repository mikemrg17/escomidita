<!--template>
    <main class="whole-screen">
        <div class="text-main-color text-center bg-secondary-color">
            Iniciar sesión 
        </div>
        
        <div class="text-secondary-color text-center bg-main-color border-4" >
            <label >Email:</label><input type="text" v-model="state.email" />
            <label>Password:</label><input type="text" v-model="state.password" />
            <br> <br>
            <button type="button" class="block items-center border" @click="handleLogin">Iniciar</button>
        </div>
        <div class="text-main-color text-center bg-secondary-color">
            <p class="text-center  text-main-color mt-0">¿No tienes una cuenta?
                <RouterLink to="/signUp" class="font-bold">Registrate</RouterLink>
            </p>
        </div>
    </main>
</template-->




<!--
  This example requires some changes to your config:
  
  
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  
-->
<template>
    <!--
      This example requires updating your template:
  
      
      <html class="h-full bg-gray-50">
      <body class="h-full">
      
    -->
    <div class="bg-white flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 w-screen">
      <div class="bg-white sm:rounded-lg sm:px-10 sm:mx-auto sm:w-full sm:max-w-md text-main-color">
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Iniciar sesión</h2>

        <p class="mt-2 text-center text-sm text-gray-600">¿No tienes una cuenta?
            <RouterLink to="/signUp" class="font-bold">Registrate</RouterLink>
        </p>
      </div>
  
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

            <div>
              <label class="block text-sm font-medium text-secondary-color">Email</label>
              <div class="mt-1">
                <input v-model="state.email" type="email" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>
  
            <div class="my-4">
              <label for="password" class="block text-sm font-medium text-secondary-color">Password</label>
              <div class="mt-1">
                <input v-model="state.password" type="password" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="my-8">
              <button @click="handleLogin" type="button" class="text-secondary-color flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Iniciar</button>
            </div>

        </div>
      </div>
    </div>
  </template>



<script setup lang="ts">
import { reactive, watch } from "vue"
import { supabase } from "../supabase"
import { useRouter } from "vue-router";

const router = useRouter()
const state = reactive({
    email: "",
    password: "",
    loginError: false,
    loading: false,
})

watch(
    () => state.email,
    () => {
        state.loginError = false
    }
)

watch(
    () => state.password,
    () => {
        state.loginError= false
    }
)

const isEmailValid = (value: string) => {
    if(value.length === 0){
        return true
    }
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
}

const handleLogin = async () => {
    try {
        state.loading = true
        const { error } = await supabase.auth.signInWithPassword({
            email: state.email,
            password: state.password,
        })

        if(error){
            state.loginError = true
            return
        }

        router.push({ name: "app" })
    } catch(error) {
        console.log(`Error: ${error}`)
    } finally {
        state.loading = false
    }
}
</script>