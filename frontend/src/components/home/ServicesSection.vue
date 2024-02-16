<script setup lang="ts">
import MainLayout from "../../shared/MainLayout.vue";
import Service from "./Service.vue";
</script>

<template>
  <MainLayout>
    <div class="grid grid-cols-2 gap-6">
      <Service
          imageUrl="/home/airport.jpg"
          title="Flights"
          content="Search Flights & Places Hire to our most popular destinations"
          buttonContent="Show Flights"/>
      <Service
          imageUrl="/home/hotel-showcase.jpg"
          title="Hotels"
          content="Search hotels & Places Hire to our most popular destinations"
          buttonContent="Show Hotels"/>
    </div>
  </MainLayout>
</template>

<style scoped>

</style>