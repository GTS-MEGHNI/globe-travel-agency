<script setup lang="ts">

import MainLayout from "../../shared/MainLayout.vue";
import SectionHeader from "../../shared/SectionHeader.vue";
</script>

<template>
  <MainLayout>
    <SectionHeader
        title="Fall into travel"
        content="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam,
        we’ve got the travel tools to get you to your destination."/>

    <div class="mt-6 flex gap-6">
      <div class="flex flex-col shrink px-6 pt-6 bg-primary flex-1 rounded-[1.25rem]">
        <div class="text-blackish-green flex justify-between">
          <div class="w-min">
            <h1 class="font-bold text-[2.5rem]">Backpacking Sri Lanka</h1>
          </div>
          <!-- Price -->
          <div class="p-2 bg-white flex flex-col items-center rounded-xl h-min">
            <span>from</span>
            <span class="font-semibold text-[1.25rem]">$ 700</span>
          </div>
        </div>
        <div class="flex flex-col justify-between grow">
          <p class="text-sm">Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It
            helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life
            in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
          <button class="mb-[1.313rem] py-[0.969rem] bg-white rounded font-medium">Book Flight</button>
        </div>
      </div>

      <div class="">
        <div class="grid grid-cols-2 gap-x-5 gap-y-6">
          <img src="/booking-destinations/sri-lanka-1.jpg" alt="">
          <img src="/booking-destinations/sri-lanka-2.jpg" alt="">
          <img src="/booking-destinations/sri-lanka-3.jpg" alt="">
          <img src="/booking-destinations/sri-lanka-4.jpg" alt="">
        </div>
      </div>
    </div>
  </MainLayout>
</template>



<style scoped>

img {
  @apply rounded-xl border-2 border-primary
}

</style>