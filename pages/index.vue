<script setup lang="ts">
useHead({
  title: "Outline Analytics - Uncover Insights with Privacy-Focused Analytics",
});
</script>

<template>
  <main class="min-height-full">
    <AppHeader />
    <AppHero class="page-section" />
    <AppIllustration />
    <AppFeatures id="features" class="page-section" />
    <AppStayUpdated class="page-section" />
    <AppFooter class="page-footer page-section" />
  </main>
</template>

<style scoped>
.page-section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.page-footer {
  margin-top: 20rem;
}

@media screen and (max-width: 767px) {
  .page-section {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }

  .page-footer {
    margin-top: 10rem;
  }
}
</style>
