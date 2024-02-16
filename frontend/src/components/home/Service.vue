<script setup lang="ts">
import {defineProps} from "vue";
import ServiceActionButton from "./ServiceActionButton.vue";
defineProps({
  imageUrl: null,
  title: null,
  content: null,
  buttonContent: null
})
</script>

<template>
  <div
      class="main flex flex-col justify-end bg-[url('/pictures/home/airport.jpg')] bg-cover w-[604px] h-[560px] rounded-[20px]"
      :style="{backgroundImage: `url('${imageUrl}')`}">
    <div class="mb-6 flex flex-col items-center text-white">
      <h1 class="mb-2 font-bold text-5xl">{{ title }}</h1>
      <p>{{ content }}</p>
      <ServiceActionButton :content=buttonContent />
    </div>
  </div>
</template>

