<template>
    <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
        @click="open_store"
    >
        <img :src="store.image" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { toRefs } from 'vue';
import { use_stores_store } from '../../stores/stores';

const stores_store = use_stores_store()
const router = useRouter()

const props = defineProps(["store"])

const { store } = toRefs(props)

const open_store = async () => {
    router.push({ name: "store", params: { id: store?.value.id } })
}

</script>