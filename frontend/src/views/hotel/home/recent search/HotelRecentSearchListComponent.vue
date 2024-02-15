<template>
  <div class="grid grid-cols-4">
    <SearchComponent thumbnail="istanbul" placeName="Istanbul, Turkey" nbHotels="1000 places"/>
    <SearchComponent thumbnail="paris" placeName="Paris, France" nbHotels="600 places"/>
    <SearchComponent thumbnail="baku" placeName="Baku, Azerbaijan" nbHotels="200 places"/>
    <SearchComponent thumbnail="male" placeName="Malé, Maldives" nbHotels="150 places"/>
  </div>
</template>

<script setup lang="ts">
import SearchComponent from "./SearchComponent.vue";

</script>

<style scoped>

</style>