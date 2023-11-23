<script setup lang="ts">
useHead({
  title: "Outline Analytics - Uncover Insights with Privacy-Focused Analytics",
});
</script>

<template>
  <main class="main-app">
    <AppHeader />
    <AppHero class="page-section" />
    <AppIllustration />
    <AppFeatures id="features" class="page-section" />
    <AppStayUpdated class="page-section" />
  </main>
</template>

<style scoped>
.main-app {
  overflow-y: auto;
  height: 100%;
}

.page-section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

@media screen and (max-width: 767px) {
  .page-section {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
}
</style>
