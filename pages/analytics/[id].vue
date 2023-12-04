<script setup lang="ts">
const route = useRoute();
const appFrame = ref(null as HTMLIFrameElement | null);

const iframeSource = computed(() => {
  const { id } = route.params;
  // return `https://app.useoutline.xyz/analytics/${id}/public-view`;
  return "";
});

onMounted(() => {
  if (appFrame.value) {
    const appFrameHeight =
      appFrame.value?.contentWindow?.document.getElementById("__nuxt")
        ?.scrollHeight ?? 0;
    appFrame.value.height = appFrameHeight + 32 + "px";
  }
});
</script>

<template>
  <iframe ref="appFrame" :src="iframeSource"></iframe>
</template>

<style></style>
