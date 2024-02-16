
<script setup lang="ts">

import HotelGallery from "../components/hotels/details/HotelGallery.vue";
import HotelOverview from "../components/hotels/details/HotelOverview.vue";
import HotelFeatures from "../components/hotels/details/HotelFeatures.vue";
import LineSeparator from "../components/hotels/details/LineSeparator.vue";
import HotelRooms from "../components/hotels/details/HotelRooms.vue";
import HotelMapComponent from "../components/hotels/details/HotelMapComponent.vue";
import HotelAmenities from "../components/hotels/details/HotelAmenities.vue";
import HotelReviews from "../components/hotels/details/HotelReviews.vue";
import HotelSummary from "../components/hotels/details/HotelSummary.vue";
import MainLayout from "../components/shared/MainLayout.vue";

</script>
<template>
  <MainLayout>

    <!-- Meta -->
    <HotelSummary />

    <!-- Gallery -->
    <HotelGallery />

    <!-- Separator -->
    <LineSeparator />

    <!-- Overview -->
    <HotelOverview />

    <!-- Special -->
    <HotelFeatures />

    <!-- Separator -->
    <LineSeparator />

    <!-- Rooms -->
    <HotelRooms />

    <!-- Separator -->
    <LineSeparator />

    <!-- Map -->
    <HotelMapComponent />

    <!-- Separator -->
    <LineSeparator />

    <!-- Amenities -->
    <HotelAmenities />

    <!-- Separator -->
    <LineSeparator />

    <!-- Reviews -->
    <HotelReviews />

  </MainLayout>


</template>


<style scoped>

.star-logo {
  @apply w-4 h-4
}

</style>