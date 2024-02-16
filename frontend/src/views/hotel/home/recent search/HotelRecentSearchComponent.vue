<template>
  <LayoutComponent>
    <div class="mt-20">
      <h1 class="mb-8 font-bold text-[2rem]">Your recent searches</h1>
      <HotelRecentSearchListComponent />
    </div>
  </LayoutComponent>
</template>

<script setup lang="ts">
import LayoutComponent from "../../../../shared/MainLayout.vue";
import HotelRecentSearchListComponent from "./HotelRecentSearchListComponent.vue";
</script>

<style scoped>

</style>