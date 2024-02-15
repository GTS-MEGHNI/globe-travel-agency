<template>
  <div class="w-full">

    <!-- Result Filters -->
    <ResultFiltersComponent/>

    <div class="flex justify-between my-8">
      <!-- Sort results -->
      <SortResultsComponent/>

      <!-- Number of results -->
      <NumberOfResultsComponent/>
    </div>

    <ResultsListComponent/>

  </div>
</template>

<script setup lang="ts">
import ResultFiltersComponent from "./ResultFiltersComponent.vue";
import SortResultsComponent from "./SortResultsComponent.vue";
import NumberOfResultsComponent from "./NumberOfResultsComponent.vue";
import ResultsListComponent from "./ResultsListComponent.vue";

</script>

<style scoped>

</style>