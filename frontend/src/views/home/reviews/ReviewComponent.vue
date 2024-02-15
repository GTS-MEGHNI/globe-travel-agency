<template>
  <div class="p-6 shadow-md rounded-[1.3rem]">
    <h1 class="font-bold text-2xl">{{ header }}</h1>
    <p class="mt-6">{{ content }}</p>
    <div class="flex justify-end">
      <button class="align-right font-bold">View more</button>
    </div>
    <div class="mt-4">
      <div class="flex gap-4">
        <img v-for="n in nbStars" :key="n" src="/icons/star.svg" alt="">
      </div>
      <div class="mt-5">
        <h2 class="font-bold">{{ authorName }}</h2>
        <p class="text-xs text-blackish-green">{{ workPlace }}</p>
        <div class="mt-4 flex items-center">
          <img class="mr-2" src="/icons/google.svg" alt="">
          <p class="text-xs text-blackish-green">Google</p>
        </div>
      </div>
      <div class="mt-10">
        <img :src="`/pictures/home/${pictureName}.jpg`" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

let props = defineProps({
  header: String,
  content: String,
  nbStars: Number,
  workPlace: String,
  authorName: String,
  pictureName: String
})


</script>

<style scoped>

</style>