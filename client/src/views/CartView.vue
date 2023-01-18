<template>
    <div class="bg-white" v-if="!loading">
      <div class="mx-auto max-w-2xl px-4 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <small class="text-base-color" >Saldo: </small>
        <h1 class="font-bold tracking-tight text-main-color text-4xl mt-5">Productos añadidos al carrito</h1>
        <p class="mt-2 text-center text-sm cursor-pointer text-secondary-color" @click="empty_cart">Vaciar carrito</p>
        <form class="mt-1 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" class="lg:col-span-7">
            <ul role="list" class="divide-y divide-gray-200 border-t border-b border-gray-200">
              <li v-for="product in products" :key="product?.id" class="flex py-6 sm:py-10">
                <div class="flex-shrink-0">
                  <img :src="product?.images" class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48" />
                </div>
  
                <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div class="flex justify-between">
                        <h3 class="text-sm">
                          <a class="font-medium text-gray-700 hover:text-gray-800">{{ product?.name }}</a>
                        </h3>
                      </div>
                      <div class="mt-1 flex text-sm">
                        <p class="text-gray-500">${{ product?.price }}</p>
                        <p class="ml-4 border-l border-gray-200 pl-4 text-gray-500">{{ product?.description }}</p>
                      </div>
                    </div>
                  </div>
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


                <dd class="text-sm font-medium text-gray-900">{{total}}</dd>
              </div>
            </dl>
  
            <div class="mt-6">
              <button type="button" class="w-full rounded-md border border-main-color bg-main-color py-3 px-4 text-base font-medium text-secondary-color shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                @click="buy_products"
              >Pagar</button>
            </div>
          </section>
        </form>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { computed } from "vue";
import { use_cart_store } from "../stores/cart";
import { use_orders_store } from "../stores/orders";
import { useRouter } from "vue-router";
import { supabase } from "../supabase"

const cart_store = use_cart_store()
const orders_store = use_orders_store()
const router = useRouter()

const products = computed(() => cart_store.get_cart)
const total = computed(() => cart_store.total)
const loading = computed(() => cart_store.loading)
const status = false

const empty_cart = () => {
  cart_store.empty_cart()
}

const buy_products = async () => {
  //@ts-ignore
  const { data, error } = await supabase
            .from('orders')
            .insert([
                { total: cart_store.total, status: status, products: cart_store.get_cart },
            ])


  router.push({ name: "orders" })
}
</script>

