<template>
  <LayoutComponent>
    <div class="mt-20">
      <div class="mb-10 flex items-center justify-between">
        <div>
          <h1 class="mb-4 text-4xl font-semibold">Plan your perfect trip</h1>
          <p class="text-blackish-green">Search Flights & Places Hire to our most popular destinations</p>
        </div>
        <div>
          <SeeAllButtonComponent content="See All places"/>
        </div>
      </div>
      <PlacesListComponent/>
    </div>
  </LayoutComponent>
</template>

<script setup lang="ts">
import PlacesListComponent from "./PlacesComponent.vue";
import LayoutComponent from "../../../shared/LayoutComponent.vue";
import SeeAllButtonComponent from "../../../shared/SeeAllButtonComponent.vue";
</script>

<style scoped>

</style>