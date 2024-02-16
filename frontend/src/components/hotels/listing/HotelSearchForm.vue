<script setup lang="ts">

</script>

<template>
  <div class="search-container mt-12">
    <div class="bg-white rounded-2xl">
      <div class="py-8 px-6 flex items-center justify-between gap-4">
        <div class="grid grid-cols-4 gap-6 grow">

          <div class="input-container">
            <img src="../../../assets/icons/dark-bed.svg" alt="">
            <input type="text" placeholder="Istanbul, Turkey">
            <span>Enter destination</span>
          </div>

          <div class="input-container">
            <input type="text" placeholder="Fri 12/2">
            <img src="../../../assets/icons/dark-calendar.svg" alt="">
            <span>Check In</span>
          </div>

          <div class="input-container">
            <input type="text" placeholder="Sun 12/4">
            <img src="../../../assets/icons/dark-calendar.svg" alt="">
            <span>Check out</span>
          </div>

          <div class="input-container">
            <img src="../../../assets/icons/dark-user.svg" alt="">
            <input type="text" placeholder="1 room, 2 guests">
            <span>Rooms & Guests</span>
          </div>

        </div>

        <div class="w-fit">
          <button class="p-[1.141rem] bg-primary">
            <img src="../../../assets/icons/dark-loop.svg" alt="">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.input-container {
  @apply py-2 flex items-center relative border border-gray rounded-md px-2
}

input {
  @apply w-full ml-2 outline-none bg-transparent py-[0.625rem]
}

span {
  @apply px-1 text-sm bg-white absolute -top-3
}

.search-container {
  box-shadow: 0px 4px 16px 0px rgba(17, 34, 17, 0.05);
}


</style>