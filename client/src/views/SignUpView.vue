<template>
    <main>
        <h1>Sign up</h1>
        <label>Name:</label><input type="text" v-model="state.name"/>
        <label>Email:</label><input type="text" v-model="state.email"/>
        <label>Password:</label><input type="text" v-model="state.password"/>
        <button type="button" class="cursor-pointer" @click="handleSignUp">Registrarse</button>
    </main>
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