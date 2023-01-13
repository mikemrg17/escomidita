<template>
    <div class="bg-white">
      <div class="lg:p-10 p-6">
        <h2 class="text-2xl text-base-color font-thin">Hola Miguel, ¿qué quieres comer hoy?</h2>
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="product in products" :key="product.id" class="group relative">
            <Item
                :image="product.imageSrc"
                :ref="product.href"
                :name="product.name"
                :store_name="product.store_name"
                :price="product.price"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import Item from "../components/items/Item.vue"

  const products = [
    {
      id: 1,
      name: 'Chilaquiles',
      href: '#',
      imageSrc: 'https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      store_name: 'Juanitas',
    },
    {
      id: 1,
      name: 'Pasta',
      href: '#',
      imageSrc: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$45',
      store_name: 'Santiagos',
    },
    {
      id: 2,
      name: 'Torta',
      href: '#',
      imageSrc: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$45',
      store_name: 'Miguel',
    },
  ]
  </script>