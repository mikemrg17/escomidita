<template>
    <header class="w-screen bg-white max-w-full">
        <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <!-- <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> -->
              <img class="block h-8 w-auto lg:hidden" src="../../assets/logo.svg" alt="Your Company" />
              <img class="hidden h-8 w-auto lg:block" src="../../assets/logo.svg" alt="Your Company" />
              <!-- <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> -->
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <RouterLink v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.name == selected ? 'text-main-color' : 'hover:text-secondary-color', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.name == selected ? 'page' : undefined" @click="change_current(item.name)">{{ item.name }}</RouterLink>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">  
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <RouterLink to="/profile" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Perfil</RouterLink>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" @click="handle_logout">Sign out</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.name == selected ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.name == selected ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
    </header>
  </template>
  
  <script setup lang="ts">
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { RouterLink } from 'vue-router';
  import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline"
  import { supabase } from '../../supabase';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';

  const router = useRouter()

  const selected = ref("Home")
  
  const navigation = [
    { name: 'Home', href: '/app'},
    { name: 'Tiendas', href: '/stores'},
    { name: 'Carrito', href: '/cart'},
    { name: 'Pedidos', href: '/orders' }
  ]

  const change_current = (item: any) => {
    selected.value = item
  }

  const handle_logout = async () => {
    const { error } = await supabase.auth.signOut()

    if(error) throw error

    router.push({ name: "signIn" })
}
  </script>