<template>
  <LayoutComponent>
    <div class="mb-10 mt-[5.625rem] z-10 bg-white relative rounded-lg mb-[-9.625rem]">
      <div class="pl-6 flex bg-light-green gap-[11.938rem] rounded-lg">
        <div class="py-6">
          <h1 class="font-bold text-[2.75rem]">Subscribe</h1>
          <h1 class="font-bold text-[2.75rem]">Newsletter</h1>
          <p class="mt-6 mb-2 font-bold text-xl text-blackish-green">The Travel</p>
          <p class="">Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
          <div class="mt-4 flex items-center items-stretch">
            <div class="flex-grow">
              <input class="pl-4 w-full h-full mr-4 focus:outline-none" type="text" placeholder="Your email address">
            </div>
            <div>
              <button
                  class="px-4 py-[1.219rem] ml-8 text-white font-semibold rounded bg-blackish-green">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src="/icons/newsletter.svg" alt="">
        </div>
      </div>
    </div>
  </LayoutComponent>

</template>

<script setup lang="ts">
import LayoutComponent from '../shared/MainLayout.vue'
/**/
</script>


<style scoped>

</style>