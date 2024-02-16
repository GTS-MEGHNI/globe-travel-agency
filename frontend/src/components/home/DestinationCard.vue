<template>
  <div class="p-4 flex items-center rounded-2xl bg-white shadow-md">
    <img class="rounded-lg" :src=thumbnailUrl  alt="">
    <div class="ml-4">
      <h1 class="mb-2 text-blackish-green font-semibold">{{ city }}</h1>
      <p class="text-sm font-medium">Flights • Hotels • Resorts</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
defineProps({
  city: null,
  thumbnailUrl: null
})
</script>

<style scoped>

</style>