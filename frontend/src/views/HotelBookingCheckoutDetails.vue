<template>
  <LayoutComponent>

    <div class="flex gap-2 mt-12 mb-8 font-medium text-sm">
      <p class="text-secondary">Turkey</p>
      <img src="/icons/right-arrow.svg" alt="">
      <p class="text-secondary">Istanbul</p>
      <img src="/icons/right-arrow.svg" alt="">
      <p>CVK Park Bosphorus Hotel Istanbul</p>
    </div>

    <div class="flex items-center justify-between">
      <div>
        <h1 class="font-bold text-2xl mb-4">CVK Park Bosphorus Hotel Istanbul</h1>
        <div class="flex gap-2 items-center">
          <img src="/icons/location.svg" alt="">
          <p>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
        </div>
      </div>
      <div>
        <div class="text-end mb-4">
          <p class="font-bold text-[2rem] text-secondary">$265</p>
        </div>
        <div class="flex items-center gap-[.938rem] items-stretch">
          <button class="p-[.875rem] border border-primary rounded"><img src="/icons/share.svg" alt=""></button>
          <button class="px-[2.375rem] bg-primary rounded">download</button>
        </div>
      </div>
    </div>

    <div class="flex shadow w-fit rounded-tr-2xl">

      <div class="bg-secondary-background py-[2.156rem] px-6 w-fit ">
        <div>
          <p class="font-semibold text-[2rem]">Thur, Dec 8</p>
          <p class="font-medium text-xs">Check-In</p>
          <img src="/icons/check-in.svg" alt="">
          <p class="font-semibold text-[2rem]">Fri, Dec 9</p>
          <p class="font-medium text-xs">Check-Out</p>
        </div>
      </div>

      <div class="bg-white rounded-tr-2xl rounded-br-2xl">

        <div class="bg-primary flex justify-between p-6 rounded-tr-2xl">
          <p class="font-bold text-xl">James Doe</p>
          <div class="font-bold text-sm">
            <p>Superior room - 1 double bed</p>
            <p class="text-end">or 2 twin beds</p>
          </div>
        </div>

        <div class="pt-6 pl-6 pr-[8.938rem]">
          <div class="flex gap-8">
            <div class="flex items-center gap-2">
              <div class="p-[.344rem] bg-secondary-background rounded">
                <img src="/icons/clock.svg" alt="">
              </div>
              <div class="flex flex-col">
                <p class="font-semibold text-xs">Check-In time</p>
                <p class="font-semibold">12:00pm</p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <div class="p-[.344rem] bg-secondary-background rounded">
                <img src="/icons/clock.svg" alt="">
              </div>
              <div class="flex flex-col">
                <p class="font-semibold text-xs">Check-Out time</p>
                <p class="font-semibold">11:30pm</p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <div class="p-[.344rem] bg-secondary-background rounded">
                <img src="/icons/clock.svg" alt="">
              </div>
              <div class="flex flex-col">
                <p class="font-semibold text-xs">Room no.</p>
                <p class="font-semibold">On arrival</p>
              </div>
            </div>
          </div>
        </div>

        <div class="ml-[1.875rem] mt-[2.531rem]">
          <p class="font-semibold text-[2rem]">EK</p>
          <p class="font-medium text-xs text-blackish-green">ABC12345</p>
        </div>

        <div class="flex justify-end">
          <img src="/icons/bar-code.svg" alt="">
        </div>
      </div>
    </div>

    <div class="mt-16">
      <p class="font-semibold text-2xl">Terms and Conditions</p>
    </div>

    <div class="mt-[2.125rem]">
      <h2 class="font-meidum text-xl mb-4">Payments</h2>
      <ul>
        <li>If you are purchasing your ticket using a debit or credit card via the Website, we will process these
          payments via the automated secure common payment gateway which will be subject to fraud screening purposes.
        </li>
        <li>If you do not supply the correct card billing address and/or cardholder information, your booking will not
          be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is
          declined for any reason or if you have supplied incorrect card information. If we become aware of, or is
          notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be
          cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice
          to any action that may be taken against us.
        </li>
        <li>Golobe may require the card holder to provide additional payment verification upon request by either
          submitting an online form or visiting the nearest Golobe office, or at the airport at the time of check-in.
          Golobe reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit
          card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when
          collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing
          bank. Credit card details are held in a secured environment and transferred through an internationally
          accepted system.
        </li>
      </ul>
    </div>


  </LayoutComponent>
</template>

<script setup lang="ts">

import LayoutComponent from "../components/shared/MainLayout.vue";
</script>

<style scoped>

</style>