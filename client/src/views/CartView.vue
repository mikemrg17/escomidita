<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-main-color sm:text-4xl">Productos añadidos al carrito</h1>
        <form class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" class="lg:col-span-7">
            <h2 id="cart-heading" class="sr-only">Items in your shopping </h2>
  
            <ul role="list" class="divide-y divide-gray-200 border-t border-b border-gray-200">
              <li v-for="(product) in products" :key="product.id" class="flex py-6 sm:py-10">
                <div class="flex-shrink-0">
                  <img :src="product.imageSrc" :alt="product.imageAlt" class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48" />
                </div>
  
                <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div class="flex justify-between">
                        <h3 class="text-sm">
                          <a :href="product.href" class="font-medium text-gray-700 hover:text-gray-800">{{ product.name }}</a>
                        </h3>
                      </div>
                      <div class="mt-1 flex text-sm">
                        <p class="text-gray-500">{{ product.price }}</p>
                        <p class="ml-4 border-l border-gray-200 pl-4 text-gray-500">{{ product.store_name }}</p>
                      </div>
                      <!--p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p-->
                    </div>
                  </div>
  
                  <!--p class="mt-4 flex space-x-2 text-sm text-gray-700">
                    <CheckIcon v-if="product.inStock" class="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                    <ClockIcon v-else class="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                    <span>{{ product.inStock ? 'In stock' : `Ships in ${product.leadTime}` }}</span>
                  </p-->

                </div>
              </li>
            </ul>
          </section>
  
          <!-- Order summary -->
          <section aria-labelledby="summary-heading" class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 id="summary-heading" class="text-lg font-medium text-secondary-color">Resumen de la orden</h2>
  
            <dl class="mt-6 space-y-4">
              <div class="flex items-center justify-between">
                <dt class="text-sm text-gray-600">Total a pagar</dt>


                <dd class="text-sm font-medium text-gray-900">{{totalReactiva}}</dd>
              </div>
            </dl>
  
            <div class="mt-6">
              <button type="submit" class="w-full rounded-md border border-main-color bg-main-color py-3 px-4 text-base font-medium text-secondary-color shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Pagar</button>
            </div>
          </section>
        </form>
      </div>
    </div>
  </template>







<script setup lang="ts">
  //import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/vue/20/solid'
import Item from "../components/items/Item.vue"
import { ref, onMounted } from "vue";

const totalReactiva = ref(0)

const calcula = () => {
  products.forEach(product => totalReactiva.value += product.price2 )
}

onMounted( () => {
  calcula()
})


const products = [
    {
      id: 1,
      name: 'Chilaquiles',
      href: '#',
      imageSrc: 'https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      price2: 35,
      store_name: 'Juanitas',
    },
    {
      id: 1,
      name: 'Pasta',
      href: '#',
      imageSrc: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$45',
      price2: 45,
      store_name: 'Santiagos',
    },
    {
      id: 2,
      name: 'Torta',
      href: '#',
      imageSrc: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$85',
      price2: 85,
      store_name: 'Miguel',
    },
    {
      id: 3,
      name: 'Sincronizada',
      href: '#',
      imageSrc: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$20',
      price2: 35,
      store_name: 'Isaac',
    },
  ]
  </script>

