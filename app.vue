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
