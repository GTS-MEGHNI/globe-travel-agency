<template>
  <div class="flex rounded-xl box-shadow">
    <div class="bg-cover bg-center"><img class="rounded-tl-xl rounded-bl-xl" :src=imageUrl alt=""></div>
    <div class="p-6 grow">
      <!-- Hotel data !-->
      <div class="flex justify-between">
        <div>
          <!-- Name -->
          <div class="font-bold text-xl mb-4">
            <p>{{ name }}</p>
          </div>

          <!-- Address -->
          <div class="flex gap-1">
            <img class="w-4 h-4" src="/icons/location.svg" alt="">
            <p class="font-medium text-xs">{{ address }}</p>
          </div>

          <div class="my-3 flex gap-[2rem]">

            <!-- Stars -->
            <div class="flex gap-2 items-center">
              <div class="flex">
                <img v-for="i in nbStars" class="star-logo" src="/icons/star.svg" alt="">
              </div>
              <p class="text-xs font-medium">{{ nbStars }} Star Hotel</p>
            </div>

            <!-- Amenities -->
            <div class="flex items-center gap-2">
              <img src="/icons/aminity.svg" alt="">
              <span class="font-bold text-xs">{{ nbAmenities }}+</span>
              <span class="text-xs">Amenities</span>
            </div>
          </div>

          <div class="flex gap-">
            <!-- Rating & Reviews-->
            <div class="flex gap-2 items-center">
              <span class="font-medium px-[.688rem] py-[.5rem] border rounded border-primary">{{ ratingNumber }}</span>
              <span class="font-bold text-xs">{{ ratingDescription }}</span>
              <!-- Reviews -->
              <span class="font-medium text-sm">{{ nbReviews }} reviews</span>
            </div>
          </div>
        </div>
        <!-- Price -->
        <div>
          <p class="font-medium text-xs">starting from</p>
          <p class="text-secondary font-bold"><span class="font-bold text-2xl">${{ startingFromPrice }}</span>/<span
              class="font-sm">night</span></p>
          <p class="text-end font-medium text-xs">excl. tax</p>
        </div>
      </div>

      <hr class="my-6 border border-light-gray">

      <div class="flex gap-4 items-stretch">

        <!-- Like Button -->
        <div>
          <button class="p-[.875rem] border border-primary rounded"><img src="/icons/heart.svg" alt=""></button>
        </div>

        <!-- View Button -->
        <div class="grow">
          <button class="bg-primary h-full w-full rounded font-semibold">View Place</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {defineProps} from "vue";

let props = defineProps({
  imageUrl: String,
  name: String,
  address: String,
  nbStars: Number,
  nbAmenities: Number,
  ratingNumber: Number,
  ratingDescription: String,
  nbReviews: Number,
  startingFromPrice: Number
})
</script>

<style scoped>

.star-logo {
  @apply h-4 w-4
}


</style>