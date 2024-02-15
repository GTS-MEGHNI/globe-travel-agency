<template>

  <div>
    <LayoutComponent>
      <div class="flex gap-2 mt-12 mb-8 font-medium text-sm">
        <p class="text-secondary">Turkey</p>
        <img src="/icons/right-arrow.svg" alt="">
        <p class="text-secondary">Istanbul</p>
        <img src="/icons/right-arrow.svg" alt="">
        <p>CVK Park Bosphorus Hotel Istanbul</p>
      </div>
    </LayoutComponent>

    <div class="px-[5rem]">

      <div class="flex">

        <div class="w-[49.375rem]">

          <BookingRoomComponent/>

          <BookingPaymentOptionsComponent />

          <BookingAuthComponent />

          <BookingCreditCardComponent />

        </div>

        <div>
          <BookingBillingSummaryLayoutComponent />
        </div>

      </div>
    </div>

  </div>




</template>

<script setup lang="ts">
import LayoutComponent from "../../../shared/LayoutComponent.vue";
import BookingRoomComponent from "./room/BookingRoomComponent.vue";
import BookingPaymentOptionsComponent from "./payment-options/BookingPaymentOptionsComponent.vue";
import BookingAuthComponent from "./auth/BookingAuthComponent.vue";
import BookingBillingSummaryLayoutComponent from "./billing-summary/BookingBillingSummaryLayoutComponent.vue";
import BookingCreditCardComponent from "./credit-card/BookingCreditCardComponent.vue";

</script>

<style scoped>


</style>