<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="font-bold text-xl">Location/Map</h1>
      <button class="bg-primary font-semibold text-sm px-4 py-[.969rem]">View on google maps</button>
    </div>
    <img class="rounded-2xl" src="/map.jpg" alt="">

    <div class="flex items-center gap-1 mt-2">
      <img src="/icons/location.svg" alt="">
      <p class="text-sm">Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

let props = defineProps({
  address: String
})
</script>

<style scoped>

</style>