<script setup lang="ts">
import useOutlineAnalytics from "@useoutline/analytics";

const config = useRuntimeConfig();

if (process.client) {
  useOutlineAnalytics(config.public.outlineAnalyticsId);
}
</script>

<template>
  <NuxtLoadingIndicator color="#4685ff" />
  <NuxtPage />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
