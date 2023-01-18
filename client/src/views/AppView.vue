<template>
    <div class="bg-white">
      <div class="p-10">
        <h2 class="text-2xl text-base-color font-thin">Hola, ¿qué quieres comer hoy?</h2>
        <div v-for="store in stores" :key="store?.id" v-if="!loading">
          <div class="text-white">s</div>
          <div class="mt-10">
            <p class="text-secondary-color">{{ store?.name }}</p>
            <div class="flex flex-row w-[93vw] mt-6" :class="store.products?.length > 3 ? 'overflow-x-scroll' : ''">
              <Item
                v-for="product in store?.products" :key="product?.id"
                :product="product"
              />  
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import Item from "../components/items/Item.vue"
import { use_stores_store } from "../stores/stores"
import { computed } from "@vue/reactivity";

const stores_store = use_stores_store()

const stores = computed(() => stores_store.stores_data)
const loading = computed(() => stores_store.loading)
  </script>