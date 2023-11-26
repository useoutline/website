<script setup lang="ts">
import { Motion } from "motion/vue";
</script>

<template>
  <Motion
    tag="section"
    class="container flex flex-column items-center justify-center hero"
    :initial="MotionProps.fadeUpIn.initial"
    :animate="MotionProps.fadeUpIn.animate(0.3, 0.7)"
  >
    <h1 class="fs-48 color-primary text-center text-balance">
      Uncover Insights with Privacy-Focused Analytics
    </h1>
    <p class="text-center text-balance">
      Unlock valuable insights while respecting user privacy with Outline
      Analytics. Our cookie-free solution empowers businesses to gather data
      ethically. <br class="mobile-hide" />Sign up now to join the movement
      towards responsible data analytics.
    </p>
    <GetEarlyAccessCTA class="hero-btn" />
  </Motion>
</template>

<style scoped>
.hero {
  gap: 2.4rem;
  height: clamp(48rem, calc(100% - 16rem), 72rem);
}

.hero h1 {
  max-width: 64rem;
}

.hero p {
  max-width: 60rem;
}

.hero-btn {
  padding: 1.4rem 2.2rem;
}

@media screen and (max-width: 767px) {
  .hero h1 {
    font-size: var(--fs-32);
  }

  .hero {
    height: max-content;
  }
}
</style>
