<template>
  <LayoutComponent>

    <!-- Meta -->
    <HotelMetaDataComponent />

    <!-- Gallery -->
    <HotelGalleryComponent />

    <!-- Separator -->
    <SeparatorComponent />

    <!-- Overview -->
    <HotelOverviewComponent />

    <!-- Special -->
    <HotelFeaturesComponent />

    <!-- Separator -->
    <SeparatorComponent />

    <!-- Rooms -->
    <HotelRoomsComponent />

    <!-- Separator -->
    <SeparatorComponent />

    <!-- Map -->
    <HotelMapComponent />

    <!-- Separator -->
    <SeparatorComponent />

    <!-- Amenities -->
    <HotelAmenitiesComponent />

    <!-- Separator -->
    <SeparatorComponent />

    <!-- Reviews -->
    <HotelReviewsComponent />


  </LayoutComponent>


</template>

<script setup lang="ts">

import LayoutComponent from "../../../shared/MainLayout.vue";
import HotelGalleryComponent from "./gallery/HotelGalleryComponent.vue";
import HotelOverviewComponent from "./overview/HotelOverviewComponent.vue";
import HotelFeaturesComponent from "./features/HotelFeaturesComponent.vue";
import SeparatorComponent from "./SeparatorComponent.vue";
import HotelRoomsComponent from "./rooms/HotelRoomsComponent.vue";
import HotelMapComponent from "./map/HotelMapComponent.vue";
import HotelAmenitiesComponent from "./amenities/HotelAmenitiesComponent.vue";
import HotelReviewsComponent from "./reviews/HotelReviewsComponent.vue";
import HotelMetaDataComponent from "./meta/HotelMetaDataComponent.vue";

</script>

<style scoped>

.star-logo {
  @apply w-4 h-4
}

</style>