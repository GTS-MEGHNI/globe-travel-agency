<script setup lang="ts">
import MainLayout from "../../shared/MainLayout.vue";
import SeeAllButtonComponent from "../../shared/OutlinedButton.vue";
import DestinationCard from "./DestinationCard.vue";
</script>

<template>
  <MainLayout>
    <div class="mb-10 flex items-center justify-between">
      <div>
        <h1 class="mb-4 text-4xl font-semibold">Plan your perfect trip</h1>
        <p class="text-blackish-green">Search Flights & Places Hire to our most popular destinations</p>
      </div>
      <div>
        <SeeAllButtonComponent content="See All places"/>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-8">
      <DestinationCard city="Istanbul, Turkey" thumbnailUrl="/places/istanbul.jpg"/>
      <DestinationCard city="Sydney, Australia" thumbnailUrl="/places/sydney.jpg"/>
      <DestinationCard city="Baku, Azerbaijan" thumbnailUrl="/places/baku.jpg"/>
      <DestinationCard city="Malé, Maldives" thumbnailUrl="/places/male.jpg"/>
      <DestinationCard city="Paris, France" thumbnailUrl="/places/paris.jpg"/>
      <DestinationCard city="New York, US" thumbnailUrl="/places/new-york.jpg"/>
      <DestinationCard city="London, UK" thumbnailUrl="/places/london.jpg"/>
      <DestinationCard city="Tokyo, Japan" thumbnailUrl="/places/tokyo.jpg"/>
      <DestinationCard city="Dubai, UAE" thumbnailUrl="/places/dubai.jpg"/>
    </div>
  </MainLayout>
</template>


<style scoped>

</style>