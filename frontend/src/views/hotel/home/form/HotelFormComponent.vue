<template>
  <div>
    <LayoutComponent>
      <div class="px-4 py-8 shadow-md rounded-2xl relative z-10 bg-white mt-[-7.75rem]">
        <h1 class="font-semibold text-xl mb-8">Where are you staying ?</h1>
        <div class="mb-8 grid grid-cols-4 gap-6">

          <div class="py-2 flex items-center relative border border-gray	rounded-md px-2">
            <img src="/icons/black-bed.svg" alt="">
            <input class="w-full ml-2 outline-none bg-transparent py-[0.625rem]" type="text"
                   placeholder="Istanbul, Turkey">
            <span class="px-1 text-sm bg-white absolute -top-3 left-3">Enter destination</span>
          </div>

          <div class="py-2 flex items-center relative border border-gray	rounded-md px-2">
            <input class="w-full ml-2 outline-none bg-transparent py-[0.625rem]" type="text"
                   placeholder="Fri 12/2">
            <span class="text-sm bg-white absolute -top-3 left-3">Check In</span>
            <img src="/icons/calendar.svg" alt="">
          </div>

          <div class="py-2 flex items-center relative border border-gray	rounded-md px-2">
            <input class="w-full ml-2 outline-none bg-transparent py-[0.625rem]" type="text"
                   placeholder="Sun 12/4">
            <span class="text-sm bg-white absolute -top-3 left-3">Check out</span>
            <img src="/icons/calendar.svg" alt="">
          </div>

          <div class="py-2 flex items-center relative border border-gray	rounded-md px-2">
            <img src="/icons/user.svg" alt="">
            <input class="w-full ml-2 outline-none bg-transparent py-[0.625rem]" type="text"
                   placeholder="1 room, 2 guests">
            <span class="text-sm bg-white absolute -top-3 left-3">Rooms & Guests</span>
          </div>


        </div>


        <div class="flex items-center justify-end gap-8">

          <button class="flex items-center font-normal">
            <img class="mr-2" src="/icons/add.svg" alt="">
            Add Promo Code
          </button>

          <button class="py-[0.696rem] px-4 bg-primary flex items-center font-medium">
            <img class="mr-2" src="/icons/hotel.svg" alt="">
            Show Places
          </button>

        </div>
      </div>
    </LayoutComponent>
  </div>
</template>

<script setup lang="ts">
import LayoutComponent from "../../../../shared/LayoutComponent.vue";
</script>

