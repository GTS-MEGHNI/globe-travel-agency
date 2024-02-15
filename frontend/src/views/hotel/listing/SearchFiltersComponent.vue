<template>
  <div class="text-blackish-green w-[24.5%]">
    <h1 class="font-semibold text-xl mb-8">Filters</h1>

    <!-- Price filter -->
    <PriceFilterComponent />

    <hr class="hr">

    <!-- Rating -->
    <RatingFilterComponent />

    <hr>

    <!-- Freebies -->
    <FreebiesFilterComponent />


    <hr>

    <!-- Amenities -->
    <AmenitiesFilterComponent />

  </div>
</template>

<script setup lang="ts">
import PriceFilterComponent from "./search filters/PriceFilterComponent.vue";
import RatingFilterComponent from "./search filters/RatingFilterComponent.vue";
import FreebiesFilterComponent from "./search filters/FreebiesFilterComponent.vue";
import AmenitiesFilterComponent from "./search filters/AmenitiesFilterComponent.vue";


</script>

<style scoped>

hr {
  @apply my-8 border-blackish-green opacity-25
}

.hr {
  @apply mt-20
}




</style>

