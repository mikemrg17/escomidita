<template v-if="!loading">
    <div>
      <main>
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
  
              <form class="divide-gray-200 lg:col-span-9" action="#" method="POST">
                <!-- Profile section -->
                <div class="py-6 px-4 sm:p-6 lg:pb-8">
                  <div>
                    <h2 class="text-lg font-medium leading-6 text-gray-900">Cambiar contraseña</h2>
                  </div>
                  <div class="mt-6 grid grid-rows-4 gap-6">
                    <div class="col-span-12 sm:col-span-6">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">Contraseña anterior</label>
                      <input type="password" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" :value="user.password" />
                    </div>
  
                    <div class="col-span-12 sm:col-span-6">
                      <label for="last-name" class="block text-sm font-medium text-gray-700">Nueva contraseña</label>
                      <input type="password" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" :value="user.password" />
                    </div>
                    <div class="grow flex items-end">
                        <a class="block font-medium text-white bg-red rounded-lg  px-4 py-2 text-center mt-auto max-w-[16rem] ml-auto"> GUARDAR
                        </a>
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
    import { UserCircleIcon, KeyIcon } from "@heroicons/vue/24/outline";
    import { computed } from "vue"
    import { useUserStore } from "../stores/user";
    const user_store = useUserStore()
    const user = computed(() => user_store.currentUser)
    const loading = computed(() => user_store.loading)

    const subNavigation = [
      { name: 'Profile', href: '#', icon: UserCircleIcon, current: false },
      { name: 'Password', href: '../password',  icon: KeyIcon, current: true },
    ]
    </script>