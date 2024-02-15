<template>
  <LayoutComponent>
    <div class="mt-20 grid grid-cols-2 gap-6">
      <ProductShowcaseComponent
          imageUrl="/home/airport.jpg"
          title="Flights"
          content="Search Flights & Places Hire to our most popular destinations"
          buttonContent="Show Flights"
      />
      <ProductShowcaseComponent
          imageUrl="/home/hotel-showcase.jpg"
          title="Hotels"
          content="Search hotels & Places Hire to our most popular destinations"
          buttonContent="Show Hotels"
      />
    </div>
  </LayoutComponent>

</template>

<script setup lang="ts">

import LayoutComponent from "../../../shared/LayoutComponent.vue";
import ProductShowcaseComponent from "./ProductShowcaseComponent.vue";
</script>

<style scoped>

</style>