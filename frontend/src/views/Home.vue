<script setup lang="ts">

import Header from "../components/home/Header.vue";
import Form from "../components/search/Form.vue";
import DestinationsSection from "../components/home/DestinationsSection.vue";
import ServicesSection from "../components/home/ServicesSection.vue";
import ReviewsSection from "../components/home/ReviewsSection.vue";
</script>

<template>
  <div class="relative">
    <Header/>
    <Form class="mt-[-7.75rem]"/>
    <DestinationsSection class="mt-20"/>
    <ServicesSection class="mt-20"/>
    <ReviewsSection class="mt-16"/>
  </div>
</template>

<style scoped>

</style>