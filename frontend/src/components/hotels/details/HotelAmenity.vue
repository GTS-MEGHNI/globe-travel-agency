<template>
  <div class="flex items-center gap-2">
    <img :src=iconUrl alt="">
    <p>{{ name }}</p>
  </div>
</template>

<script setup lang="ts">

import {defineProps} from "vue";

let props = defineProps({
  name: String,
  iconUrl: String
})
</script>

<style scoped>

</style>