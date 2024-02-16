<template>
  <div class="flex items-center">
    <img class="mr-4 rounded-lg" :src="`/places/${thumbnail}.jpg`" alt="">
    <div class="text-blackish-green">
      <p class="font-semibold">{{ placeName }}</p>
      <p class="text-xs">{{ nbHotels }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

import {defineProps} from "vue";

let props = defineProps({
  thumbnail: String,
  placeName: String,
  nbHotels: String
})
</script>

<style scoped>

</style>