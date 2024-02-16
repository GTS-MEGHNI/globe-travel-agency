<template>
  <div class="w-full font-medium flex justify-between">
    <div class="flex items-center gap-4">
      <img class="rounded" :src=imageUrl alt="">
      <p>{{ description }}</p>
    </div>
    <div class="flex items-center gap-16">
      <p><span class="font-semibold text-2xl">${{price}}</span><span class="font-semibold text-sm">/night</span></p>
      <button class="rounded font-semibold text-sm bg-primary px-[2.406rem] py-[.969rem]">Book now</button>
    </div>
  </div>
</template>

<script setup lang="ts">

import {defineProps} from "vue";

let props = defineProps({
  description: String,
  price: Number,
  imageUrl: String
})

</script>

<style scoped>

</style>