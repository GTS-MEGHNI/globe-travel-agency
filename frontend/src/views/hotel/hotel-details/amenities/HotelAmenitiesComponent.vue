<template>
  <div class="font-medium">
    <h1 class="font-bold text-xl">Amenities</h1>
    <div class="mt-8 gap-4 grid grid-flow-col grid-rows-5">
      <HotelAmenityComponent name="Outdoor pool" iconUrl="/icons/pool.svg"/>
      <HotelAmenityComponent name="Indoor pool" iconUrl="/icons/pool.svg"/>
      <HotelAmenityComponent name="Spa and wellness center" iconUrl="/icons/spa.svg"/>
      <HotelAmenityComponent name="Restaurant" iconUrl="/icons/restaurant.svg"/>
      <HotelAmenityComponent name="Room service" iconUrl="/icons/room-service.svg"/>
      <HotelAmenityComponent name="Fitness center" iconUrl="/icons/fitness.svg"/>
      <HotelAmenityComponent name="Free Wi-Fi" iconUrl="/icons/bar.svg"/>
      <HotelAmenityComponent name="Bar/Lounge" iconUrl="/icons/bar.svg"/>
      <HotelAmenityComponent name="Tea/coffee machine" iconUrl="/icons/coffee.svg"/>
      <p class="font-semibold text-secondary">+24 more</p>
    </div>
  </div>

</template>

<script setup lang="ts">

import HotelAmenityComponent from "./HotelAmenityComponent.vue";
</script>

<style scoped>

</style>