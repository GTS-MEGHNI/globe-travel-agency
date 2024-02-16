<template>
  <div>
    <div class="flex items-center justify-between">
      <div class="w-2/3">
        <h1 class="mb-4 font-semibold text-[2rem]">{{title}}</h1>
        <p>{{ content }}</p>
      </div>
      <SeeAllButtonComponent content="See All"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import SeeAllButtonComponent from "./OutlinedButton.vue";
import {defineProps} from "vue";

let props = defineProps({
  title: String,
  content: String
})

</script>

<style scoped>

</style>