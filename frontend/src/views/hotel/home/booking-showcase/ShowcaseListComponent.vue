<template>
  <div class="mt-10 grid grid-cols-4 gap-4">
    <FlightDestinationShowcaseComponent
        backgroundUrl="/booking-destinations/melbourne.jpg"
        cityName="Melbourne"
        content="An amazing journey"
        price="$ 700"
    />
    <FlightDestinationShowcaseComponent
        backgroundUrl="/booking-destinations/paris.jpg"
        cityName="Paris"
        content="A Paris adventure"
        price="$ 600"
    />
    <FlightDestinationShowcaseComponent
        backgroundUrl="/booking-destinations/london.jpg"
        cityName="London"
        content="London eye adventure"
        price="$ 350"
    />
    <FlightDestinationShowcaseComponent
        backgroundUrl="/booking-destinations/columbia.jpg"
        cityName="Columbia"
        content="Amazing streets"
        price="$ 560"
    />
  </div>
</template>

<script setup lang="ts">
import FlightDestinationShowcaseComponent from "./HotelDestinationShowcaseComponent.vue";

</script>

<style scoped>

</style>