<script setup lang="ts">
import MainLayout from "../components/shared/MainLayout.vue";
import HotelSearchForm from "../components/hotels/listing/HotelSearchForm.vue";
import HotelSearchFilters from "../components/hotels/listing/filters/HotelSearchFilters.vue";
import HotelSearchResultsSection from "../components/hotels/listing/HotelSearchResultsSection.vue";
</script>

<template>
  <MainLayout>
    <!-- Search -->
    <HotelSearchForm/>
    <div class="flex flex-cols mt-8 gap-10">
      <!-- Search Filters -->
      <HotelSearchFilters/>
      <!-- Results -->
      <HotelSearchResultsSection/>
    </div>
  </MainLayout>
</template>


