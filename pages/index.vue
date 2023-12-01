<script setup lang="ts">
useHead({
  title: `${AppConstants.SiteTitle}`,
});
</script>

<template>
  <div class="flex-grow height-full">
    <AppHero class="page-section height-full" />
    <AppIllustration />
    <AppFeatures id="features" class="page-section" />
    <AppStayUpdated class="page-section" />
  </div>
</template>
