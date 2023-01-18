<template>
    <div v-if="!loading">
      <Disclosure as="div" class="relative overflow-hidden bg-sky-700 pb-32" v-slot="{ open }">
        <nav :class="[open ? 'bg-sky-900' : 'bg-transparent', 'relative z-10 border-b border-teal-500 border-opacity-25 lg:border-none lg:bg-transparent']">
          <DisclosurePanel class="bg-sky-900 lg:hidden">
            <div class="border-t border-sky-800 pt-4 pb-3">
              <div class="flex items-center px-4">
                <div class="flex-shrink-0">
                  <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-white">{{ user.name }}</div>
                  <div class="text-sm font-medium text-sky-200">{{ user.email }}</div>
                </div>
                <button type="button" class="ml-auto flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900">
                  <span class="sr-only">View notifications</span>
                  <BellIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </DisclosurePanel>
        </nav>
        <header class="relative py-10">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-main-color">Configuración de cuenta</h1>
          </div>
        </header>
      </Disclosure>
  
      <main class="relative -mt-32">
        <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          <div class="overflow-hidden rounded-lg bg-white shadow">
            <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside class="py-6 lg:col-span-3">
                <nav class="space-y-1">
                  <a v-for="item in subNavigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700' : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'group border-l-4 px-3 py-2 flex items-center text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
                    <component :is="item.icon" :class="[item.current ? 'text-teal-500 group-hover:text-teal-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']" aria-hidden="true" />
                    <span class="truncate">{{ item.name }}</span>
                  </a>
                </nav>
              </aside>
  
              <form class="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
                <!-- Profile section -->
                <div class="py-6 px-4 sm:p-6 lg:pb-8">
                  <div>
                    <h2 class="text-lg font-medium leading-6 text-gray-900">Perfil</h2>
                    <p class="mt-1 text-sm text-gray-500">Esta información es publica, ten cuidado con lo que publicas</p>
                  </div>
  
                  <div class="mt-6 flex flex-col lg:flex-row">
                    <div class="flex-grow space-y-6">
                      <div>
                        <label for="username" class="block text-sm font-medium text-gray-700">Nombre</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <input type="text" name="username" id="username" autocomplete="username" class="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm" :value="user.handle" />
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div class="mt-6 grid grid-cols-12 gap-6">

                    <div class="col-span-12 sm:col-span-6">
                      <label for="company" class="block text-sm font-medium text-gray-700">Escuela</label>
                      <input type="text" name="company" id="company" autocomplete="organization" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" disabled placeholder="ESCOM" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
  } from '@headlessui/vue'
  import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
  import {
    Bars3Icon,
    BellIcon,
    UserCircleIcon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'

  import { computed } from "vue"
  import { useUserStore } from "../stores/user";
  const user_store = useUserStore()
  const user = computed(() => user_store.currentUser)
  const loading = computed(() => user_store.loading)

  const subNavigation = [
    { name: 'Perfil', href: '#', icon: UserCircleIcon, current: true },
  ]

  
  const availableToHire = ref(true)
  const privateAccount = ref(false)
  const allowCommenting = ref(true)
  const allowMentions = ref(true)
  </script>