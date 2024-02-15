<template>
  <div :style="{backgroundImage: `url(${backgroundUrl})`}" class="bg-cover rounded-xl">
    <div class="px-6 flex flex-col pt-[17.875rem] pb-6">
      <div class="text-white flex items-center justify-between">
        <div>
          <h1 class="font-semibold text-2xl">{{ cityName }}</h1>
          <p class="text-sm">{{ content }}</p>
        </div>
        <div>
          <p class="font-semibold text-2xl">{{ price }}</p>
        </div>
      </div>
      <button class="font-semibold text-sm bg-primary mt-4 py-[0.969rem] rounded">Book a Hotel</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

let props = defineProps({
  backgroundUrl: String,
  cityName: String,
  content: String,
  price: String
})
</script>

<style scoped>

</style>