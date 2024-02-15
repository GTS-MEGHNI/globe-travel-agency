<template>
  <div>
    <div class="flex items-start gap-4">
      <img :src=avatarUrl alt="">
      <div>
        <div class="flex justify-between mb-2s">
          <p>
            <span class="font-semibold text-sm">{{author}}</span>
            <span class="mx-2">|</span>
            <span class="text-sm">{{rating}}</span>
          </p>
          <button><img src="/icons/flag.svg"></button>
        </div>
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

let props = defineProps({
  author: String,
  avatarUrl: String,
  rating: String,
  content: String
})
</script>

<style scoped>

</style>