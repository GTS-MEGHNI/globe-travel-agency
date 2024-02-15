<template>
  <div class="grid grid-cols-1 gap-6 mt-8">
    <HotelCardComponent
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

    <HotelCardComponent
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

    <HotelCardComponent
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

    <HotelCardComponent
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
  <button class="text-white bg-blackish-green w-full py-[0.969rem] font-semibold mt-8 mb-[7.5rem]">Show more results
  </button>
</template>

<script setup lang="ts">

import HotelCardComponent from "./HotelCardComponent.vue";
</script>

<style scoped>

</style>