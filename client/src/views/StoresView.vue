<template>
    <div class="bg-white">

      <div>
        <RouterLink to="/newStore" class="text-center block w-full appearance-none rounded-md border border-secondary-color px-3 py-2 placeholder-gray-40 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
        Agregar tienda</RouterLink>
      </div>

      <div class="lg:p-10 p-6">
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-white brightness-95 group-hover:opacity-75 lg:aspect-none lg:h-80 text-center cursor-pointer">
                <p class="mt-[30%] text-[#ABB2B9] text-9xl">+</p>
            </div>
          <div v-for="store in stores" :key="store.id" class="group relative" v-if="!loading">
            <Store
                :store="store"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { use_stores_store } from "../stores/stores";
import Store from "../components/store/Store.vue"
import { RouterLink } from "vue-router";

const stores_store = use_stores_store()

const stores = computed(() => stores_store.stores_data)
const loading = computed(() => stores_store.loading)
</script>