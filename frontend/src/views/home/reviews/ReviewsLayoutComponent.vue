<template>
  <LayoutComponent>
    <div class="mt-16">
      <div class="mb-10 flex items-center justify-between">
        <div>
          <h1 class="text-4xl font-semibold">Reviews</h1>
          <p class="mt-4">What people says about Golobe facilities</p>
        </div>
        <SeeAllButtonComponent content="See All"/>
      </div>
      <ReviewsListComponent/>
    </div>
  </LayoutComponent>
</template>

<script setup lang="ts">

import ReviewsListComponent from "./ReviewsComponent.vue";
import LayoutComponent from "../../../shared/LayoutComponent.vue";
import SeeAllButtonComponent from "../../../shared/SeeAllButtonComponent.vue";

</script>

<style scoped>

</style>