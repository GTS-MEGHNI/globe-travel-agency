<template>
  <div>
    <h2 class="mb-5 font-semibold">Freebies</h2>
    <div class="flex flex-col gap-2">
      <div>
        <input type="checkbox" name="" id="free-breakfast">
        <span>Free breakfast</span>
      </div>
      <div>
        <input type="checkbox" name="" id="free-parking">
        <span>Free parking</span>
      </div>
      <div>
        <input type="checkbox" name="" id="free-internet">
        <span>Free internet</span>
      </div>
      <div>
        <input type="checkbox" name="" id="airport-shuttle">
        <span>Free airport shuttle</span>
      </div>
      <div>
        <input type="checkbox" name="" id="free-cancellation">
        <span>Free cancellation</span>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
input[type="checkbox"] {
  @apply mr-2
}

</style>