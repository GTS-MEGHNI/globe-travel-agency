<script setup lang="ts">
import PriceFilter from "./PriceFilter.vue";
import RatingFilter from "./RatingFilter.vue";
import FreebiesFilter from "./FreebiesFilter.vue";
import AmenitiesFilter from "./AmenitiesFilter.vue";
</script>
<template>
  <div class="text-blackish-green w-[24.5%]">
    <h1 class="font-semibold text-xl mb-8">Filters</h1>

    <!-- Price filter -->
    <PriceFilter />

    <hr class="hr">

    <!-- Rating -->
    <RatingFilter />

    <hr>

    <!-- Freebies -->
    <FreebiesFilter />


    <hr>

    <!-- Amenities -->
    <AmenitiesFilter />

  </div>
</template>



<style scoped>

hr {
  @apply my-8 border-blackish-green opacity-25
}

.hr {
  @apply mt-20
}




</style>

