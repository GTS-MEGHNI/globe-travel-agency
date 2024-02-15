<template>
  <div class="relative">
    <HeaderComponent />
    <FormComponent />
    <PlacesLayoutComponent />
    <ProductsShowcaseComponent />
    <ReviewsLayoutComponent />
  </div>
</template>

<script setup lang="ts">

import HeaderComponent from "./header/HeaderComponent.vue";
import FormComponent from "../search/FormComponent.vue";
import PlacesLayoutComponent from "./places/PlacesLayoutComponent.vue";
import ProductsShowcaseComponent from "./products showcase/ProductsShowcaseComponent.vue";
import ReviewsLayoutComponent from "./reviews/ReviewsLayoutComponent.vue";

</script>

<style>


</style>