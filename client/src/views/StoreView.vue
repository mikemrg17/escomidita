<template>
    <div>
        <RouterLink to="/newProduct" class="text-center block w-full appearance-none rounded-md border border-secondary-color px-3 py-2 placeholder-gray-40 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
        Agregar producto</RouterLink>
    </div>

    <div class="mt-6 grid grid-cols-4 gap-y-10 gap-x-6">
      <div v-for="product in store?.products" :key="product.id">
        <h1 class="text-secondary-color">Hola</h1>
        <Item
          :product="product"
           />
      </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { use_stores_store } from '../stores/stores';    
import { useRoute } from 'vue-router';    

const stores_store = use_stores_store()

const route = useRoute()

const store = computed(() => stores_store.get_current_store(route.params.id))

</script>