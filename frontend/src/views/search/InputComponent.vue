<template>
  <div class="flex border border-gray	rounded-md items-center relative">
    <input  class="outline-none bg-transparent py-4 pl-4" type="text">
    <button>
      <img class="mx-3" src="icons/bidirectional-arrays.svg" alt="">
    </button>
    <span class="text-sm bg-white absolute -top-3 left-3">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">

import {defineProps} from "vue";

let props = defineProps({

  label: {
    required: true,
    type: String
  },
  /*inputWidth: {
    required: true,
    type: String
  }*/
})
</script>

<style scoped>

</style>