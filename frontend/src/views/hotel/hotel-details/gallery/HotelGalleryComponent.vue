<template>
  <div class="flex items-stretch gap-2 mb-16">
    <div class="flex-1">
      <img class="h-full rounded-tl-xl rounded-bl-xl" src="/hotels/gallery/image.jpg" alt="">
    </div>
    <div class="flex-1 grid grid-cols-2 gap-2">
      <img src="/hotels/gallery/image-1.jpg" alt="">
      <img class="rounded-tr-xl" src="/hotels/gallery/image-2.jpg" alt="">
      <img src="/hotels/gallery/image-3.jpg" alt="">
      <div class="relative">
        <img class="rounded-br-xl" src="/hotels/gallery/image-4.jpg" alt="">
        <button class="absolute bottom-4 right-4 bg-primary font-semibold text-sm px-4 py-[.969rem] rounded">View all
          photos
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>