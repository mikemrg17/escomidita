<template>
    <div class="bg-white flex min-h-full flex-col justify-center w-screen mt-10">
      <div class="bg-white sm:rounded-lg sm:px-10 sm:mx-auto sm:w-full sm:max-w-md text-main-color">
        <img class="mx-auto h-12 w-auto" src="../assets/logo.svg" alt="Your Company"/>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Registrarse</h2>

        <p class="mt-2 text-center text-sm text-base-color">¿Ya tienes una cuenta creada?
            <RouterLink to="/signIn" class="font-bold hover:text-main-color">Inicia sesión</RouterLink>
        </p>
      </div>
  
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

            <div>
              <label class="block text-sm font-thin text-base-color">Nombre</label>
              <div class="mt-1">
                <input v-model="state.name" type="text" class="block w-full appearance-none rounded-md border border-secondary-color px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="my-4">
              <label class="block text-sm font-thin text-base-color">Email</label>
              <div class="mt-1">
                <input v-model="state.email" type="email" class="block w-full appearance-none rounded-md border border-secondary-color px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>
  
            <div class="my-4">
              <label for="password" class="block text-sm font-thin text-base-color">Password</label>
              <div class="mt-1">
                <input v-model="state.password" type="password" class="block w-full appearance-none rounded-md border border-secondary-color px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="my-8">
              <button @click="handleSignUp" type="button" class="text-secondary-color flex w-full justify-center rounded-md border border-secondary-color py-2 px-4 font-medium hover:bg-secondary-color hover:text-white">Sign up</button>
            </div>

        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { reactive } from 'vue';
import { supabase } from '../supabase';
import { useRouter } from 'vue-router';

const router = useRouter()

const state = reactive({
    name: "",
    email: "",
    password: "",
    loading: false,
    error: false
})

const handleSignUp = async () => {
    try{
        state.loading = true
        const { error } = await supabase.auth.signUp({
            email: state.email,
            password: state.password,
        })

        if(error){
            state.error = true
            return
        }

        state.error = false

        // @ts-ignore
        const { error_log_in } = await supabase.auth.signInWithPassword({
            email: state.email,
            password: state.password,
        })

        if(error_log_in){
            throw error_log_in
        }

        // @ts-ignore
        await supabase.auth.updateUser({
            data: { full_name: state.name }
        })

        router.push({ name: "app" })
    } catch(error) {
        console.log(`Error: ${error}`)
    } finally {
        state.loading = false
    }
}
</script>
