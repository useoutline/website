<template>
  <section class="flex items-center justify-center app-illustration-section">
    <NuxtImg
      format="avif, webp"
      src="/images/landing-page-illustration.png"
      width="900"
      height="536"
      alt="Outline Analytics App Illustration"
      class="app-illustration"
    />
  </section>
</template>

<style scoped>
.app-illustration {
  max-width: 100%;
  aspect-ratio: 900 / 535.91;
  height: auto;
}

.app-illustration-section {
  height: max-content;
}

@media screen and (max-width: 767px) {
  .app-illustration-section {
    margin-top: 0;
    height: max-content;
  }
}
</style>
