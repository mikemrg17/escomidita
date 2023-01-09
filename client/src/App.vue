<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { computed, onMounted } from 'vue'
import { supabase } from './supabase';
import { use_user_store } from './stores/user';

const user_store = use_user_store()

</script>
