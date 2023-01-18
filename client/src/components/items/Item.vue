<template>
    <span class="w-[28vw] mr-[3vh]">
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img :src="product.images" class="h-full w-full object-cover object-center" />
          </div>
        <div class="mt-4 flex justify-between">
            <div>
                <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0" />
                            {{ product.name }}
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.store_name }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">$ {{ product.price }}</p>
        </div>
        <button @click="add_item" class="cursor-pointer w-full hover:text-main-color">
            Agregar al carrito
        </button>
    </span>
</template>

<script setup lang="ts">
import { use_cart_store } from '../../stores/cart';
import { toRefs } from "vue"

const cart_store = use_cart_store()

const props = defineProps(["product"])

const { product } = toRefs(props)

const add_item = () => {
    cart_store.add_to_cart(product?.value)
}

</script>