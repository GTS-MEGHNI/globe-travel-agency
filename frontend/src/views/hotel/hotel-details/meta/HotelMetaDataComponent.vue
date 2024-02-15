<template>
  <div class="flex gap-2 mt-12 mb-8 font-medium text-sm">
    <p class="text-secondary">Turkey</p>
    <img src="/icons/right-arrow.svg" alt="">
    <p class="text-secondary">Istanbul</p>
    <img src="/icons/right-arrow.svg" alt="">
    <p>CVK Park Bosphorus Hotel Istanbul</p>
  </div>

  <div class="flex justify-between mb-8">
    <div>
      <div class="flex items-center mb-4">
        <p class="mr-4 font-bold text-2xl">CVK Park Bosphorus Hotel Istanbul</p>
        <div class="flex mr-1">
          <img class="star-logo" src="/icons/star.svg" alt="">
          <img class="star-logo" src="/icons/star.svg" alt="">
          <img class="star-logo" src="/icons/star.svg" alt="">
          <img class="star-logo" src="/icons/star.svg" alt="">
          <img class="star-logo" src="/icons/star.svg" alt="">
          <img class="star-logo" src="/icons/star.svg" alt="">
        </div>
        <p class="font-medium text-xs">5 stars hotel</p>
      </div>


      <!-- Address -->
      <div class="flex items-center gap-1">
        <img src="/icons/location.svg" alt="">
        <p>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
      </div>

      <!-- Rating & Reviews -->
      <div class="text-xs mt-2">
        <span class="border border-primary py-[.531rem] px-[.688rem] rounded font-medium mr-2">4.2</span>
        <span class="font-bold">Very Good </span>
        <span class="font-medium">371 reviews</span>
      </div>
    </div>

    <!-- Price & Actions -->
    <div>
      <div class="text-end text-secondary font-bold mb-4">
        <span class="text-[2rem]">$240</span>/<span class="text-sm">night</span>
      </div>

      <div class="flex flex-cols gap-4">
        <button class="border border-primary p-3.5 rounded"><img src="/icons/light-heart.svg" alt=""></button>
        <button class="border border-primary p-3.5 rounded"><img src="/icons/share.svg" alt=""></button>
        <button class="bg-primary font-semibold text-sm px-[2.406rem] py-[0.969rem] rounded">Book now</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>