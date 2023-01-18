<template>
    <div class="bg-white">
      <div class="lg:p-10 p-6">
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-white brightness-95 group-hover:opacity-75 lg:aspect-none lg:h-80 text-center cursor-pointer">
                <RouterLink to="/newStore">
                    <p class="mt-[30%] text-[#ABB2B9] text-9xl">+</p>
                </RouterLink>
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
import { use_stores_store } from "../stores/stores"
import Store from "../components/store/Store.vue"
import { RouterLink } from "vue-router";

const stores_store = use_stores_store()

const stores = computed(() => stores_store.stores_data)
const loading = computed(() => stores_store.loading)
</script>