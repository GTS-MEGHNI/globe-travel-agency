<template>
  <div>
    <h2 class="font-semibold">Price</h2>
    <div class="mt-5 ml-[0.7rem] w-[calc(100%-24px)]">
      <Slider v-model="value"
              tooltipPosition="bottom"
              @update="click"
              class="slider-blue"
      />
    </div>

  </div>
</template>

<script setup lang="ts">

import Slider from '@vueform/slider'
import {ref} from "vue";
let value = ref<Array<Number>>([0, 100])

function click() : void {
  console.log('lol')
}

</script>

<style scoped>


</style>

<style src="@vueform/slider/themes/default.css"></style>
