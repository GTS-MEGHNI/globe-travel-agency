<template>
  <div class="nav-container py-[1.313rem] px-[6.5rem] bg-white">
    <nav class="text-blackish-green flex items-center justify-between">
      <!-- Buttons -->
      <div class="font-semibold text-sm flex items-center">
        <button class="flex items-center mr-8">
          <img class="mr-2" src="/icons/black-airplane.svg" alt="">
          Find Flight
        </button>
        <button class="flex items-center mr-8">
          <img src="/icons/black-bed.svg" alt="">
          Find Stays
        </button>
      </div>

      <!-- Logo -->
      <div>
        <img src="logo.svg" alt="">
      </div>

      <!-- Authentication -->
      <div class="flex text-sm font-semibold">
        <button class="items-center mr-8">Login</button>
        <button class="py-[0.969rem] px-6 bg-blackish-green text-white rounded-lg">Sign up</button>
      </div>
    </nav>
  </div>

</template>
<script setup lang="ts">

</script>


<style scoped>
.nav-container {
  box-shadow: 0px 4px 16px 0px rgba(17, 34, 17, 0.05)
}
</style>