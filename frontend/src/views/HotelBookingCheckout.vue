<script setup lang="ts">
import LayoutComponent from "../components/shared/MainLayout.vue";
import HotelCheckoutRoom from "../components/hotels/checkout/HotelCheckoutRoom.vue";
import HotelCheckoutPaymentOptions from "../components/hotels/checkout/HotelCheckoutPaymentOptions.vue";
import HotelCheckoutAuth from "../components/hotels/checkout/HotelCheckoutAuth.vue";
import HotelCheckoutSummary from "../components/hotels/checkout/HotelCheckoutSummary.vue";
import HotelCheckoutCreditCard from "../components/hotels/checkout/HotelCheckoutCreditCard.vue";
</script>

<template>
  <div>
    <LayoutComponent>
      <div class="flex gap-2 mt-12 mb-8 font-medium text-sm">
        <p class="text-secondary">Turkey</p>
        <img src="../assets/icons/dark-right-arrow.svg" alt="">
        <p class="text-secondary">Istanbul</p>
        <img src="../assets/icons/dark-right-arrow.svg" alt="">
        <p>CVK Park Bosphorus Hotel Istanbul</p>
      </div>
    </LayoutComponent>

    <div class="px-[5rem]">

      <div class="flex">

        <div class="w-[49.375rem]">

          <HotelCheckoutRoom/>

          <HotelCheckoutPaymentOptions/>

          <HotelCheckoutAuth/>

          <HotelCheckoutCreditCard/>

        </div>

        <HotelCheckoutSummary/>

      </div>
    </div>
  </div>
</template>

<style scoped>


</style>