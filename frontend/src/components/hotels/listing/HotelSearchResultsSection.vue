<script setup lang="ts">
import HotelCard from "./HotelCard.vue";

</script>
<template>
  <div class="w-full">

    <!-- Result Filters -->
    <div class="grid grid-cols-3 bg-white h-fit w-full box-shadow rounded-lg py-[1.094rem] px-6 gap-6">

      <div class="place-type">
        <h1>Hotels</h1>
        <p>257 places</p>
        <hr class="absolute bottom-[-1.094rem] left-0 border-primary border-2">
      </div>

      <div class="place-type">
        <h1>Motels</h1>
        <p>95 places</p>
        <hr class="absolute bottom-[-1.094rem] left-0 border-primary border-2">
      </div>

      <div class="place-type">
        <h1>Resorts</h1>
        <p>70 places</p>
        <hr class="absolute bottom-[-1.094rem] left-0 border-primary border-2">
      </div>

    </div>

    <!-- Sort results -->
    <div class="flex justify-between my-8">
      <div class="flex gap-2">
        <p>Sort by <span class="font-semibold">Recommended</span></p>
        <img src="/icons/down-arrow.svg" alt="">
      </div>

      <!-- Number of results -->
      <div>
        <p class="font-semibold">Showing 4 of <span class="text-secondary">257 places</span></p>
      </div>
    </div>

    <!-- Hotels list -->
    <div class="grid grid-cols-1 gap-6 mt-8">
      <HotelCard
          name="Ciragan Palace Kempinski Istanbul"
          imageUrl="/hotels/hotel-1.jpg"
          address="Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
          :nbStars=3
          :nbAmenities=20
          :ratingNumber=4.2
          ratingDescription="Very good"
          :nbReviews=100
          :startingFromPrice=450
      />

      <HotelCard
          name="Four Seasons Hotel Istanbul at Sultanahmet"
          imageUrl="/hotels/hotel-2.jpg"
          address="Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
          :nbStars=3
          :nbAmenities=20
          :ratingNumber=4.2
          ratingDescription="Very good"
          :nbReviews=100
          :startingFromPrice=450
      />

      <HotelCard
          name="Swissotel The Bosphorus, Istanbul"
          imageUrl="/hotels/hotel-3.jpg"
          address="Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
          :nbStars=3
          :nbAmenities=20
          :ratingNumber=4.2
          ratingDescription="Very good"
          :nbReviews=100
          :startingFromPrice=450
      />

      <HotelCard
          name="Swissotel The Bosphorus Istanbul"
          imageUrl="/hotels/hotel-4.jpg"
          address="Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
          :nbStars=3
          :nbAmenities=20
          :ratingNumber=4.2
          ratingDescription="Very good"
          :nbReviews=100
          :startingFromPrice=450
      />
    </div>
    <button
        class="text-white bg-blackish-green w-full py-[0.969rem] font-semibold mt-8 mb-[7.5rem]">
      how more results
    </button>
  </div>
</template>


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