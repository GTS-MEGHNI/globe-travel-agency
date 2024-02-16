<script setup lang="ts">
import InputComponent from "./SearchInput.vue";
import MainLayout from "../shared/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <div class="shadow-md rounded-2xl relative z-10 bg-white">
      <div class="pl-8 pr-4 pt-4">
        <div class="flex gap-8">
          <button class="button">
            <img src="../../assets/icons/dark-airplane.svg" alt="">
            Flights
          </button>
          <div class="h-12 border-l-2 border-gray"></div>
          <button class="button">
            <img src="../../assets/icons/dark-bed.svg" alt="">
            Stays
          </button>
        </div>
        <div class="mt-12 grid grid-cols-4 gap-6">
          <InputComponent label="From - To"/>
          <InputComponent label="Trip"/>
          <InputComponent label="Depart - Return"/>
          <InputComponent label="Passenger - Return"/>
        </div>
        <div class="flex items-center mt-8 justify-end pb-8">
          <button class="text-sm flex items-center font-medium mr-6">
            <img class="mr-2" src="../../assets/icons/dark-add.svg" alt="">
            Add Promo Code
          </button>
          <button class="bg-primary py-4 px-4 flex items-center font-medium text-sm">
            <img class="mr-2" src="../../assets/icons/dark-paper-plane.svg" alt="">
            Show Flights
          </button>
        </div>
      </div>
    </div>
  </MainLayout>
</template>


<style scoped>
.button {
  @apply flex items-center gap-2
}
</style>
