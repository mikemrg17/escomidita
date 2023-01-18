<template>
    <div>
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

            <div>
              <label class="block text-sm font-medium text-secondary-color">Nombre de la tienda</label>
              <div class="mt-1">
                <input v-model="state.name"  type="text" class="block w-full appearance-none rounded-md border border-secondary-color px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="my-4">
              <label class="block text-sm font-medium text-secondary-color">URL de la imagen</label>
              <div class="mt-1">
                <input v-model="state.URL" type="text" class="block w-full appearance-none rounded-md border border-secondary-color px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="my-8">
              <button @click="crearTienda" type="button" class="text-secondary-color flex w-full justify-center rounded-md border border-secondary-color bg-indigo-600 py-2 px-4 font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Crear tienda</button>
            </div>

        </div>
      </div> 
    </div>

</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user';
import { reactive, watch } from 'vue';
import { supabase } from '../supabase';
import { useRouter } from 'vue-router';
const user_store = useUserStore()
const router = useRouter()
const state = reactive({
name: "",
URL: "",
loading: false,
error: false
})
watch(
() => state.name,
() => {
    state.error = false
}
)
watch(
() => state.URL,
() => {
    state.error= false
}
)
const crearTienda = async () => {
//@ts-ignore
const { data, error } = await supabase
.from('stores')
.insert([
{name: state.name, products:[], user_id: 1 , image: state.URL},
])
router.push({name:"stores"})
}
</script>