<template>
  <div class="grid grid-cols-3 gap-8">
    <PlaceCardComponent city="Istanbul, Turkey" thumbnailUrl="/places/istanbul.jpg"/>
    <PlaceCardComponent city="Sydney, Australia" thumbnailUrl="/places/sydney.jpg"/>
    <PlaceCardComponent city="Baku, Azerbaijan" thumbnailUrl="/places/baku.jpg"/>
    <PlaceCardComponent city="Malé, Maldives" thumbnailUrl="/places/male.jpg"/>
    <PlaceCardComponent city="Paris, France" thumbnailUrl="/places/paris.jpg"/>
    <PlaceCardComponent city="New York, US" thumbnailUrl="/places/new-york.jpg"/>
    <PlaceCardComponent city="London, UK" thumbnailUrl="/places/london.jpg"/>
    <PlaceCardComponent city="Tokyo, Japan" thumbnailUrl="/places/tokyo.jpg"/>
    <PlaceCardComponent city="Dubai, UAE" thumbnailUrl="/places/dubai.jpg"/>
  </div>
</template>

<script setup lang="ts">

import PlaceCardComponent from "./PlaceCardComponent.vue";

</script>

<style scoped>

</style>