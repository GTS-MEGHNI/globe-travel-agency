<template>

  <div class="mt-2.5 p-6 box-shadow rounded-lg">
    <div class="flex gap-4 flex-col">
      <div><h1 class="text-xl font-bold">Login or Sign up to book</h1></div>

      <!-- Phone number -->
      <div>
        <input class="pl-4 py-2 rounded w-full bg-transparent focus:outline-none border border-gray-border"
               type="text"
               placeholder="Phone Number">
      </div>

      <div>
        <p class="text-sm">We’ll call or text you to confirm your number. Standard message and data rates apply.
          <span class="font-medium">Privacy Policy</span>
        </p>
      </div>

      <div>
        <button class="font-medium bg-primary w-full py-[.875rem]">Continue</button>
      </div>
    </div>

    <!-- Separator -->
    <div class="flex gap-6 items-center my-6">
      <hr>
      <div class="font-medium"><span>Or</span></div>
      <hr>
    </div>

    <!-- Social Login -->
    <div class="flex justify-between mb-4">
      <button class="social"><img src="/icons/facebook.svg" alt=""></button>
      <button class="social"><img src="/icons/google.svg" alt=""></button>
      <button class="social"><img src="/icons/apple.svg" alt=""></button>
    </div>

    <!-- Email -->
    <div>
      <button class="flex items-center justify-center gap-4 font-medium w-full py-[.875rem] border border-primary">
        <img src="/icons/mail.svg" alt="">
        Continue with email
      </button>
    </div>

  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>

hr {
  @apply grow border border-light-gray
}

.social {
  @apply px-[6.646rem] border border-primary py-4 rounded
}

img {
  width: 24px;
  height: 24px;
}

</style>