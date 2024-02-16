<template>
  <!-- Reviews -->
  <div>
    <div class="flex items-center justify-between mb-6">
      <h1 class="font-bold text-xl">Reviews</h1>
      <button class="bg-primary font-semibold text-sm px-4 py-[.969rem] rounded">Give your review</button>
    </div>
    <div class="flex items-center gap-4">
      <p class="font-bold text-[3.125rem]">4.2</p>
      <div>
        <p class="mb-2 font-semibold text-xl">Very good</p>
        <p class="text-sm">371 verified viewers</p>
      </div>
    </div>

    <hr class="border border-light-gray my-6">

    <div>
      <HotelReviewComponent
          author="Omar Siphron"
          avatarUrl="/reviewers/user-1.jpg"
          rating="5.0 Amazing"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat."
      />
      <hr class="border border-light-gray my-6">
      <HotelReviewComponent
          author="Cristofer Ekstrom Bothman"
          avatarUrl="/reviewers/user-2.jpg"
          rating="5.0 Amazing"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat."
      />
      <hr class="border border-light-gray my-6">
      <HotelReviewComponent
          author="Kaiya Lubin"
          avatarUrl="/reviewers/user-3.jpg"
          rating="5.0 Amazing"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat."
      />
      <hr class="border border-light-gray my-6">
      <HotelReviewComponent
          author="Kaiya Lubin"
          avatarUrl="/reviewers/user-4.jpg"
          rating="5.0 Amazing"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat."
      />
      <hr class="border border-light-gray my-6">
      <HotelReviewComponent
          author="Terry George"
          avatarUrl="/reviewers/user-5.jpg"
          rating="5.0 Amazing"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat."
      />
      <hr class="border border-light-gray my-6">
    </div>
    <div class="w-full flex gap-6 items-center place-content-center	">
      <img src="../../../assets/icons/dark-left-arrow.svg" alt="">
      <p>1 of 40</p>
      <img src="../../../assets/icons/dark-right-arrow.svg" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">

import HotelReviewComponent from "./HotelReviewComponent.vue";
</script>

<style scoped>

</style>