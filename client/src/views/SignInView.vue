<template>
    <main class="whole-screen">
        <div>
            Iniciar sesión
        </div>
        <label>Email:</label><input type="text" v-model="state.email" />
        <label>Password:</label><input type="text" v-model="state.password" />
        <button type="button" class="block items-center border" @click="handleLogin">Iniciar</button>
        <div>
            <p class="text-center text-sm text-gray-500 mt-4">¿No tienes una cuenta?
                <RouterLink to="/signUp" class="font-bold">Registrate</RouterLink>
            </p>
        </div>
    </main>
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