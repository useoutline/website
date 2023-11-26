<script lang="ts" setup>
useHead({
  title: `Page Not Found @ ${AppConstants.SiteTitle}`,
});
</script>

<template>
  <main class="flex flex-column" style="min-height: 100%">
    <AppHeader style="width: 100%" />
    <NotFound />
  </main>
</template>
