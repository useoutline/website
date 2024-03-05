<script setup lang="ts">
import "@fontsource-variable/inter";
import useOutlineAnalytics from "@useoutline/analytics";

const config = useRuntimeConfig();

if (process.client) {
  const analytics = useAnalytics();
  const data = useOutlineAnalytics(config.public.outlineAnalyticsId, {
    mock: import.meta.dev,
    debug: import.meta.dev,
  });
  analytics.value = data;
}

// Scroll to top after page transition
const nuxtApp = useNuxtApp();
nuxtApp.hook("page:transition:finish", (e) => {
  if (process.client) {
    document.querySelector("#__nuxt")?.scrollTo(0, 0);
  }
});
</script>

<template>
  <NuxtLoadingIndicator color="#4685ff" />
  <NuxtLayout name="main">
    <NuxtPage />
  </NuxtLayout>
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
