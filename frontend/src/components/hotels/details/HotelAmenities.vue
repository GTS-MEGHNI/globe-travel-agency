<template>
  <div class="font-medium">
    <h1 class="font-bold text-xl">Amenities</h1>
    <div class="mt-8 gap-4 grid grid-flow-col grid-rows-5">
      <HotelAmenity name="Outdoor pool" iconUrl="/icons/pool.svg"/>
      <HotelAmenity name="Indoor pool" iconUrl="/icons/pool.svg"/>
      <HotelAmenity name="Spa and wellness center" iconUrl="/icons/spa.svg"/>
      <HotelAmenity name="Restaurant" iconUrl="/icons/restaurant.svg"/>
      <HotelAmenity name="Room service" iconUrl="/icons/room-service.svg"/>
      <HotelAmenity name="Fitness center" iconUrl="/icons/fitness.svg"/>
      <HotelAmenity name="Free Wi-Fi" iconUrl="/icons/bar.svg"/>
      <HotelAmenity name="Bar/Lounge" iconUrl="/icons/bar.svg"/>
      <HotelAmenity name="Tea/coffee machine" iconUrl="/icons/coffee.svg"/>
      <p class="font-semibold text-secondary">+24 more</p>
    </div>
  </div>

</template>
<script setup lang="ts">
import HotelAmenity from "./HotelAmenity.vue";
</script>

<style scoped>

</style>