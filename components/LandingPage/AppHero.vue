<template>
  <section
    id="hero"
    class="container flex flex-column items-center justify-center hero"
    v-motion
    :initial="MotionProps.popShow.initial"
    :enter="MotionProps.popShow.enter"
    :delay="MotionProps.popShow.delay"
  >
    <h1 class="fs-48 color-primary text-center">
      Uncover Insights with Privacy-Focused Analytics
    </h1>
    <p class="text-center">
      Unlock valuable insights while respecting user privacy with Outline
      Analytics. Our cookie-free solution empowers businesses to gather data
      ethically. <br class="mobile-hide" />Sign up now to join the movement
      towards responsible data analytics.
    </p>
    <GetEarlyAccessCTA class="hero-btn" />
  </section>
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

@media screen and (max-width: 768px) {
  .hero h1 {
    font-size: var(--fs-36);
  }

  .hero {
    height: max-content;
  }
}
</style>
