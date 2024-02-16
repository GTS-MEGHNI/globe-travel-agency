<script setup lang="ts">
import MainLayout from "../shared/MainLayout.vue";
import SeeAllButtonComponent from "../shared/OutlinedButton.vue";
import ReviewCard from "./ReviewCard.vue";
</script>

<template>
  <MainLayout>
    <div class="mb-10 flex items-center justify-between">
      <div>
        <h1 class="text-4xl font-semibold">Reviews</h1>
        <p class="mt-4">What people says about Golobe facilities</p>
      </div>
      <SeeAllButtonComponent content="See All"/>
    </div>
    <div class="grid grid-cols-3 gap-[3.125rem]">
      <ReviewCard
          header="“A real sense of community, nurtured”"
          content="Really appreciate the help and support from the staff during these tough times. Shutout to Katie for ..."
          :nbStars=5
          workPlace="Weave Studios – Kai Tak"
          authorName="Olga"
          pictureName="review-1"
      />
      <ReviewCard
          header="“The facilities are superb. Clean, slick, bright.”"
          content="“A real sense of community, nurtured”Really appreciate the help and support from the staff ..."
          :nbStars=4
          workPlace="Weave Studios – Olympic"
          authorName="Thomas"
          pictureName="review-2"
      />
      <ReviewCard
          header="“A real sense of community, nurtured”"
          content="Really appreciate the help and support from the staff during these tough times. Shutout to Katie for ..."
          :nbStars=5
          workPlace="Weave Studios – Kai Tak"
          authorName="Olga"
          pictureName="review-3"
      />
    </div>
  </MainLayout>
</template>


<style scoped>

</style>