<template>
    <div class="bg-white" v-if="!loading">
      <div class="py-16 sm:py-24">
        <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div class="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
            <h1 class="text-2xl font-bold tracking-tight text-main-color sm:text-3xl">Pedidos</h1>
            <p class="mt-2 text-sm text-base-color">Este es tu historial de pedidos</p>
          </div>
        </div>
  
        <div class="mt-16">
          <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
            <div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
              <div v-for="order in orders.reverse()" :key="order.number" class="border-t border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border">
                <div class="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
                  <dl class="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                    <div>
                      <dt class="font-medium text-gray-900">Número de orden</dt>
                      <dd class="mt-1 text-gray-500">{{ order.number }}</dd>
                    </div>
                    <div class="hidden sm:block">
                      <dt class="font-medium text-gray-900">Fecha</dt>
                      <dd class="mt-1 text-gray-500">
                        <time :datetime="order.createdDatetime">{{ order.createdDate }}</time>
                      </dd>
                    </div>
                    <div>
                      <dt class="font-medium text-gray-900">Total</dt>
                      <dd class="mt-1 font-medium text-gray-900">$ {{ order.total }}</dd>
                    </div>
                  </dl>
                </div>
                <!-- Products -->
                <ul role="list" class="divide-y divide-gray-200 h-[40vh]" :class="order.products.length > 1 ? 'overflow-y-scroll' : ''">
                  <li v-for="product in order.products" :key="product.id" class="p-4 sm:p-6">
                    <div class="flex items-center sm:items-start">
                      <div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
                        <img :src="product.images" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
                      </div>
                      <div class="ml-6 flex-1 text-sm">
                        <div class="font-medium text-gray-900 sm:flex sm:justify-between">
                          <h5>{{ product.name }}</h5>
                          <p class="mt-2 sm:mt-0">$ {{ product.price }}</p>
                        </div>
                        <p class="hidden text-gray-500 sm:mt-2 sm:block">{{ product.description }}</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="flex justify-between">
                      <div class="flex items-center">
                        <CheckCircleIcon class="h-5 w-5 text-green-500" aria-hidden="true" />
                        <p class="ml-2 text-sm font-medium text-gray-500">
                          Entregado en <time :datetime="order.deliveredDatetime">{{ order.deliveredDate }}</time>
                        </p>
                      </div>
  
                      <div class="flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0">
                        <div class="flex flex-1 justify-center">
                          <a :href="order.href" class="whitespace-nowrap text-indigo-600 hover:text-indigo-500">Ver orden</a>
                        </div>
                        <div class="flex flex-1 justify-center pl-4">
                          <a href="#" class="whitespace-nowrap text-indigo-600 hover:text-indigo-500 mr-10">Comprar de nuevo</a>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { EllipsisVerticalIcon } from '@heroicons/vue/24/outline'
  import { CheckCircleIcon } from '@heroicons/vue/20/solid'
  import { use_orders_store } from '../stores/orders';
import { computed, onMounted } from 'vue';
import { supabase } from '../supabase';

const orders_store = use_orders_store()

const orders = computed( () => orders_store.orders )
const loading = computed( () => orders_store.loading)

onMounted( async () => {
    let { data: orders, error } = await supabase
            .from('orders')
            .select('*')

    orders_store.set_orders(orders)
})
  
</script>