<template>
  <div>
    <h1 class="font-bold text-xl mb-8">Available rooms</h1>
    <div class="flex flex-col gap-4">

      <HotelRoom
          description="Superior room - 1 double bed or 2 twin beds"
          :price=240
          imageUrl="/hotels/rooms/room-1.jpg"
      />

      <hr class="border border-light-gray">

      <HotelRoom
          description="Superior room - City view - 1 double bed or 2 twin beds"
          :price=280
          imageUrl="/hotels/rooms/room-2.jpg"
      />

      <hr class="border border-light-gray">

      <HotelRoom
          description="Superior room - City view - 1 double bed or 2 twin beds"
          :price=320
          imageUrl="/hotels/rooms/room-3.jpg"
      />

      <hr class="border border-light-gray">

      <HotelRoom
          description="Superior room - City view - 1 double bed or 2 twin beds"
          :price=385
          imageUrl="/hotels/rooms/room-4.jpg"
      />

    </div>

  </div>

</template>

<script setup lang="ts">

import HotelRoom from "./HotelRoom.vue";
</script>

<style scoped>

</style>