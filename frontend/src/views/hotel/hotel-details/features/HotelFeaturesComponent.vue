<template>
  <div class="flex gap-4">

    <div class="bg-primary rounded-xl w-fit mt-8">
      <div class="py-4 pl-4 pr-16">
        <p class="font-bold text-[2rem]">4.2</p>
        <div class="mt-8">
          <p class="font-bold">Very Good</p>
          <p class="font-medium text-sm">371 reviews</p>
        </div>
      </div>
    </div>
    <HotelFeatureComponent name="Near park"/>
    <HotelFeatureComponent name="Near nightlife"/>
    <HotelFeatureComponent name="Near theater"/>
    <HotelFeatureComponent name="Clean hotel"/>

  </div>
</template>

<script setup lang="ts">
import HotelFeatureComponent from "./HotelFeatureComponent.vue";
</script>

<style scoped>

</style>