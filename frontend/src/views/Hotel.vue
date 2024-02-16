<script setup lang="ts">
import Header from "../components/hotels/Header.vue";
import HotelSearchForm from "../components/hotels/HotelSearchForm.vue";
import RecentSearchSection from "../components/hotels/RecentSearchSection.vue";
import BookingSection from "../components/hotels/BookingSection.vue";
import CountryShowcase from "../components/hotels/CountryShowcase.vue";
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