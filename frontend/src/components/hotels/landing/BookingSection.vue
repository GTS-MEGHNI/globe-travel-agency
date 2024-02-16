<script setup lang="ts">
import MainLayout from "../../shared/MainLayout.vue";
import SectionHeader from "../../shared/SectionHeader.vue";
import FlightDestinationShowcaseComponent from "./HotelBookingCard.vue";
</script>

<template>
  <MainLayout>
    <div class="my-20">
      <SectionHeader
          title="Fall into travel"
          content="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam,
          we’ve got the travel tools to get you to your destination."/>

      <div class="mt-10 grid grid-cols-4 gap-4">

        <FlightDestinationShowcaseComponent
            backgroundUrl="/booking-destinations/melbourne.jpg"
            cityName="Melbourne"
            content="An amazing journey"
            price="$ 700"/>

        <FlightDestinationShowcaseComponent
            backgroundUrl="/booking-destinations/paris.jpg"
            cityName="Paris"
            content="A Paris adventure"
            price="$ 600"/>

        <FlightDestinationShowcaseComponent
            backgroundUrl="/booking-destinations/london.jpg"
            cityName="London"
            content="London eye adventure"
            price="$ 350"/>

        <FlightDestinationShowcaseComponent
            backgroundUrl="/booking-destinations/columbia.jpg"
            cityName="Columbia"
            content="Amazing streets"
            price="$ 560"/>

      </div>
    </div>
  </MainLayout>
</template>


<style scoped>

</style>