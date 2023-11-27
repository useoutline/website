<script setup lang="ts">
import "@fontsource-variable/inter";
import useOutlineAnalytics from "@useoutline/analytics";

const config = useRuntimeConfig();

if (process.client) {
  const analytics = useAnalytics();
  const data = await useOutlineAnalytics(config.public.outlineAnalyticsId, {
    mock: import.meta.dev,
    debug: import.meta.dev,
  });
  analytics.value = data;
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
