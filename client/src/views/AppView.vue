<template>
    <div class="bg-white">
      <div class="lg:p-10 p-6">
        <h2 class="text-2xl text-base-color font-thin">Hola Miguel, ¿qué quieres comer hoy?</h2>
          <div v-for="store in stores" :key="store.id" v-if="!loading">
            <div class="mt-6 grid grid-cols-4 gap-y-10 gap-x-6">
            <div v-for="product in store.products" :key="product.id">
              <Item
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