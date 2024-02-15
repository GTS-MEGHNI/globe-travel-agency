<template>
  <button class="mt-4 text-black bg-primary py-4 px-4 flex items-center font-medium text-sm">
    <img class="mr-2" src="/icons/paper-plane.svg" alt="">
    {{ content }}
  </button>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

let props = defineProps({
  content: String
})
</script>

<style scoped>

</style>