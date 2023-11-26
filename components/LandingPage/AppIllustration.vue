<script setup lang="ts">
import { Motion } from "motion/vue";
</script>

<template>
  <Motion
    tag="section"
    class="flex items-center justify-center app-illustration-section"
    :initial="MotionProps.fadeBlurIn.initial"
    :animate="MotionProps.fadeBlurIn.animate(0.5, 1.2)"
  >
    <img
      src="~/assets/images/landing-page-illustration.svg"
      class="app-illustration"
    />
  </Motion>
</template>

<style scoped>
.app-illustration {
  max-width: 100%;
  aspect-ratio: 900 / 535.91;
}

.app-illustration-section {
  margin-top: -100px;
  height: max-content;
}

@media screen and (max-width: 767px) {
  .app-illustration-section {
    margin-top: 0;
    height: max-content;
  }
}
</style>
