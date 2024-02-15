<template>
  <div>
    <button class="border border-primary px-4 py-3 font-medium">{{content}}</button>
  </div>
</template>

<script setup lang="ts">

import {defineProps} from "vue";

let props = defineProps({
  content:String
})

</script>
