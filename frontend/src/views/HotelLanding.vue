<script setup lang="ts">
import Header from "../components/hotels/landing/Header.vue";
import HotelSearchForm from "../components/hotels/landing/HotelSearchForm.vue";
import RecentSearchSection from "../components/hotels/landing/RecentSearchSection.vue";
import BookingSection from "../components/hotels/landing/BookingSection.vue";
import CountryShowcase from "../components/hotels/landing/CountryShowcase.vue";
</script>

<template>
  <Header />
  <HotelSearchForm class="mt-[-7.75rem]"/>
  <RecentSearchSection class="mt-20"/>
  <BookingSection />
  <CountryShowcase />
</template>


<style scoped>

</style>