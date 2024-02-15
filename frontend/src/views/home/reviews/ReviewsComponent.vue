<template>
  <div class="grid grid-cols-3 gap-[3.125rem]">
    <ReviewComponent
        header="“A real sense of community, nurtured”"
        content="Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..."
        :nbStars=5
        workPlace="Weave Studios – Kai Tak"
        authorName="Olga"
        pictureName="review-1"
    />
    <ReviewComponent
        header="“The facilities are superb. Clean, slick, bright.”"
        content="“A real sense of community, nurtured”Really appreciate the help and support from the staff ..."
        :nbStars=4
        workPlace="Weave Studios – Olympic"
        authorName="Thomas"
        pictureName="review-2"
    />
    <ReviewComponent
        header="“A real sense of community, nurtured”"
        content="Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..."
        :nbStars=5
        workPlace="Weave Studios – Kai Tak"
        authorName="Olga"
        pictureName="review-3"
    />
  </div>
</template>

<script setup lang="ts">

import ReviewComponent from "./ReviewComponent.vue";
</script>

