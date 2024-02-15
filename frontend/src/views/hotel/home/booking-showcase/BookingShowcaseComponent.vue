<template>
  <LayoutComponent>
    <div class="my-20">
      <SectionHeaderComponent
          title="Fall into travel"
          content="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
      />
      <ShowcaseListComponent />
    </div>
  </LayoutComponent>
</template>

<script setup lang="ts">
import LayoutComponent from "../../../../shared/LayoutComponent.vue";
import SectionHeaderComponent from "../../../../shared/SectionHeaderComponent.vue";
import ShowcaseListComponent from "./ShowcaseListComponent.vue"
</script>

<style scoped>

</style>