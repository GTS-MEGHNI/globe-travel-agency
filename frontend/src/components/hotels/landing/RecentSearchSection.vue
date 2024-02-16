<script setup lang="ts">
import MainLayout from "../../../shared/MainLayout.vue";
import RecentCitySearched from "./RecentCitySearched.vue";
</script>

<template>
  <MainLayout>
    <h1 class="mb-8 font-bold text-[2rem]">Your recent searches</h1>
    <div class="flex justify-between">
      <RecentCitySearched thumbnail="istanbul" placeName="Istanbul, Turkey" nbHotels="1000 places"/>
      <RecentCitySearched thumbnail="paris" placeName="Paris, France" nbHotels="600 places"/>
      <RecentCitySearched thumbnail="baku" placeName="Baku, Azerbaijan" nbHotels="200 places"/>
      <RecentCitySearched thumbnail="male" placeName="Malé, Maldives" nbHotels="150 places"/>
    </div>
  </MainLayout>
</template>


<style scoped>

</style>