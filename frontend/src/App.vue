<script setup lang="ts">
import NavigationComponent from "./components/navigation/NavigationComponent.vue";
import FooterComponent from "./components/footer/FooterComponent.vue";
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import NewsletterLayoutComponent from "./components/newsletter/NewsletterLayoutComponent.vue";


const shouldDisplayNavBar = computed(() => {
  return useRoute().name !== 'home'
})


</script>


<template>
  <div class="bg-background container w-[90rem] mx-auto">
    <NavigationComponent v-if="shouldDisplayNavBar === true"/>
    <router-view></router-view>
    <NewsletterLayoutComponent />
    <FooterComponent/>
  </div>
</template>

