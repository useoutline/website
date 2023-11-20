<template>
  <section class="flex items-center justify-center app-illustration-section">
    <img
      src="~/assets/images/landing-page-illustration.svg"
      loading="lazy"
      class="app-illustration"
      v-motion
      :initial="MotionProps.popScale.initial"
      :visibleOnce="MotionProps.popScale.enter"
      :delay="
        MotionProps.popShow.enter.transition.duration +
        MotionProps.popShow.delay +
        50
      "
    />
  </section>
</template>

<style scoped>
.app-illustration {
  max-width: 100%;
  aspect-ratio: 720 / 434.32;
}

.app-illustration-section {
  margin-top: -100px;
  height: max(50%, 434.32px);
}

@media screen and (max-width: 768px) {
  .app-illustration-section {
    margin-top: 0;
    height: max-content;
  }
}
</style>
