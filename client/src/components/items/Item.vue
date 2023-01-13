<template>
    <div class="absolute bg-secondary-color text-white w-[30px] h-[30px] ml-1 mt-1 rounded-2xl left-[90%] top-[-4%] text-center">
        0
    </div>
    <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img :src="image" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div class="mt-4 flex justify-between">
        <div>
            <h3 class="text-sm text-gray-700">
                <a :href="ref">
                    <span aria-hidden="true" class="absolute inset-0" />
                        {{ name }}
                </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{{ store_name }}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">{{ price }}</p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps(["image", "ref", "name", "store_name", "price"])

</script>