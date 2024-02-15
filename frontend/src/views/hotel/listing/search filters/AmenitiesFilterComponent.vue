<template>
  <div>
    <h2 class="mb-5 font-semibold">Amenities</h2>
    <div class="flex flex-col gap-2">
      <div>
        <input type="checkbox" name="" id="front-desk">
        <span>24h front desk</span>
      </div>
      <div>
        <input type="checkbox" name="" id="air-conditioned">
        <span>Air-conditioned</span>
      </div>
      <div>
        <input type="checkbox" name="" id="fitness">
        <span>Fitness</span>
      </div>
      <div>
        <input type="checkbox" name="" id="pool">
        <span>Pool</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "AmenitiesFilterComponent"
}
</script>

<style scoped>
input[type="checkbox"] {
  @apply mr-2
}
</style>