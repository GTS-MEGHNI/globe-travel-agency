<template>
  <div class="w-[10rem] border border-primary rounded-xl mt-8">
    <div class="h-full flex flex-col justify-between py-4 pl-4">
      <img class="w-8 h-8" src="../../../assets/icons/dark-feature.svg" alt="">
      <div>
        <p class="font-medium">{{name}}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  name: String
})

</script>

<style scoped>

</style>