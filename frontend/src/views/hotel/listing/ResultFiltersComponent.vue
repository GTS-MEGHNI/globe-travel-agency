<template>
  <div class="grid grid-cols-3 bg-white h-fit w-full box-shadow rounded-lg py-[1.094rem] px-6 gap-6">

    <div class="place-type">
      <h1>Hotels</h1>
      <p>257 places</p>
      <hr class="absolute bottom-[-1.094rem] left-0 border-primary border-2">
    </div>

    <div class="place-type">
      <h1>Motels</h1>
      <p>95 places</p>
<!--      <hr class="absolute bottom-[-1.094rem] left-0 border-primary border-2">-->
    </div>

    <div class="w-full h-fit">
      <h1>Resorts</h1>
      <p>70 places</p>
<!--      <hr class="absolute bottom-[-1.094rem] left-0 border-primary border-2">-->
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

hr {
  width: calc(100% - 0.875rem);
}

h1 {
  @apply font-semibold
}

p {
  @apply text-light-text mt-2
}

.place-type {
  @apply w-full h-fit border-r border-r-light-gray relative
}

</style>