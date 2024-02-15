<template>
  <LayoutComponent>
    <!-- Search -->
    <SearchComponent />

    <div class="flex flex-cols mt-8 gap-10">

      <!-- Search Filters -->
      <SearchFiltersComponent />

      <!-- Results -->
      <ResultsComponent />

    </div>
  </LayoutComponent>
</template>

<script setup lang="ts">
import LayoutComponent from "../../../shared/LayoutComponent.vue";
import SearchComponent from "./SearchComponent.vue";
import SearchFiltersComponent from "./SearchFiltersComponent.vue";
import ResultsComponent from "./ResultsComponent.vue";

</script>

